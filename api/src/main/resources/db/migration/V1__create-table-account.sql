create table account(

    id bigint not null auto_increment,
    nome varchar(100) not null,
    sobrenome varchar(100) not null,
    login varchar(100) not null unique,
    senha varchar(255) not null,
    telefone varchar(20),
    cpf varchar(11) unique,
    logradouro varchar(100),
    bairro varchar(100),
    cep varchar(9),
    complemento varchar(100),
    numero varchar(20),
    uf char(2),
    cidade varchar(100),
    ativo tinyint,

    primary key(id)
);