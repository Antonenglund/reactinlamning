const route = require('express').Router();
const productModel = require('../models/product/productModel')

route.post('/add', productModel.addProducts)

route.get('/allproducts', productModel.getProduct)
route.get('/:id', productModel.getProductByOne)

module.exports = route;