const Products = require('../models/Products.model')

let product

module.exports = {
  create: async (req, res) => {
    if (req.body != null) {
      let data = req.body.data
      product = await Products.create(data)
        .then(val =>
          res.json({
            status: val
          })
        )
        .catch(err => console.log(err))
    } else {
      res.json({
        status: false,
        data: null
      })
    }
  },
  update: async (req, res) => {
    if (req.body != null) {
      let data = req.body.data
      product = await Products.update(data)
        .then(val =>
          res.json({
            status: val
          })
        )
        .catch(err => console.log(err))
    } else {
      res.json({
        status: false,
        data: null
      })
    }
  },
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
