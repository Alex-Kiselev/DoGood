'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Category }) {
      // define association here
      this.belongsTo(User, { foreignKey: "user_id" });
      this.belongsTo(Category, { foreignKey: "category_id" });
    }
  }
  Item.init({
    title: DataTypes.STRING,
    img: DataTypes.TEXT,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    available: DataTypes.TEXT,
    city: DataTypes.STRING,
    address: DataTypes.TEXT,
    coordinatesX: DataTypes.FLOAT,
    coordinatesY: DataTypes.FLOAT,
    validUntil: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
