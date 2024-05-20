const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('matrimonial', 'postgres', 'rudy', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false // disable logging; default: console.log
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
