const router = require('express').Router()

const UsersController = require('./controllers/Users.controller')
const CategoriesController = require('./controllers/Categories.controller')

router.route('/login').post(UsersController.login)
router.route('/categories').get(CategoriesController.getAll)

module.exports = router
