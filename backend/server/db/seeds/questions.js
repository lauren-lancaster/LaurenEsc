/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('questions').del()
  await knex('questions').insert([
    {
      id: 1,
      question: 'In computers, what does "OS" usually mean?',
      answer1: 'Order of Significance',
      answer2: 'Operating System',
      answer3: 'Open Software',
      answer4: 'Optical Sensor',
      correct: 'Operating System',
    },
    {
      id: 2,
      question: 'Where would you be if you were standing on the Spanish Steps?',
      answer1: 'Milan',
      answer2: 'Spain',
      answer3: 'Italy',
      answer4: 'Rome',
      correct: 'Rome',
    },
    {
      id: 3,
      question: 'How many elements are in the periodic table?',
      answer1: '70',
      answer2: '118',
      answer3: '103',
      answer4: '95',
      correct: '118',
    },
    {
      id: 4,
      question: 'Which planet do the Galilean Moons orbit?',
      answer1: 'Jupiter',
      answer2: 'Saturn',
      answer3: 'Uranus',
      answer4: 'Kepler-186',
      correct: 'Jupiter',
    },
  ])
}

//PIN 2421
