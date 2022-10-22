const Sequelize = require("sequelize")
const database = require("../db.js")

const Usuario = database.define("usuario",
{
    id_usuario:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome_usuario:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    email:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    telefone:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    registro:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    senha:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    funcao:
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

module.exports = Usuario

/*
create table usuario(
id_usuario int primary key auto_increment,
nome_usuario varchar(200) not null,
email varchar(200) not null,
telefone varchar(200) not null,
registro varchar(200) not null,
senha varchar(200) not null,
funcao varchar(200) not null,
atividade varchar(200) not null
);
*/