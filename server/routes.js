const router = require('express').Router()

const CategorieController = require('./controllers/Categorie.controller')

router.route('/categories').get(CategorieController.getAll)

module.exports = router
