const Transactions = require('../models/Transactions.model')

let transaction

module.exports = {
  getTopTransaction: async (req, res) => {
    if (req.body != null) {
      transaction = await Transactions.getTopTransactions()
        .then(val =>
          res.json({
            status: true,
            data: val
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
  getByEmployeeId: async (req, res) => {
    if (req.body != null) {
      let {id} = req.params
      transaction = await Transactions.getByEmployeeId(id)
        .then(data => data)
        .catch(err => console.log(err))
      if (transaction) {
        res.json({
          status: true,
          data: transaction
        })
      }
      res.json({
        status: false,
        data: null
      })
    } else {
      res.json({
        status: false,
        data: null
      })
    }
  }
}
