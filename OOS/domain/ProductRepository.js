const product = require('./models/ProductModel');

exports.getAll = () => {
    return product.find();
}

exports.getById = function(id) {
    return product.findById(id);
}

exports.create = function(_product) {
    return product.create(_product);
}

exports.update = function(id, _product) {
    return product.findByIdAndUpdate(id, _product);
}

exports.remove = function (id) {
    return product.findByIdAndDelete(id);
}

exports.patch = function (id, _product) {
    return product.findByIdAndUpdate(id, {$set: _product});
}

exports.getByCategory = function(query) {
    return product.find(query);
}