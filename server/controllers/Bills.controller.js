const Bills = require('../models/Bills.model')

let bill

module.exports = {
  buy: async (req, res) => {
    if (req.body != null) {
      bill = req.body.data
      res.json({
        status: true,
        data: bill
      })
    } else {
      res.json({
        status: false,
        data: null
      })
    }
  }
}
