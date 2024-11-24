const { DataTypes, Model, Optional } = require("sequelize");
const sequelize = require("../helpers/db");

const User = sequelize.define("user", {
    // attributes
    "firstName": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "lastName": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "email": {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    "password": {
        type: DataTypes.STRING,
        allowNull: false
    },
    "roleId": {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "2"
    },
    "roleName": {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user"
    },
    "phoneNumber": {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
});

module.exports = User;