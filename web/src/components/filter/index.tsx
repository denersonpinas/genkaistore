import { MdKeyboardArrowRight } from 'react-icons/md';
import style from './Filter.module.scss';

interface IFilter {
    pageName: string,
}

export function Filter({pageName} : IFilter) {
	return (
		<div className={style['section-filter']}>
			<div className={style['section-filter__breadcrumb']}>
				<span className={style['item']}>HOME</span>
				<MdKeyboardArrowRight size={16} />
				<span className={style['item']}>{pageName}</span>
			</div>
			<div className={style['section-filter__header']}>
				<h1 className={style['title']}>{pageName}</h1>
				<form action="" className={style['form-order']}>
					<label htmlFor="order" className={style['form-order__order-label']}>Ordenar por:</label>
					<select name="order" id="order" className={style['form-order__order-input']}>
						<option value="maisVendidos">Mais Vendidos</option>
						<option value="melhorAvaliação">Melhor Avaliação</option>
						<option value="menorPreço">Menor Preço</option>
						<option value="maiorPreço">MaiorPreço</option>
					</select>
				</form>
			</div>
		</div>
	);
}