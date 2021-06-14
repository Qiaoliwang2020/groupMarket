const express = require('express');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;

const router = express.Router();

// bodyParse setup
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

module.exports = params => {

    const {client} = params;
    //const unitCollection =client.db("reckoning").collection("units");

    // logic
    router.get('/',async (req, res, next) =>{
        console.log(`units root hit`)

    })
    router.post('/addUnit',async (req, res, next) =>{
        let unit = req.body;
        try{
            let unitArr ={
                name:unit.name,
                date:Date.now()
            }
            await client.db("reckoning").collection("units").insertOne(unitArr,(err,results)=>{
                res.json({message:'inserted',data:results})
            })
        }
        catch (err) {
            console.log("Error on add units end point", err);
            return next(err);
        }
        //Controller.addUnit(unit,res)
    })

    router.get('/getUnits',async (req, res, next) =>{
        //Controller.getUnits(req,res)
        try{
            await client.db("reckoning").collection("units").find().toArray(function (err,result) {
                if (err) throw err;

                let data = result.map((item)=>{
                    return {
                        unit:item.name,
                        id:item._id,
                    }
                })
                res.json(data);
            })
        }
        catch (err) {
            console.log("Error on get units end point", err);
            return next(err);
        }
    })

    router.put('/updateUnit',async (req, res, next) =>{
        // let category = req.body;
        // Controller.updateCategory(category,res)
    })

    router.put('/deleteUnit',async (req, res, next) =>{
        // Controller.deleteCategories(req,res)
    })
    return router;

}
