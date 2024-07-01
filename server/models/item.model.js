// models/Item.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

class Item extends Model {}

Item.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    category: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    dimension: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT,
    },
    condition: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'Item'

});

module.exports = Item;


        