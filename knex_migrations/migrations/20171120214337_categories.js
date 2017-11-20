exports.up = (knex, Promise) => {
  return knex.schema.createTable('categories', call => {
    call
      .increments('id')
      .unsigned()
      .primary()
    call.dateTime('created_at').notNull()
    call.dateTime('updated_at').nullable()

    call.string('name').notNull()
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('categories')
}
