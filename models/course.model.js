const { DataTypes, Model, Optional } = require("sequelize");
const sequelize = require("../helpers/db");

const Course = sequelize.define('Course', {
    // attributes
    courseName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseDescription: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    courseAuthor: {
        type: DataTypes.STRING,
        allowNull: false,
    }, // Add created AT, updatedAt, deletedBy, deletedAt
}, {
});

module.exports = Course;