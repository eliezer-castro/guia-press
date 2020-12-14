const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress', 'root', '123456', {
  hoost: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;