const knex = require('../utils/knex')

module.exports = {
  buy: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let bill = {
          bill: 'data'
        }
        // await knex
        //   .select('*')
        //   .from('Product')
        //   .then(data => data)
        resolve(bill)
      } catch (err) {
        reject(err)
      }
    })
  }
}
