'use strict';

const faker = require('faker');
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password(), 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password(), 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password(), 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'test',
        email: 'test@test.com',
        hashedPassword: bcrypt.hashSync('Test123!', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {
      truncate: true
    });
  }
};
