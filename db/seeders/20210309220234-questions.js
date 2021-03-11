'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Questions', [
      {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),      // <==== random values, 1-9. corresponds to the amount of users
        createdAt: new Date(),                                  // not including the 'test' user
        updatedAt: new Date()
      },
      {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),      // <==== random values, 1-9. corresponds to the amount of users
        createdAt: new Date(),                                  // not including the 'test' user
        updatedAt: new Date()
      },
      {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),      // <==== random values, 1-9. corresponds to the amount of users
        createdAt: new Date(),                                  // not including the 'test' user
        updatedAt: new Date()
      },
      {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),      // <==== random values, 1-9. corresponds to the amount of users
        createdAt: new Date(),                                  // not including the 'test' user
        updatedAt: new Date()
      },
      {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),      // <==== random values, 1-9. corresponds to the amount of users
        createdAt: new Date(),                                  // not including the 'test' user
        updatedAt: new Date()
      },
      {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),      // <==== random values, 1-9. corresponds to the amount of users
        createdAt: new Date(),                                  // not including the 'test' user
        updatedAt: new Date()
      },
      {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),      // <==== random values, 1-9. corresponds to the amount of users
        createdAt: new Date(),                                  // not including the 'test' user
        updatedAt: new Date()
      },
      {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
        userId: Math.floor(Math.random() * (10 - 1) + 1),      // <==== random values, 1-9. corresponds to the amount of users
        createdAt: new Date(),                                  // not including the 'test' user
        updatedAt: new Date()
      },
      {
        title: 'WHAT ARE magnets',
        content: 'THIS IS A TEST QUESTION 2 GOSH DARN IT',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {
      truncate: true
    });
  }
};
