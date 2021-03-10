'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Questions', [
      {
        title: 'TEST QUESTION',
        content: 'THIS IS A TEST QUESTION 1',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'WHAT ARE magnets',
        content: 'THIS IS A TEST QUESTION 2',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
