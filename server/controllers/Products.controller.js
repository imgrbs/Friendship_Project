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
  total: async (req, res) => {
    product = await Products.total()
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
  topSale: async (req, res) => {
    product = await Products.topSale()
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
  },
  getByEmployeeSale: async (req, res) => {
    product = await Products.getByEmployeeSale()
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
  getByEmployeeQuantity: async (req, res) => {
    product = await Products.getByEmployeeQuantity()
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
