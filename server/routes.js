const router = require('express').Router()

const UsersController = require('./controllers/Users.controller')
const CategoriesController = require('./controllers/Categories.controller')
const ProductsController = require('./controllers/Products.controller')
const BillsController = require('./controllers/Bills.controller')
const TransactionsController = require('./controllers/Transactions.controller')

// ============================================================
// User
// ============================================================
router.route('/login').post(UsersController.login)
router.route('/logout').get(UsersController.logout)
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
router.route('/products').get(ProductsController.getAll)
router.route('/products/topsale').get(ProductsController.topSale)
router.route('/products/total').get(ProductsController.total)
router.route('/products/totalsale').get(ProductsController.getByEmployeeSale)
router.route('/products/totalquantity').get(ProductsController.getByEmployeeQuantity)
router.route('/products/categories').get(ProductsController.getAllWithCategories)
router.route('/products/:id').post(ProductsController.update)

// ============================================================
// Bill
// ============================================================
router.route('/bills/total').get(BillsController.total)

// ============================================================
// Transaction
// ============================================================
router.route('/transactions/top').get(TransactionsController.getTopTransaction)
router.route('/transactions/:id').get(TransactionsController.getByEmployeeId)

module.exports = router
