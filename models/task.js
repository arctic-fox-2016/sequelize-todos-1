'use strict';
module.exports = function(sequelize, DataTypes) {
  var task = sequelize.define('task', {
    name: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return task;
};