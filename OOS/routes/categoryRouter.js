const router = require('express').Router();
const categoryController = require('../controllers/categoryController');
router.route('/')
.get(categoryController.getAllCategories)
.post(categoryController.postCategory)

router.route('/:id')
.get(categoryController.getCategoryById)
.delete(categoryController.deleteCategory)
.put(categoryController.updateCategory)

router.route('/:status')
.get(categoryController.getCategoryByStatus)

module.exports = router;