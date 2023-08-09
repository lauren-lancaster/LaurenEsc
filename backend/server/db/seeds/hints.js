/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('hints').del()
  await knex('hints').insert([
    {
      id: 1,
      level_id: 1,
      text: ' Starting with the second row, click on every cell that has a light on in the row above it. This will turn off all the lights in that row. Continue with each successive row until the only remaining lights are in the final row. In the top row, select the inverse of the bottom row of cells with lights on. FOR EXAMPLE Bottom row: -*- Top row: *-*, Bottom row: *-- Top row: --* Repeat',
    },
    { id: 2, level_id: 2, text: "You're answers are the pincode" },
    { id: 3, level_id: 3, text: 'Look for the swipecard' },
    {
      id: 4,
      level_id: 4,
      text: 'The password is on the phone, Your hint for the passcode is "A system or router that provides a gateway between users and the internet"',
    },
    { id: 5, level_id: 5, text: 'Move that BUS with the arrow keys' },
  ])
}
