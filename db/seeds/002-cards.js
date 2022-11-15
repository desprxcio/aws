/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('cards').del();
  await knex('cards').insert([
     {question: 'What was your first impression of me?'},
     {question: 'What does my style tell you about me?'},
     {question: 'Do I remind you of anyone?'},
     {question: 'How are you, really?'},
     {question: 'What would you never want to change about yourself?'},
     {question: 'What is a dream you had to let go of?'},
     {question: 'Why do you think we met?'},
     {question: 'What do you think I fear the most?'},
     {question: 'Do you believe everyone has a calling? If so, do you think I have found mine?'},
     {question: 'What answer of mine made you light up?'}
  ]);
};

