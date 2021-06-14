const express = require('express');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;

const router = express.Router();

// bodyParse setup
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

module.exports = params => {

    const {client} = params;
    //const goodsCollection = client.db("reckoning").collection("goods");

    // logic
    router.get('/',async (req, res, next) =>{
        console.log(`Goods root hit`)

    })

    router.get('/getGoods',async (req, res, next) =>{

        let categoryId = req.query.categoryId;
        let goodsId = req.query.goodsId;
        try {
            if(categoryId){
                await client.db("reckoning").collection("goods").find({categoryId:categoryId}).toArray(function (err,results) {
                    res.json({message:'ok',data:results})
                })
            }
            else if(goodsId){
                await client.db("reckoning").collection("goods").findOne({_id:ObjectId(goodsId)},function (err,results) {
                    res.json({message:'ok',data:results})
                })
            }
            else{
                await client.db("reckoning").collection("goods").find().toArray(function (err,results) {
                    res.json({message:'ok',data:results})
                })
            }

        } catch (err) {
            console.log("Error on get goods end point", err);
            return next(err);
        }
        //Controller.getGoods(req,res);
    })
    router.post('/addGoods',async (req, res, next) =>{
        let payload = req.body;
        try{
            let goods ={
                name:payload.name,
                categoryId:payload.categoryId,
                description:payload.description,
                unitId :payload.unitId,
                stock:payload.stock,
                thumbs:payload.thumbs,
                originalPrice:payload.originalPrice,
                groupPrice:payload.groupPrice ? payload.groupPrice : 0,
                date:Date.now()
            }

            await client.db("reckoning").collection("goods").insertOne(goods,(err,results)=>{
                res.json({message:'inserted',data:results})
            })
        }
        catch (err) {
            console.log("Error on get goods end point", err);
            return next(err);
        }

        //Controller.addGoods(payload,res)
    })
    router.put('/updateGoods',async (req, res, next) =>{
        let goods = req.body;
        let id = goods._id;
        let date = new Date();

        try{
            await client.db("reckoning").collection("goods").updateOne(
                {_id:ObjectId(id)},
                {
                    $set:{
                        name:goods.name,
                        categoryId:goods.categoryId,
                        description:goods.description,
                        unitId :goods.unitId,
                        stock:goods.stock,
                        thumbs:goods.thumbs,
                        originalPrice:goods.originalPrice,
                        groupPrice:goods.groupPrice,
                        date:date.getTime()
                    }
                },(err,result)=>{
                    if (err){
                        //console.log(err)
                        res.send({result:'Failed Update'})
                    } else {
                        //console.log('goods updated')
                        res.json({message:'ok',data:result})
                    }
                }
            )
        }
        catch (err) {
            console.log("Error on get goods end point", err);
            return next(err);
        }
        //Controller.updateGoods(goods,res);
    })
    router.put('/deleteGoods',async (req, res, next) =>{
        let id = req.body.id;
        try{
            await client.db("reckoning").collection("goods").deleteOne({_id: ObjectId(id)},1,(err,result)=>{
                if (err){
                    // console.log(err)
                    res.send({result:'Failed delete'})
                } else {
                    // console.log('goods delete')
                    res.send({'message':'goods delete',data:result})
                }
            })
        }
        catch (err) {
            console.log("Error on get goods end point", err);
            return next(err);
        }
        //Controller.deleteGoods(req,res)
    })
    return router;

}