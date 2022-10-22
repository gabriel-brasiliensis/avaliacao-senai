const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const database = require('./db.js')
const config = require('../config/config.js')
let connection = mysql.createConnection(config)

const app = express()
app.use(cors())
app.use(express.json())

    /*----- TABELAS -----*/

const Acompanhamento  = require("./models/acompanhamento.js")
const Usuario = require("./models/usuario.js")
const Turma = require("./models/turma.js")
const Instituicao = require("./models/instituicao.js")
const Curso = require("./models/curso.js")
const Pergunta = require("./models/pergunta.js")
const Ambiente = require("./models/ambiente.js")
const Resposta = require("./models/resposta.js")

    /*----- REQUESTS -----*/

        /*----- POST -----*/

app.post("/cadastro/acompanhamento", async (request, response)=>{
    try{
        await database.sync()
        const { id_instituicao, id_pedagogo, id_supervisor, id_instrutor, id_turma, id_ambiente, id_curso } = request.body;
        await Acompanhamento.create(
            {
                id_instituicao, 
                id_pedagogo, 
                id_supervisor, 
                id_instrutor, 
                id_turma, 
                id_ambiente, 
                id_curso
            }
        )
        return response.status(201).send("Acompanhamento realizado com sucesso.")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

app.post("/cadastro/usuario", async (request, response)=>{
    try{
        await database.sync()
        const { nome_usuario, email, telefone, funcao, atividade } = request.body;
        const { registro, senha } = request.headers;
        await Usuario.create(
            {
                nome_usuario,
                email,
                telefone,
                registro,
                senha,
                funcao,
                atividade,
            }
        )
        return response.status(201).send("Usuário cadastrado com sucesso.")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

app.post("/cadastro/turma", async (request, response)=>{
    try{
        await database.sync()
        const { nome_turma, id_curso, atividade } = request.body;
        await Turma.create(
            {
                id_curso,
                nome_turma,
                atividade,
            }
        )
        return response.status(201).send("Turma cadastrada com sucesso.")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

app.post("/cadastro/instituicao", async (request, response)=>{
    try{
        await database.sync()
        const { nome_instituicao, atividade } = request.body;
        await Instituicao.create(
            {
                nome_instituicao,
                atividade,
            }
        )
        return response.status(201).send("Instituição cadastrada com sucesso.")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

app.post("/cadastro/curso", async (request, response)=>{
    try{
        await database.sync()
        const { id_instrutor, nome_curso, atividade } = request.body;
        await Curso.create(
            {
                id_instrutor,
                nome_curso,
                atividade,
            }
        )
        return response.status(201).send("Curso cadastrado com sucesso.")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

app.post("/cadastro/ambiente", async (request, response)=>{
    try{
        await database.sync()
        const { nome_ambiente, atividade } = request.body;
        await Ambiente.create(
            {
                nome_ambiente,
                atividade,
            }
        )
        return response.status(201).send("Ambiente cadastrado com sucesso.")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

app.post("/cadastro/pergunta", async (request, response)=>{
    try{
        await database.sync()
        const { aspecto, pergunta, observacao } = request.body;
        await Pergunta.create(
            {
                aspecto,
                pergunta,
                observacao,
            }
        )
        return response.status(201).send("Pergunta cadastrada com sucesso.")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

app.post("/cadastro/resposta", async (request, response)=>{
    try{
        await database.sync()
        const { id_pergunta, id_acompanhamento, nota, observacao  } = request.body;
        await Resposta.create(
            {
                id_pergunta,
                id_acompanhamento,
                nota,
                observacao,
            }
        )
        return response.status(201).send("Resposta enviada com sucesso.")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

        /*----- GET -----*/

app.get("/busca/usuarios", async (request, response) => {
    try{
        await database.sync()
        
        const usuarios = await Usuario.findAll();

        return response.status(201).json(usuarios)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

app.get("/busca/usuarios/nome", async (request, response) => {
    try{
        await database.sync()

        const { nome_usuario } = request.body; 
        
        const usuarios = await Usuario.findAll({
            include: {
                nome_usuario : nome_usuario
            }
        });

        return response.status(201).json(usuarios)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

app.get("/busca/usuarios/registro", async (request, response) => {
    try{
        await database.sync()

        const { registro_usuario } = request.headers; 
        
        const usuario = await Usuario.findAll({
            include: {
                registro : registro_usuario
            }
        });

        return response.status(201).json(usuario)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

app.get("/busca/usuarios/funcao", async (request, response) => {
    try{
        await database.sync()

        const { funcao_usuario } = request.body; 
        
        const usuarios = await Usuario.findAll({
            include: {
                funcao : funcao_usuario
            }
        });

        return response.status(201).json(usuarios)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

app.get("/busca/cursos", async (request, response) => {
    try{
        await database.sync()
        
        const cursos = await Curso.findAll();

        return response.status(201).json(cursos)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

app.get("/busca/cursos/nome", async (request, response) => {
    try{
        await database.sync()

        const { nome_curso } = request.body; 
        
        const cursos = await Curso.findAll({
            include: {
                nome_curso : nome_curso
            }
        });

        return response.status(201).json(cursos)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

app.get("/busca/turmas", async (request, response) => {
    try{
        await database.sync()
        
        const turmas = await Turma.findAll();

        return response.status(201).json(turmas)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

app.get("/busca/turmas/curso", async (request, response) => {
    try{
        await database.sync()

        const { id_curso } = request.body; 
        
        const turmas = await Turma.findAll({
            include: {
                id_curso : id_curso
            }
        });

        return response.status(201).json(turmas)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

app.get("/busca/instituicoes", async (request, response) => {
    try{
        await database.sync()
        
        const instituicoes = await Instituicao.findAll();

        return response.status(201).json(instituicoes)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

app.get("/busca/ambientes", async (request, response) => {
    try{
        await database.sync()
        
        const ambientes = await Ambiente.findAll();

        return response.status(201).json(ambientes)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

app.get("/busca/ambientes/nome", async (request, response) => {
    try{
        await database.sync()

        const { nome_ambiente } = request.body; 
        
        const ambiente = await Ambiente.findAll({
            include: {
                nome_ambiente : nome_ambiente
            }
        });

        return response.status(201).json(ambiente)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

app.get("/busca/perguntas", async (request, response) => {
    try{
        await database.sync()
        
        const perguntas = await Pergunta.findAll();

        return response.status(201).json(perguntas)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

app.get("/busca/perguntas/aspecto", async (request, response) => {
    try{
        await database.sync()

        const { aspecto_pergunta } = request.body
        
        const perguntas = await Pergunta.findAll({
            include : {
                aspecto : aspecto_pergunta
            }
        });

        return response.status(201).json(perguntas)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

        /*----- PUT -----*/
            //Atenção: implementar um código que não permita injeção de SQL
app.put("/alterar/usuario/senha", async (request, response)=>{
    try{
        await database.sync()

        const { senha_usuario, registro_usuario } = request.body; 
        
        let sql = `UPDATE usuarios SET senha = '${senha_usuario}' WHERE registro = '${registro_usuario}'`
        connection.query(sql)

        return response.status(201).json("Senha alterada com sucesso")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

app.put("/alterar/usuario/atividade", async (request, response)=>{
    try{
        await database.sync()

        const { atividade, registro_usuario } = request.body; 
        
        let sql = `UPDATE usuarios SET atividade = '${atividade}' WHERE registro = '${registro_usuario}'`
        connection.query(sql)

        return response.status(201).json("Status alterado com sucesso")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

app.put("/alterar/instituicao/atividade", async (request, response)=>{
    try{
        await database.sync()

        const { atividade, id_instituicao } = request.body; 
        
        let sql = `UPDATE instituicao SET atividade = '${atividade}' WHERE id_instituicao = '${id_instituicao}'`
        connection.query(sql)

        return response.status(201).json("Status alterado com sucesso")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

app.put("/alterar/curso/atividade", async (request, response)=>{
    try{
        await database.sync()

        const { atividade, id_curso } = request.body; 
        
        let sql = `UPDATE curso SET atividade = '${atividade}' WHERE id_curso = '${id_curso}'`
        connection.query(sql)

        return response.status(201).json("Status alterado com sucesso")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

app.put("/alterar/turma/atividade", async (request, response)=>{
    try{
        await database.sync()

        const { atividade, id_turma } = request.body; 
        
        let sql = `UPDATE tumra SET atividade = '${atividade}' WHERE id_turma = '${id_turma}'`
        connection.query(sql)

        return response.status(201).json("Status alterado com sucesso")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

app.put("/alterar/ambiente/atividade", async (request, response)=>{
    try{
        await database.sync()

        const { atividade, id_ambiente } = request.body; 
        
        let sql = `UPDATE ambiente SET atividade = '${atividade}' WHERE id_ambiente = '${id_ambiente}'`
        connection.query(sql)

        return response.status(201).json("Status alterado com sucesso")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

app.listen(3333);