'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('todos', {
    task: DataTypes.STRING,
    is_check: DataTypes.BOOLEAN
    }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }

    } //classMethods
  });
  return Todo;
};
