create table product_figure(

    id bigint not null auto_increment,
    nome varchar(100) not null,
    descricao varchar(100) not null,
    preco decimal not null,
    quantidade int not null,
    marca_id bigint,
    departamento_id bigint,
    dimenssao varchar(100),
    unidadeMedida varchar(100),
    material varchar(9),
    peso varchar(100),
    ativo tinyint,
    data datetime not null,

    primary key(id),
    constraint fk_consultas_marca_id foreign key(marca_id) references brands(id),
    constraint fk_consultas_departamento_id foreign key(departamento_id) references department(id)
);