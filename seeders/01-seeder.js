'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('todos',
    [
    {"task":"Bake a delicious cake","is_check":true,"createdAt":"2016-09-16","updatedAt":"2016-09-16"},
    {"task":"Shutdown the computer","is_check":false,"createdAt":"2016-09-16","updatedAt":"2016-09-16"},
    {"task":"Change the world","is_check":true,"createdAt":"2016-09-16","updatedAt":"2016-09-16"},
    {"task":"task baru ","is_check":false,"createdAt":"2016-09-16","updatedAt":"2016-09-16"},
    {"task":"brew a cup of coffee ","is_check":true,"createdAt":"2016-09-16","updatedAt":"2016-09-16"}
    ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
