// import constants for database
const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');




module.exports = sequelize.define('User', {
    role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user'
    },
    email: { 
        type: DataTypes.STRING, 
        unique: true, 
        allowNull: false},
    passwordHash: { 
        type: DataTypes.STRING, 
        allowNull: false }
});

