exports.up = knex => {
  return knex.schema.createTable('badges', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('badges')
}
