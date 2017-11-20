
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', call => {
    call
      .increments('id')
      .unsigned()
      .primary()
    call.string('username').notNull()
    call.string('password').notNull()
    call.dateTime('created_at').notNull()
    call.dateTime('updated_at').nullable()
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
