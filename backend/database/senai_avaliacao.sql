drop database senai_avaliacao;
create database senai_avaliacao;
use senai_avaliacao;

create table acompanhamento(
id_acompanhamento int primary key auto_increment,
id_instituicao int not null,
id_pedagogo int not null,
id_supervisor int not null,
id_instrutor int not null,
id_turma int not null,
id_ambiente int not null,
id_curso int not null,
data_acompanhamento date
);

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

create table turma(
id_turma int primary key auto_increment,
id_curso int not null,
nome_turma varchar(200) not null,
atividade varchar(200) not null
);

create table instituicao(
id_instituicao int primary key auto_increment,
nome_instituicao varchar(200) not null,
atividade varchar(200) not null
);

create table ambiente(
id_ambiente int primary key auto_increment,
nome_ambiente varchar(200),
atividade varchar(200) not null
);

create table curso(
id_curso int primary key auto_increment,
id_instrutor int not null,
nome_curso varchar(200) not null,
atividade varchar(200) not null
);

create table pergunta(
id_pergunta int primary key auto_increment,
aspecto varchar(200) not null,
pergunta varchar(200) not null,
observacao varchar(200) not null
);

create table resposta(
id_resposta int primary key auto_increment,
id_pergunta int not null,
id_acompanhamento int not null,
nota varchar(200) not null,
observacao varchar(200) not null
);

alter table acompanhamento
add constraint fk_acompanhamento_instituicao
foreign key acompanhamento(id_instituicao) references instituicao(id_instituicao);

alter table acompanhamento
add constraint fk_acompanhamento_pedagogo
foreign key acompanhamento(id_pedagogo) references usuario(id_usuario);

alter table acompanhamento
add constraint fk_acompanhamento_supervisor
foreign key acompanhamento(id_supervisor) references usuario(id_usuario);

alter table acompanhamento
add constraint fk_acompanhamento_instrutor
foreign key acompanhamento(id_instrutor) references usuario(id_usuario);

alter table acompanhamento
add constraint fk_acompanhamento_turma
foreign key acompanhamento(id_turma) references turma(id_turma);

alter table acompanhamento
add constraint fk_acompanhamento_ambiente
foreign key acompanhamento(id_ambiente) references ambiente(id_ambiente);

alter table acompanhamento
add constraint fk_acompanhamento_curso
foreign key acompanhamento(id_curso) references curso(id_curso);

alter table turma
add constraint fk_turma_curso
foreign key turma(id_curso) references curso(id_curso);

alter table curso
add constraint fk_curso_instrutor
foreign key curso(id_instrutor) references usuario(id_usuario);

alter table resposta
add constraint fk_resposta_pergunta
foreign key resposta(id_pergunta) references pergunta(id_pergunta);

alter table resposta
add constraint fk_resposta_acompanhamento
foreign key resposta(id_acompanhamento) references acompanhamento(id_acompanhamento);