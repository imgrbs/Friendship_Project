const knex = require('../utils/knex')

module.exports = {
  login: (usr, pwd) => {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await knex
          .select('username')
          .from('users')
          .where({
            username: usr,
            password: pwd
          })
          .then(data => data)
        resolve(user)
      } catch (err) {
        reject(err)
      }
    })
  }
}
