'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Status.belongsTo(models.User, {
        foreignKey: 'user_id',
        ONDELETE: 'CASCADE',
        ONUPDATE: 'RESTRICT'
      });
    }
  }
  Status.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },title: DataTypes.STRING,
    body: DataTypes.STRING,
    user_id: DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};