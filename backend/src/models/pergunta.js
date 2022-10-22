const Sequelize = require("sequelize")
const database = require("../db.js")

const Pergunta = database.define("pergunta",
{
    id_pergunta:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    aspecto:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    pergunta:
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

module.exports = Pergunta

/*
create table pergunta(
id_pergunta int primary key auto_increment,
aspecto varchar(200) not null,
pergunta varchar(200) not null,
observacao varchar(200) not null
);
*/