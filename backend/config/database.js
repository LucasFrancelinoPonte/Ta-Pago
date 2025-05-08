const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize(
  process.env.DB_NAME || 'tp',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'root',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mariadb',
    dialectOptions: {
      allowPublicKeyRetrieval: true, //Erro no ssh verificar o porque e resolver de maneira mais facil
      timezone: 'Etc/GMT-3',
    },
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = { db };