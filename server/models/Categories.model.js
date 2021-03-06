const knex = require('../utils/knex')

module.exports = {
  getAll: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let categorie = await knex
          .select('*')
          .from('Category')
          .then(data => data)
        resolve(categorie)
      } catch (err) {
        reject(err)
      }
    })
  }
}
