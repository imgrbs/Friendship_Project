const Users = require('../models/Users.model')

let user

module.exports = {
  login: async (req, res) => {
    user = await Users.login()
    if (user != null) {
      res.json({
        status: true,
        data: user
      })
    } else {
      res.json({
        status: false,
        data: null
      })
    }
  }
}
