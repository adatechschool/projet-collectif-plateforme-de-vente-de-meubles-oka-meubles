const{Sequelize, Model, DataTypes} = require('sequelize');


const sequelize = new Sequelize('OKA_projet', 'postgres', 'Bazzinga321@',{
    host: 'http://lohalhost:3001/api',
    dialect: 'postgres'
} )


module.exports = sequelize;