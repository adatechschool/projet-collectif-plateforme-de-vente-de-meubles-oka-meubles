const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:')


class Basket extends Model{}

Basket.init(
 {
     id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
          primaryKey: true,
     },
     user_id: {
         type: DataTypes.INTEGER,
         values: User.id,
         
     },

     item_id: {
         type: DataTypes.INTEGER,
         values: Item.id,
     }

 }
)