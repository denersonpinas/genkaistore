create table brands(

    id bigint not null auto_increment,
    nome varchar(100) not null,
    ativo tinyint not null,

    primary key(id)
);