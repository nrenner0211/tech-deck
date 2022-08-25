// import Sequelize
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
// must use let in this instance so we dont have to declare variable
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.send.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;