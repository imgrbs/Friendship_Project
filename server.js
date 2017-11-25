// -----------------------
//   IMPORT DEPENDENCIES
// -----------------------
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const cors = require('cors')

const next = require('next')
const PORT = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const server = express()
server.use(cors())
server.use(cookieParser())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 86400000 }
  })
)

// ============================================================
// Middleware
// ============================================================
const middleware = (req, res, next) => {
  if (req.session && req.session.user) {
    return next()
  }
  return res.redirect('/')
}

app.prepare().then(() => {
  // ============================================================
  // API V.1
  // ============================================================
  const routes = require('./server/routes.js')
  server.use('/api/v1', routes)

  // ============================================================
  // next js route
  // ============================================================

  server.get('/login', (req, res) => {
    return app.render(req, res, '/login', req.query)
  })

  server.get('/logout', (req, res) => {
    return app.render(req, res, '/logout', req.query)
  })

  server.get('/dashboard', middleware, (req, res) => {
    return app.render(req, res, '/dashboard', req.session)
  })

  server.get('/sell', middleware, (req, res) => {
    return app.render(req, res, '/sell', req.session)
  })

  server.get('/stock', middleware, (req, res) => {
    return app.render(req, res, '/stock', req.session)
  })

  server.get('/analytic', middleware, (req, res) => {
    return app.render(req, res, '/analytic', req.session)
  })

  server.get('/setting', middleware, (req, res) => {
    return app.render(req, res, '/setting', req.session)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  // LISTEN PORT
  server.listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})

module.exports = server
