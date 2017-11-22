const router = require('express').Router()

const UsersController = require('./controllers/Users.controller')
const CategoriesController = require('./controllers/Categories.controller')
const ProductsController = require('./controllers/Products.controller')

router.route('/login').post(UsersController.login)
router.route('/categories').get(CategoriesController.getAll)
router.route('/products').get(ProductsController.getAll)
router.route('/products/categories').get(ProductsController.getAllWithCategories)

module.exports = router
