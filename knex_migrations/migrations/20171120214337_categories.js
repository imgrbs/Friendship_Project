exports.up = (knex, Promise) => {
  return knex.schema.createTable('categories', call => {
    call
      .increments('id')
      .unsigned()
      .primary()
    call.string('name').notNull()
    call.dateTime('created_at').notNull()
    call.dateTime('updated_at').nullable()
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('categories')
}
