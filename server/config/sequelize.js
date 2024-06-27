// sequelize.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('OKA_projet', 'postgres', 'ileana', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;

