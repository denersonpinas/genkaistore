create table department (

    id bigint not null auto_increment,
    nome varchar(100) not null,
    idSubDepartment bigint,

    primary key(id)
);