'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Answers', [
      {
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        questionId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        questionId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        questionId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        questionId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        questionId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        questionId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        questionId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        questionId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: faker.lorem.sentences(),
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
