const mysql = require('mysql2');
const { Sequelize, DataTypes } = require('sequelize');

const connection = new Sequelize('greenfield', 'brahim', 'root', {
  host: 'localhost',
  dialect:'mysql'
});


async function connectionTest (){     
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  }
  connectionTest()
  const db={}

db.User=require('./user.Model')(connection,DataTypes)
db.Products=require('./product.Model')(connection,DataTypes)

db.User.hasMany(db.Products)
db.Products.belongsTo(db.User)

//  connection.sync({force:true}) 
// db.User.sync({force:true}) 

module.exports = db;