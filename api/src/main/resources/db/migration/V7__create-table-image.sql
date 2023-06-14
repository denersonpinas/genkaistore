create table image(

    id bigint not null auto_increment,
    image varchar(200) not null,
    product_id bigint,

    primary key(id),
    constraint fk_consultas_product_id foreign key(product_id) references product_figure(id)
);