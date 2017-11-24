const router = require('express').Router()

const UsersController = require('./controllers/Users.controller')
const CategoriesController = require('./controllers/Categories.controller')
const ProductsController = require('./controllers/Products.controller')
const BillsController = require('./controllers/Bills.controller')

// ============================================================
// User
// ============================================================
router.route('/login').post(UsersController.login)

// ============================================================
// Category
// ============================================================
router.route('/categories').get(CategoriesController.getAll)

// ============================================================
// Product
// ============================================================
router.route('/buy').post(BillsController.buy)
router.route('/products').post(ProductsController.create)
router.route('/products/:id').post(ProductsController.update)
router.route('/products').get(ProductsController.getAll)
router.route('/products/categories').get(ProductsController.getAllWithCategories)

module.exports = router
