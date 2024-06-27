// models/Basket.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./item.model');
const Item = require('./item.model');

class Basket extends Model {}

Basket.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
}, {
    sequelize,
    modelName: 'Basket'

});

Basket.belongsTo(User);
Basket.belongsTo(Item);

module.exports = Basket;
