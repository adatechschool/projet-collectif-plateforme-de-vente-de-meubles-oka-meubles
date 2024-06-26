// sequelize.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('OKA_projet', 'postgres', 'Bazzinga321@', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;

