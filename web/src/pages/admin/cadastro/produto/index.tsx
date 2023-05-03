import { Button } from 'components/button';
import style from './CadastroProduto.module.scss';
import marca from 'data/marca.json';
import category from 'data/category.json';
import { Header } from 'components/header';
import { Select } from 'components/select';

export function CadastroProduto() {

	const options = [
		{
			'id': 1,
			'option': 'CM',
			'value': 'cm'
		},
		{
			'id': 2,
			'option': 'M',
			'value': 'm'
		},
		{
			'id': 3,
			'option': 'Kg',
			'value': 'kg'
		},
		{
			'id': 4,
			'option': 'G',
			'value': 'g'
		},
	];

	return(
		<section className={style['container']}>
			<div className={style['section-data']}>
				<Header text='Cadastre um novo produto' title='Cadastro de Produtos'/>
				<div className={style['forms']}>
					<form action="" className={style['forms__form']}>
						<div className={style['forms__form__product']}>
							<div className={style['header']}>
								<h2 className={style['header__title']}>Informações do Produto</h2>
							</div>
							<div className={style['forms__form__container']}>
								<input type="text" className={style['forms__form__container__input']} placeholder='Nome' />
								<input type="text" className={style['forms__form__container__input']} placeholder='Descrição' />
							</div>
							<div className={style['forms__form__container']}>
								<input type="number" className={style['forms__form__container__input']} placeholder='Preço' />
								<input type="number" className={style['forms__form__container__input']} placeholder='Quantidade' />
							</div>
						</div>
						<div className={style['forms__form__details']}>
							<div className={style['header']}>
								<h2 className={style['header__title']}>Detalhes do Produto</h2>
							</div>
							<div className={style['forms__form__container']}>
								<select name="marca" id="marca" className={style['forms__form__container__select']}>
									{marca.map(marcas => (
										<option key={marcas.id} value={marcas.name}>{marcas.name}</option>
									))}
								</select>
								<select name="departamento" id="departamento" className={style['forms__form__container__select']}>
									{category.map(categoria => (
										<option key={categoria.id} value={categoria.name}>{categoria.name}</option>
									))}
								</select>
							</div>
							<div className={style['forms__form__container']}>
								<input type="text" className={style['forms__form__container__input']} placeholder='Dimenssão' />
								<Select options={options} />
							</div>
							<div className={style['forms__form__container']}>
								<input type="text" className={style['forms__form__container__input']} placeholder='Material' />
								<input type="text" className={style['forms__form__container__input']} placeholder='Peso' />
							</div>
							<div className={style['forms__form__container']}>
								<input type="file" className={style['forms__form__container__input']} name="image[]" multiple />
							</div>
						</div>
						<div className={style['forms__form__container']}>
							<Button label='Cancelar' color='yellow'/>
							<Button label='Salvar Produto'/>
						</div>					
					</form>
				</div>
			</div>
		</section>
	);
}