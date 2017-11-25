const Bills = require('../models/Bills.model')

let bill

module.exports = {
  buy: async (req, res) => {
    if (req.body != null) {
      let data = req.body.data
      bill = await Bills.create(data)
        .then(value =>
          res.json({
            status: true,
            data: value
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
  total: async (req, res) => {
    if (req.body != null) {
      bill = await Bills.total()
        .then(value =>
          res.json({
            status: true,
            data: value
          })
        )
        .catch(err => console.log(err))
    } else {
      res.json({
        status: false,
        data: null
      })
    }
  }
}
