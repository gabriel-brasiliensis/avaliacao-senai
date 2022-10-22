const Sequelize = require("sequelize")
const database = require("../db.js")

const Resposta = database.define("resposta",
{
    id_resposta:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_pergunta:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_acompanhamento:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nota:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    observacao:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
},

{
    timestamps : false
})

module.exports = Resposta

/*
create table pergunta_acompanhamento(
id_pergunta_acompanhamento int primary key auto_increment,
id_pergunta int not null,
id_acompanhamento int not null,
nota varchar(200) not null,
observacao varchar(200) not null
*/