'use strict';
const uuid = require('uuid/v4');
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const presenters = Array.from(Array(1000).keys()).map(function(index) {
      return {
        id: uuid(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        role: faker.name.title(),
        bio: faker.lorem.sentence(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
    });

    return queryInterface.bulkInsert('Presenters', presenters, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};