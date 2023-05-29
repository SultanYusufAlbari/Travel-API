'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_role.init({
     roleId: DataTypes.INTEGER,
<<<<<<< HEAD
     userId: DataTypes.STRING,
     statusId: DataTypes.UUID
=======
     userId: DataTypes.INTEGER,
     statusId: DataTypes.INTEGER
>>>>>>> 55e0ede (revisian terbaru)
  }, {
    sequelize,
    modelName: 'user_role',
  });
  return user_role;
};