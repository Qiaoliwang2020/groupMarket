const express = require('express');
const router = express.Router();

const goodsRoute = require('./goodsRoute')
const categoriesRoute = require('./categoriesRoute')
const unitsRoute = require('./unitsRoute');
const uploadRoute = require('./uploadRoute');
const cardRoute = require('./cardInfo');
const cardsRoute = require('./cards');


module.exports = (params) => {
    router.use('/goods',goodsRoute(params))
    router.use('/categories',categoriesRoute(params))
    router.use('/units',unitsRoute(params))
    //router.use('/upload',uploadRoute(params))
    router.use('/card',cardRoute(params));
    router.use('/cards',cardsRoute(params));
    return router;
};