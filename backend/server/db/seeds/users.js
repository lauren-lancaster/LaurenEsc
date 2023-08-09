/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      username: 'Jesse',
      current_level_id: 0,
      time: 1722,
      complete: true,
      active_player: false,
    },
    {
      id: 2,
      username: 'Gaby',
      current_level_id: 0,
      time: 1214,
      complete: true,
      active_player: false,
    },
    {
      id: 3,
      username: 'Tayla',
      current_level_id: 0,
      time: 1200,
      complete: true,
      active_player: false,
    },
    {
      id: 4,
      username: 'Gemma',
      current_level_id: 0,
      time: 1312,
      complete: true,
      active_player: false,
    },
    {
      id: 5,
      username: 'Lauren',
      current_level_id: 0,
      time: 1400,
      complete: true,
      active_player: false,
    },
  ])
}
