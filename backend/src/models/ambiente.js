const Sequelize = require("sequelize")
const database = require("../db.js")

const Ambiente = database.define("ambiente",
{
    id_ambiente:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome_ambiente:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    atividade:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
},
{
    timestamps : false
})


module.exports = Ambiente

/*
create table ambiente(
id_ambiente int primary key auto_increment,
nome_ambiente varchar(200),
atividade varchar(200) not null
);
*/