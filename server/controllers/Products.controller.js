const Products = require('../models/Products.model')

let product

module.exports = {
  getAll: async (req, res) => {
    product = await Products.getAll()
    if (product != null) {
      res.json({
        status: true,
        data: product
      })
    } else {
      res.json({
        status: false,
        data: null
      })
    }
  },
  getAllWithCategories: async (req, res) => {
    product = await Products.getAllWithCategories()
    if (product != null) {
      res.json({
        status: true,
        data: product
      })
    } else {
      res.json({
        status: false,
        data: null
      })
    }
  }
}
