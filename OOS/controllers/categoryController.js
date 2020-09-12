const categoryService = require('../services/category.service');
exports.getAllCategories = async (req, res) => {
    try {
        const listCategory = await categoryService.getAllCategories();
        res.status(200).json({
            status: 'success',
            data: listCategory
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error
        });
    }
}

exports.getCategoryById = async (req, res) => {
    try {
        const listCategory = await categoryService.getCategoriesById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: listCategory
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error
        });
    }
}

exports.getCategoryByStatus = async (req, res) => {
    try {
        const listCategory = await categoryService.getCategoriesById(req.params.status);
        res.status(200).json({
            status: 'success',
            data: listCategory
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error
        });
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const updatedCategory = await categoryService.updateCategory(req.params.id, req.body);
        res.status(200).json({
            status: 'success',
            data: updatedCategory
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error
        });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        await categoryService.deleteCategory(req.params.id);
        res.status(200).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error
        });
    }
}

exports.postCategory = async (req, res) => {
    try {
        const newCategory = await categoryService.createCategory(req.body);
        res.status(200).json({
            status: 'success',
            data: newCategory
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error
        });
    }
}

