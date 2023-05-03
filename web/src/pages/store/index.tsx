import style from './Store.module.scss';
import itemProduct from 'data/product.json';
import { Product } from 'components/product';
import { Filter } from 'components/filter';
import marcas from 'data/marca.json';
import category from 'data/category.json';
import { AsideStore } from './aside';

export function Store() {
	const aside = [
		{
			'id': 1,
			'title': 'marcas',
			'component': filternames(marcas)
		},
		{
			'id': 2,
			'title': 'categorias',
			'component': filternames(category)
		}
	];

	function filternames(object: any[]): string[] {
		const namesMarca: string[] = [];
		object.filter(item => (
			namesMarca.push(item.name)
		));

		return namesMarca;
	}

	return (
		<section className={style['section-store']}>
			<AsideStore aside={aside} />
			<section className={style['section-content']}>
				<Filter pageName={'store'} />
				<section className={style['section-content__products']}>
					{itemProduct.map(product => (
						<Product key={product.id} product={product} isFlag={true} />
					))}
				</section>
			</section>
		</section>
	);
}