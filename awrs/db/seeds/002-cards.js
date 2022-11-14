/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('cards').del();
  await knex('cards').insert([
     { id : 1, question: 'What was your first impression of me?'},
     { id : 2, question : 'What does my style tell you about me?'},
     { id : 3, question: 'Do I remind you of anyone?'},
     { id : 4, question: 'How are you, really?'},
     { id : 5, question: 'What would you never want to change about yourself?'},
     { id : 6, question: 'What is a dream you had to let go of?'},
     { id : 7, question: 'Why do you think we met?'},
     { id : 8, question: 'What do you think I fear the most?'},
     { id : 9, question: 'Do you believe everyone has a calling? If so, do you think I have found mine?'},
     { id : 10, question: 'What answer of mine made you light up?'}
  ]);
};

