const { Sequelize } = require("sequelize")
const database = new Sequelize('senai_avaliacao', 'root', 'root', {
    host : 'localhost',
    dialect : 'mysql'
})

module.exports = database