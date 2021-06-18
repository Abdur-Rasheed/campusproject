const { Sequelize } = require('sequelize');
const db = new Sequelize('crudDB', 'postgres', 'Welcome123', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
      
    }
});

module.exports = db;