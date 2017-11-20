const Users = require('../models/Users.model')

let user

module.exports = {
  login: async (req, res) => {
    if (req.body != null) {
      let { data } = req.body
      user = await Users.login(data.username, data.password)
      if (user != null) {
        res.json({
          status: true,
          data: user
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
