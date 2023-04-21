import { MdKeyboardArrowRight, MdLogout } from 'react-icons/md';
import style from './Wishlist.module.scss';
import itemProduct from 'data/whistlist.json';
import { Product } from 'components/product';
import { Button } from 'components/button';
import { MenuInternal } from 'components/menuInternal';
import { Filter } from 'components/filter';

type IProduct = typeof itemProduct;

export function Wishlist() {
	
	function totalWishlist(produc: IProduct) {
		let soma = 0;
		produc.map(item => {
			soma += parseInt(item.priceNow);
		});
		return soma;
	}

	return (
		<section className={style['section-wishlist']}>
			<aside className={style['section-aside']}>
				<MenuInternal/>
			</aside>
			<section className={style['section-content']}>
				<Filter pageName={'lista de desejos'} />
				<section className={style['section-content__products']}>
					{itemProduct.map(product => (
						<Product key={product.id} product={product} isFlag={false} to="http://"/>
					))}
				</section>
				<div className={style['section-content__price']}>
					<p className={style['section-content__price__paragraph']}>Total ({itemProduct.length} itens) R$ {totalWishlist(itemProduct)}</p>
					<Button label='ADIQUIRIR'/>
				</div>
			</section>
		</section>
	);
}