const knex = require('../utils/knex')

module.exports = {
  getTopTransactions: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let transaction = await knex
          .raw(
            `
              SELECT T.*,P.product_name
              FROM Transaction T
              JOIN Product P
              ON T.product_id= P.product_id
              ORDER BY created_at desc
              LIMIT 5
            `
          )
          .then(data => data)
          .catch(err => console.log(err))
        resolve(transaction)
      } catch (err) {
        reject(err)
      }
    })
  }
}
