const Sequelize = require("sequelize")
const database = require("../db.js")

const Turma = database.define("turma",
{
    id_turma:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_curso:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nome_turma:
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

module.exports = Turma

/*
create table turma(
id_turma int primary key auto_increment,
id_curso int not null,
nome_turma varchar(200) not null,
atividade varchar(200) not null
);
*/