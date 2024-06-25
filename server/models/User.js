const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:')

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,

        } ,

         email: {
            type: DataTypes.STRING,

         } ,

         password: {
            type: DataTypes.STRING,
         } ,

         isAdmin: {
            type: DataTypes.BOOLEAN,
         } ,

          }

        
)

