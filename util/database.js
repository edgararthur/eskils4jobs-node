const Sequelize = require('sequelize')

const sequelize = new Sequelize('student_management', 'root', 'password', { dialect: 'mysql', host: 'localhost'})

module.exports = sequelize;

// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'student_management',
//     password: 'password'
// })

// module.exports = pool.promise();