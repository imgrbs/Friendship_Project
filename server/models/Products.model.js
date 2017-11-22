const knex = require('../utils/knex')

module.exports = {
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
  }
}