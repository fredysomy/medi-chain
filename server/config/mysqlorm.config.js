const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.MYSQL_DB_NAME,
  process.env.MYSQL_DB_USER,
  process.env.MYSQL_DB_PASSWORD,

  {
    host: process.env.MYSQL_DB_HOST,
    dialect: process.env.MYSQL_DB_DIALECT || 'mysql',
    port: process.env.MYSQL_DB_PORT || 3308,
    dialectOptions: {
      connectTimeout: 60000,
    },
    define: {
      timestamps: false,
    },
  }
);

db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;