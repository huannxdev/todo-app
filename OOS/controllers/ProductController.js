const productService = require('../services/ProductService');
exports.getProducts = async function(req, res) {
    try {
    const listProduct = await productService.getAllProduct();
    res.status(200).json({
        status: 'success',
        data: listProduct
    });
        
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error
        });
    }
}

exports.postProduct = async function(req, res) {
    try {
        const createdProduct = await productService.createProduct(req.body);
        res.status(201).json({
            status: 'success',
            data: createdProduct
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error
        })
    }
}

exports.getProductByCategory = async function(req, res) {
    try {
        const products = await productService.getProductsByCategory(req.query);
        res.status(200).json({
            status: 'success',
            data: products
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error
        })
    }
}