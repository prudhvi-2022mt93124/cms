const { Sequelize } = require("sequelize");
require("dotenv").config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,  // Optional, disables logging of SQL queries
});

// new Sequelize({
//     host: dbHost,  // Replace with your RDS DB endpoint
//     user: dbUser,  // Replace with your DB username
//     password: dbPassword,  // Replace with your DB password
//     database: dbName,  // Replace with your database name
//     dialect: dbDriver,  // Use PostgreSQL dialect
//     logging: false,  // Disable logging of SQL queries
//     // dialectOptions: {
//     //     ssl: {
//     //         require: true,  // Ensures SSL is used
//     //         rejectUnauthorized: false  // Don't reject unauthorized SSL certificates (set to true for strict security)
//     //     },
//     // },
// })

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
})
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
