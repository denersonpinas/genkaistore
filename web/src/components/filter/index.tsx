import { MdKeyboardArrowRight } from 'react-icons/md';
import style from './Filter.module.scss';
import { Select } from '../select';

interface IFilter {
	pageName: string,
	isOrder?: boolean
}

export function Filter({ pageName, isOrder = true }: IFilter) {
	const options = [
		{
			'id': 1,
			'option': 'Mais Vendidos',
			'value': 'maisVendidos'
		},
		{
			'id': 2,
			'option': 'Melhor Avaliação',
			'value': 'melhorAvaliação'
		},
		{
			'id': 3,
			'option': 'Menor Preço',
			'value': 'menorPreço'
		},
		{
			'id': 4,
			'option': 'Maior Preço',
			'value': 'maiorPreço'
		},
	];

	return (
		<div className={style['section-filter']}>
			<div className={style['section-filter__breadcrumb']}>
				<span className={style['item']}>HOME</span>
				<MdKeyboardArrowRight size={16} />
				<span className={style['item']}>{pageName}</span>
			</div>
			<div className={style['section-filter__header']}>
				<h1 className={style['title']}>{pageName}</h1>
				{
					isOrder ?
						<form className={style['form-order']}>
							<label htmlFor="order" className={style['form-order__order-label']}>Ordenar por:</label>
							<Select options={options} />
						</form>
						:
						''
				}
			</div>
		</div>
	);
}