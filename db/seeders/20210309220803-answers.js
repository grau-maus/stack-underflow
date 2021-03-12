'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Answers', [
      {
        content: 'You can always use list slicing to compare the specified range of items between lists.',
        userId: 2,
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "since all this is doing is sending the browser to a new web page, you don't even need Javascript for this, you would just use an <a href='/login'>Login<a> in your page too.",
        userId: 3,
        questionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Have you tried bubble sort, quick sort, or mergre sort?",
        userId: 4,
        questionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Don't bother, Amazon Web Services is weak sauce anyway!",
        userId: 5,
        questionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "C++ is the only language that matters. Saas apps def aren't up to par though..",
        userId: 1,
        questionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Deep learning dones't happen on laptops periodt.",
        userId: 2,
        questionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Answers', null, {
      truncate: true
    });
  }
};
