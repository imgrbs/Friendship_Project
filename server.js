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
const LRUCache = require('lru-cache')
const PORT = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

const server = express()
server.use(cors())
server.use(cookieParser())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true
  })
)

const middleware = (req, res, next) => {
  if (req.session && req.session.user) {
    return next()
  }
  return res.redirect('/')
}

app.prepare().then(() => {
  // API V.1
  const routes = require('./server/routes.js')
  server.use('/api/v1', routes)

  server.get('/login', (req, res) => {
    return renderAndCache(req, res, '/login', req.query)
  })

  server.get('/logout', (req, res) => {
    return renderAndCache(req, res, '/logout', req.query)
  })

  server.get('/dashboard', middleware, (req, res) => {
    return renderAndCache(req, res, '/dashboard', req.session)
  })

  server.get('/sell', middleware, (req, res) => {
    return renderAndCache(req, res, '/sell', req.session)
  })

  server.get('/stock', middleware, (req, res) => {
    return renderAndCache(req, res, '/stock', req.session)
  })

  server.get('/analytic', middleware, (req, res) => {
    return renderAndCache(req, res, '/analytic', req.session)
  })

  server.get('/setting', middleware, (req, res) => {
    return renderAndCache(req, res, '/setting', req.session)
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

const getCacheKey = (req) => {
  return `${req.url}`
}

const renderAndCache = (req, res, pagePath, queryParams) => {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`)
    res.send(ssrCache.get(key))
    return
  }

  // If not let's render the page into HTML
  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)

      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}

module.exports = server
