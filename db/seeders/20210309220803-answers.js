'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Answers', [
      {
        content: 'You can always use list slicing to compare the specified range of items between lists.',
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        questionId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "since all this is doing is sending the browser to a new web page, you don't even need Javascript for this, you would just use an <a href='/login'>Login<a> in your page too.",
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        questionId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Have you tried bubble sort, quick sort, or mergre sort?",
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        questionId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Don't bother, Amazon Web Services is weak sauce anyway!",
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        questionId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "C++ is the only language that matters. Saas apps def aren't up to par though..",
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        questionId: Math.floor(Math.random() * (10 - 1) + 1),
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
        content: "C++ is the only language that matters. Saas apps def aren't up to par though..",
        userId: 1,
        questionId: 5,
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
        content: "C++ is the only language that matters. Saas apps def aren't up to par though..",
        userId: 1,
        questionId: 5,
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
        content: "C++ is the only language that matters. Saas apps def aren't up to par though..",
        userId: 1,
        questionId: 5,
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
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        questionId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Answers', null, {
      truncate: true
    });
  }
};
