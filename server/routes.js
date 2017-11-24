const router = require('express').Router()

const UsersController = require('./controllers/Users.controller')
const CategoriesController = require('./controllers/Categories.controller')
const ProductsController = require('./controllers/Products.controller')
const BillsController = require('./controllers/Bills.controller')

// ============================================================
// User
// ============================================================
router.route('/login').post(UsersController.login)
router.route('/users/add').post(UsersController.create)
router.route('/users/selfjoin').get(UsersController.getAllSelfJoin)

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
router.route('/products/totalsale').get(ProductsController.getByEmployeeSale)
router.route('/products/totalquantity').get(ProductsController.getByEmployeeQuantity)
router.route('/products/categories').get(ProductsController.getAllWithCategories)

// ============================================================
// Transaction
// ============================================================

module.exports = router
