/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('scenes', (table) => {
    table.increments('id')
    table.integer('level_id')
    table.string('text')
    table.boolean('final')
    table.string('slack')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('scenes')
}
