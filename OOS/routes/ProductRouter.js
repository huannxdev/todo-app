const productRoute = require('express').Router();
const productController = require('../controllers/productController');


productRoute.route('/')
    .get(productController.getProducts)
    .post(productController.postProduct)

productRoute.route('/getByCategory')
    .get(productController.getProductByCategory)
module.exports = productRoute;