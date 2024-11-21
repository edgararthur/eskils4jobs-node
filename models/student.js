const Sequelize = require('sequelize')

const sequelize = require('../util/database')


const Student = sequelize.define('students', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
})