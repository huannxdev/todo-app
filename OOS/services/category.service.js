const categoryRepository = require('../domain/categoryRepository');
const category = require('../domain/models/categoryModel');

exports.getAllCategories = async () => {
    const categories = await categoryRepository.getAll();
    return categories.map(el => el.toObject());
}

exports.getCategoriesById = async (id) => {
    const categories = await categoryRepository.getById(id);
    return categories.toObject();
}

exports.createCategory = async (category) => {
    const _category = await categoryRepository.create(category);
    return _category.toObject();
}

exports.updateCategory = async (id, category) => {
    const _category = await categoryRepository.replace(id, category);
    return _category.toObject();
}

exports.deleteCategory = async (id) => {
    return categoryRepository.delete(id);
}