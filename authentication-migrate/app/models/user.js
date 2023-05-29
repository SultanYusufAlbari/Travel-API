'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //   // define association here
<<<<<<< HEAD
    //   User.belongsToMany(models.Role, {
    //     through: 'user_roles',
    //     foreignKey: 'userId',
    //     otherKey: 'roleId'
    // });
=======
      User.belongsToMany(models.Role, {
        through: 'user_role',
        foreignKey: 'userId',
        otherKey: 'roleId'
    });
    // User.hasOne(models.status);
>>>>>>> 55e0ede (revisian terbaru)
    }
  }
  User.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
  }, name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING 
}, {
    sequelize,
    modelName: 'User',
  });
  return User;
};