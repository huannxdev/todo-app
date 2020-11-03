const productRepository = require('../domain/productRepository');
const product = require('../domain/models/productModel');

exports.getAllProduct = async () => {
    const products = await productRepository.getAll();
    return products.map(item => item.toObject());
}

exports.createProduct = (product) => {
    product.createdDay = new Date();
    return productRepository.create(product);
}

exports.editProduct = (id, product) => {
    product.modifiedDate = new Date();
    return productRepository.update(id, product);
}

exports.deleteProduct = (id) => {
    return productRepository.remove(id);
}

exports.patchProduct = (id, product) => {
    product.modifiedDate = new Date();
    return productRepository.patch(id, product);
}

exports.getProductsByCategory = (query) => {
    return productRepository.getByCategory(query);
}