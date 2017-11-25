const Users = require('../models/Users.model')
const bcrypt = require('bcrypt')
const saltRounds = 10

let user

module.exports = {
  create: async (req, res) => {
    if (req.body != null) {
      let data = await req.body.data
      await bcrypt.genSalt(saltRounds).then(salt =>
        bcrypt.hash(data.password, salt).then(hash => {
          data.password = hash
          user = Users.create({ data })
        })
      )
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
  },
  login: async (req, res) => {
    if (req.body != null) {
      let { data } = req.body
      let user = await Users.getUserByUsername(data.username)
        .then(call => call)
        .catch(err => console.log(err))
      if (user) {
        await bcrypt
          .compare(data.password, user.password)
          .then(async result => {
            if (result) {
              user = await Users.getEmployeeById(user.user_id)
              user = await {
                id: user.employee_id,
                name: user.fname
              }
              req.session.user = user
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
          })
      } else {
        res.json({
          status: false,
          data: null
        })
      }
    } else {
      res.json({
        status: false,
        data: null
      })
    }
  },
  logout: async (req, res) => {
    if (req.session != null) {
      req.session.destroy()
      req.session = null
      res.redirect('/logout')
    } else {
      res.json({
        status: false,
        data: 'logout failed.'
      })
    }
    res.json({
      status: false,
      data: 'errors, something went wrong.'
    })
  },
  getAllSelfJoin: async (req, res) => {
    if (req.body != null) {
      let { data } = req.body
      user = await Users.getAllSelfJoin()
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
