const knex = require('../utils/knex')

module.exports = {
  login: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await knex
          .select('firstName')
          .from('Users')
          .where()
          .then(data => data)
        resolve(user)
      } catch (err) {
        reject(err)
      }
    })
  }
}
