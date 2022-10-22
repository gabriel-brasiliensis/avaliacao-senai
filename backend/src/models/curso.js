const Sequelize = require("sequelize")
const database = require("../db.js")

const Curso = database.define("curso",
{
    id_curso:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_instrutor:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nome_curso:
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

module.exports = Curso

/*
create table curso(
id_curso int primary key auto_increment,
id_instrutor int not null,
nome_curso varchar(200) not null,
atividade varchar(200) not null
);
*/