const knex = require('../utils/knex')

module.exports = {
  create: data => {
    return new Promise(async (resolve, reject) => {
      try {
        let date = new Date()
        let bill = data
        await knex('Bill')
          .insert({
            employee_id: data.employee_id,
            total_price: data.totalPrices,
            created_at: date,
            updated_at: date
          })
          .then(res =>
            data.storage.map(async val => {
              date = new Date()
              await knex('Transaction')
                .insert({
                  bill_id: res[0],
                  product_id: val.id,
                  quantity: val.amount,
                  created_at: date,
                  updated_at: date
                })
                .then(async call => {
                  let amount = await knex
                    .select('product_amount')
                    .from('Product')
                    .where('product_id', val.id)
                    .then(async response => {
                      console.log(response[0].product_amount)
                      await knex('Product')
                        .update({
                          product_amount: response[0].product_amount - val.amount
                        })
                        .then(result => result)
                        .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
            })
          )
          .catch(err => console.log(err))
        resolve(bill)
      } catch (err) {
        reject(err)
      }
    })
  }
}
