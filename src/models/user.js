"use strict";
const {
  Model
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: "User",
    tableName: "users"
  });
  return User;
};
