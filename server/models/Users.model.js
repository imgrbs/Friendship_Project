const knex = require('../utils/knex')

module.exports = {
  create: ({ data }) => {
    return new Promise(async (resolve, reject) => {
      try {
        let date = new Date()
        let user = await knex('User')
          .insert({
            username: data.username,
            password: data.password,
            created_at: date,
            updated_at: date
          })
          .then(data => data[0])
          .catch(err => err)
        let employee = await knex('Employee')
          .insert({
            user_id: user,
            fname: data.firstName,
            lname: data.lastName,
            role: data.role,
            email: data.email,
            telno: data.telno,
            address: data.address,
            boss_id: data.bossId,
            nation_id: data.nationId
          })
          .then(data => data)
          .catch(err => err)
        resolve(data)
      } catch (err) {
        reject(err)
      }
    })
  },
  login: (usr, pwd) => {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await knex
          .select('username')
          .from('User')
          .where({
            username: usr,
            password: pwd
          })
          .limit(1)
          .then(data => data)
        resolve(user)
      } catch (err) {
        reject(err)
      }
    })
  },
  getEmployeeById: data => {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await knex
          .select('*')
          .from('Employee')
          .where({
            user_id: data
          })
          .limit(1)
          .then(data => data[0])
          .catch(err => console.log(err))
        resolve(user)
      } catch (err) {
        reject(err)
      }
    })
  },
  getUserByUsername: data => {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await knex
          .select('*')
          .from('User')
          .where({
            username: data
          })
          .limit(1)
          .then(data => data[0])
          .catch(err => console.log(err))
        resolve(user)
      } catch (err) {
        reject(err)
      }
    })
  },
  getAllSelfJoin: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await knex
          .raw(
            `
            SELECT E.employee_id,CONCAT(E.fname,' ',E.lname) as "Employee Name",E.role,CONCAT(B.fname,' ',B.lname)AS "Boss Name",E.telno,E.nation_id,E.address 
            FROM Employee E 
            LEFT JOIN Employee B 
            ON E.boss_id = B.employee_id
            `
          )
          .then(data => data)
          .catch(err => console.log(err))
        resolve(user)
      } catch (err) {
        reject(err)
      }
    })
  }
}
