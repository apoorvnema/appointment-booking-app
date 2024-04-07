const Sequelize = require('sequelize');

const sequelize = new Sequelize('appointment-booking-app', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;