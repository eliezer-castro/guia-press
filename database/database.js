const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress', 'root', '@Sup_00x0', {
  hoost: 'localhost',
  dialect: 'mysql',
  timezone: "-03:00"
});

module.exports = connection;