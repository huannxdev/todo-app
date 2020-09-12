const category = require('./models/categoryModel')
exports.getAll = () => {
    return category.find();
}

exports.getById = (id) => {
    return category.findById(id);
}

exports.getByStatus = (status) => {
    return category.find({status: status});
}

exports.create = (categoryData) => {
    return category.create(categoryData);
}

exports.replace = (id, categoryData) => {
    return category.findByIdAndUpdate(id, categoryData);
}

exports.delete = (id) => {
    return category.findByIdAndUpdate(id);
}