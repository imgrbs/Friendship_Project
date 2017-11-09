// init MySQL
const knex = require('knex')({
  client: process.env.DB_TYPE,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_TABLE
  }
})

module.exports = knex
