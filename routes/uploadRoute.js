const express = require('express');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;

const router = express.Router();

const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: './public/uploadFiles'});


module.exports = params => {

    const {client} = params;
    //const uploadFilesCollection = client.db("reckoning").collection("uploadFiles");

    // logic
    router.get('/',async (req, res, next) =>{
        console.log(`upload root hit`)
    })
    // router.post('/uploadFile',upload.single('file'),async (req, res, next) =>{
    //     let img = fs.readFileSync(req.file.path);
    //     let encode_image = img.toString('base64');
    //     let finalFile = {
    //         contentType: req.file.mimetype,
    //         image:  new Buffer.from(encode_image, 'base64')
    //     };
    //    await client.db("reckoning").collection("uploadFiles").insertOne(finalFile,(err,result)=>{
    //         if (err) return console.log(err)
    //         getFile(result.insertedId,res);
    //     })
    //     //Controller.uploadFile(req,res)
    // })

    // const getFile = async (req, res, next) =>{
    //     await client.db("reckoning").collection("uploadFiles").findOne({_id:ObjectID(id)}, function(err, result) {
    //         if (err) throw (err);
    //         // console.log(result,'result')
    //         var thumb = new Buffer.from(result.image.buffer).toString('base64');
    //         res.json({ id: id, url: thumb});
    //     });
    // }
    return router;
}
