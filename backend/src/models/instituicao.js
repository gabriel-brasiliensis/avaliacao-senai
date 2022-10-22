const Sequelize = require("sequelize")
const database = require("../db.js")

const Instituicao = database.define("instituicao",
{
    id_instituicao:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome_instituicao:
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

module.exports = Instituicao

/*
create table instituicao(
id_instituicao int primary key auto_increment,
nome_instituicao varchar(200) not null,
atividade varchar(200) not null
);
*/