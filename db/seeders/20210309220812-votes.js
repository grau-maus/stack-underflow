'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Votes', [
      {
        userId: 3,
        questionId: 1,
        answerId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        questionId: 1,
        answerId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Votes', null, {
      truncate: true
    });
  }
};
