const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const router = express.Router();

module.exports = params => {

    const {client} = params;
    //const  categoriesCollection = client.db("reckoning").collection("categories");

    router.get('/',async (req, res, next) =>{
        console.log(`Goods root hit`)
    })

    router.post('/addCategories', async (req, res, next) => {
        let category = req.body;
        try {
            let categoryArr ={
                name:category.name,
                description:category.description,
                imageUrl:'',
                subCategories:[],
                goods:[],
                date:Date.now()
            }
            await client.db("reckoning").collection("categories").insertOne(categoryArr,(err,results)=>{
                res.json({message:'inserted',data:results})
            })
        }
        catch (err) {
            console.log("Error add Categories end point", err);
            return next(err);
        }
    })

    router.get('/getCategories', async (req, res, next) => {
        try{
            await client.db("reckoning").collection("categories").find().toArray(function (err,result) {
                if (err) throw err;

                let data = result.map((item)=>{
                    return {
                        category:item.name,
                        id:item._id,
                        description:item.description
                    }
                })
                res.json(data);
            })
        }
        catch (err) {
            console.log("Error get Categories end point", err);
            return next(err);
        }
        //Controller.getCategories(req,res)
    })

    router.post('/getCategoriesLimit', async (req, res, next) => {
        try{
            let page = req.body.page,
                rows = req.body.rows,
                skip = (page-1)*rows,
                length = 0;

            let categories = await client.db("reckoning").collection("categories").find({});

            categories.count(function(err, count){
                length = count
            });
            categories.limit(rows);
            categories.skip(skip);
            categories.toArray(function (err,result) {

                if (err) throw err;

                let data={
                    httpCode: 200,
                    message: "succeed!",
                    status: 1,
                    data: null,
                    page:page,
                    pageSize:rows,
                    length:length
                }
                data.data = result;
                res.json(data);
            })
        }
        catch (err) {
            console.log("Error get Categories limits end point", err);
            return next(err);
        }
        //Controller.getCategoriesLimit(req,res)
    })

    router.put('/updateCategory', async (req, res, next) => {
        let category = req.body;
        try{
            let id = category._id;

            let date = new Date();

            await client.db("reckoning").collection("categories").updateOne(
                {_id:ObjectId(id)},
                {
                    $set:{
                        date: date.getTime(),
                        description: category.description,
                        imageUrl: category.imageUrl,
                        name: category.name
                    }
                },(err,result)=>{
                    if (err){
                        //console.log(err)
                        res.send({result:'Failed Update'})
                    } else {
                        // console.log('category update')
                        res.send({'message':'category update',data:result})
                    }
                }
            )
        }
        catch (err) {
            console.log("Error update Categorie end point", err);
            return next(err);
        }
        //Controller.updateCategory(category,res)
    })

    router.get('/getCategory', async (req, res, next) => {
        let id = req.query.id;
        try {
           await client.db("reckoning").collection("categories").findOne({_id:ObjectId(id)},function (err,result) {
                if (err) throw err;
                res.json(result);
            })
        }
        catch (err) {
            console.log("Error get Category end point", err);
            return next(err);
        }
        //Controller.getOneCategory(req,res)
    })

    router.put('/deleteCategory', async (req, res, next) => {
        try{
            let id = req.body.id;
            client.db("reckoning").collection("categories").deleteOne({_id: ObjectId(id)},1,(err,result)=>{
                if (err){
                    // console.log(err)
                    res.send({result:'Failed delete'})
                } else {
                    // console.log('category delete')
                    res.send({'message':'category delete',data:result})
                }
            })
        }
        catch (err) {
            console.log("Error delete Category end point", err);
            return next(err);
        }
        //Controller.deleteCategories(req,res)
    })
    return router;
}
