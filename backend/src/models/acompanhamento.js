const Sequelize = require("sequelize")
const database = require("../db.js")

const Acompanhamento = database.define("acompanhamento",
{
    id_acompanhamento:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_instituicao:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_pedagogo:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_supervisor:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_instrutor:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_turma:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_ambiente:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_curso:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
},
{
    timestamps : false
})

module.exports = Acompanhamento

/*
create table instituicao(
id_instituicao int primary key auto_increment,
nome_instituicao varchar(200) not null,
atividade varchar(200) not null
);
*/