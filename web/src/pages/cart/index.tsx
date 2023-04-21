import { MenuInternal } from 'components/menuInternal';
import style from './Cart.module.scss';
import { Filter } from 'components/filter';
import { Itens } from './itens';
import product from 'data/whistlist.json';
import { Button } from 'components/button';
import { IoMdAlert } from 'react-icons/io';

export function Cart() {
	return (
		<section className={style['section-cart']}>
			<aside className={style['section-aside']}>
				<MenuInternal />
			</aside>
			<section className={style['section-content']}>
				<Filter pageName='CARRINHO'/>
				<section className={style['section-content__products']}>
					{product.map((item, id) => (
						<Itens key={id} {...item} />
					))}
				</section>
				<section className={style['section-delivery']}>
					<form action="" className={style['form-frete']}>
						<label htmlFor="" className={style['form-frete__label']}>Calcule o frete:</label>
						<input type="number" max={8} className={style['form-frete__input']} />
						<span className={style['form-frete__infor']}>
							<IoMdAlert size={16} />
							Não sei meu CEP
						</span>
					</form>
					<form action="" className={style['form-cupom']}>
						<div>
							<label htmlFor="" className={style['form-cupom__label']}>Cupom de desconto:</label>
							<input type="number" max={8} className={style['form-cupom__input']} />
						</div>
						<button className={style['form-cupom__btn-submit']}>USAR CUPOM</button>
					</form>
				</section>
				<section className={style['section-finished']}>
					<div className={style['section-finished__content']}>
						<p className={style['paragraph']}>Total: <span className={style['price']}><strong>R$ 449,70</strong></span></p>
						<p className={style['paragraph']}>via Pix por R$ 440,70 com 2% de desconto ou em até 2x de <strong>R$ 224,85</strong> sem juros</p>
					</div>
					<div className={style['section-finished__purshase']}>
						<button className={style['section-finished__purshase__continue']}>CONTINUAR COMPRANDO</button>
						<Button label='FINALIZAR AQUISIÇÃO'/>
					</div>
				</section>
			</section>
		</section>
	);
}