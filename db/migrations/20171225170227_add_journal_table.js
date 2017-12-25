exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('journal', function (table) {
    table.increments('id')
    table.string('entry')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('journal')
}
