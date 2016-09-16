'use strict';

var Promise = require('bluebird');

module.exports = {
 up: function (queryInterface, Sequelize) {
   var todosData = [{
     task: 'pekerjaan ke satu',
     complete: false,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     task: 'pekerjaan ke dua',
     complete: false,
     createdAt: new Date(),
     updatedAt: new Date()

   }, {
     task: 'pekerjaan ke ketiga',
     complete: true,
     createdAt: new Date(),
     updatedAt: new Date()
   }];
   return Promise.try(function () {
     return queryInterface.bulkInsert({ tableName: 'todos', schema: 'public' }, todosData, {});
   }).then(function () {
     console.log("seed succesfull");
   });
 },

 down: function (queryInterface, Sequelize) {
   return queryInterface.bulkDelete({ tableName: 'todos', schema: 'public' }, null, {});
 }
};
