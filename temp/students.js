'use strict';
module.exports = function (sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      unique: true
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: [10, 15],
        is: /^[0-9]+$/i
      }
    },
    birthday: DataTypes.DATEONLY
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      },
      allData: function () {
        this.findAll({}).then(function (result) {
            console.log("\n\nList Of All Data\n\n");
            result.forEach((val) => {
              console.log(val.dataValues)
            })
          }

        )
      },

      findByLastName: function (value) {
        this.findAll({
          where: {
            last_name: {
              $like: value.param
            }
          }
        }).then(function (result) {
          console.log("\n\nFind By Last Name \n\n");
          result.forEach((val) => {
            console.log(val.dataValues);
          })
        })
      }, //

      delete: function (idx) {
        this.destroy({
          where: {
            id: idx.id
          }
        })
      },

      findByAge: function () {

      }
    }



  })
  return Students;

}
