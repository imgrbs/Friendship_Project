// -----------------------
//   IMPORT DEPENDENCIES
// -----------------------
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
// const path = require('path')

const server = express()
server.use(cors())
server.use(cookieParser())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// API V.1
const routes = require('./server/routes.js')
server.use('/api/v1', routes)

// LISTEN PORT
const PORT = process.env.PORT
server.listen(PORT, err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${PORT}`)
})

module.exports = server
