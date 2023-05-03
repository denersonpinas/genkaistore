import { useState } from 'react';
import style from './Marcacategoria.module.scss';
import { Button } from 'components/button';
import { Form } from 'components/form/input';
import { Label } from 'components/form/label';
import { Input } from 'components/form/input/index';
import { Header } from 'components/header';

type FormData = {
	brand: string;
	category: string;
};

export function MarcaCategoria() {
	
	const formInputs = [
		{
			'title': 'Cadastro de Marca',
			'id': 'nameMarca',
			'type': 'text',
			'placeholder': 'Digite o nome da marca',
			'label': 'Nome da Marca',
			'button': 'Salvar Marca'
		},
		{
			'title': 'Cadastro de Categoria',
			'id': 'nameCategoria',
			'type': 'text',
			'placeholder': 'Digite o nome da categoria',
			'label': 'Nome da Categoria',
			'button': 'Salvar Categoria'
		},
	];

	return (
		<section className={style['container']}>
			<div className={style['section-data']}>
				<Header text='Cadastre uma nova marca ou uma nova categoria' title='Cadastro de Marcas e categorias' />
				<div className={style['forms']}>
					{formInputs.map(form => (
						<form key={form.id} className={style['forms__form']}>
							<h2 className={style['form__title']}>{form.title}</h2>
							<div className={style['forms__form__container']}>
								<div className={style['inputs']}>
									<Label htmlfor={form.id} label={form.label} />
									<Input id={form.id} placeholder={form.placeholder} type={form.type}/>
								</div>
								<Button label={form.button} />
							</div>
						</form>
					))}
					<div className={style['forms__form__container']}>
						<Button label="Cancelar" color="yellow" />
						<Button label="Salvar Dados" />
					</div>
				</div>
			</div>
		</section>
	);
}