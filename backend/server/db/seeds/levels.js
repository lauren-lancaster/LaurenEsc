/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('levels').del()
  await knex('levels').insert([
    { id: 1, name: 'level 1' },
    { id: 2, name: 'level 2' },
    { id: 3, name: 'level 3' },
  ])
}
