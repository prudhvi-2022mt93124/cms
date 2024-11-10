const { DataTypes, Model, Optional } = require("sequelize");
const sequelize = require("../helpers/db");

const User = sequelize.define('User', {
    // attributes
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
});

module.exports = User;