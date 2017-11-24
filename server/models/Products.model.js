const knex = require('../utils/knex')

module.exports = {
  create: data => {
    return new Promise(async (resolve, reject) => {
      try {
        let date = new Date()
        let product = await knex('Product')
          .insert({
            product_name: data.name,
            product_price: data.price,
            product_amount: data.amount,
            categories_id: data.categories,
            created_at: date,
            updated_at: date
          })
          .then(data => data)
          .catch(err => err)
        resolve(product)
      } catch (err) {
        reject(err)
      }
    })
  },
  update: data => {
    return new Promise(async (resolve, reject) => {
      try {
        let amount = await knex
          .select('product_amount')
          .from('Product')
          .where('product_id', data.id)
          .then(val => val[0].product_amount)
          .catch(err => console.log(err))
        let date = new Date()
        let product = await knex('Product')
          .where('product_id', data.id)
          .update({
            product_amount: amount + data.amount,
            updated_at: date
          })
          .then(data => data)
          .catch(err => err)
        let createLogger = await knex('Product_logger')
          .insert({
            employee_id: data.employee_id,
            product_id: data.id,
            amount: data.amount,
            price: data.price,
            created_at: date,
            updated_at: date
          })
        resolve(createLogger)
      } catch (err) {
        reject(err)
      }
    })
  },
  getAll: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let product = await knex
          .select('*')
          .from('Product')
          .then(data => data)
        resolve(product)
      } catch (err) {
        reject(err)
      }
    })
  },
  getAllWithCategories: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let product = await knex('Product')
          .join('Category', 'Product.categories_id', '=', 'Category.category_id')
          .select('*')
          .then(data => data)
        resolve(product)
      } catch (err) {
        reject(err)
      }
    })
  },
  getByEmployeeSale: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let product = await knex
          .raw(
            `
              SELECT fname as "name" ,SUM(total_price) as "totalSale" 
              FROM Employee emp 
              join Bill B 
              ON emp.employee_id = B.employee_id 
              GROUP BY B.employee_id
              ORDER BY 2 asc  
            `
          )
          .then(data => data)
          .catch(err => console.log(err))
        resolve(product)
      } catch (err) {
        reject(err)
      }
    })
  },
  getByEmployeeQuantity: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let product = await knex
          .raw(
            `
              SELECT 	fname as "name" ,SUM(quantity) as "totalQuantity" 
              FROM 	Employee emp 
              join 	Bill B 
              ON 	emp.employee_id = B.employee_id 
              JOIN 	Transaction T 
              ON 	T.bill_id = B.bill_id GROUP BY B.employee_id
              ORDER BY 2 asc  
            `
          )
          .then(data => data)
          .catch(err => console.log(err))
        resolve(product)
      } catch (err) {
        reject(err)
      }
    })
  }
}
