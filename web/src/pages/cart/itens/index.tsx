import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import style from './Itens.module.scss';
import { BsFillTrashFill } from 'react-icons/bs';
import itemCart from 'data/whistlist.json';

type IProduct = typeof itemCart[0]

export function Itens( product : IProduct ) {
	return (
		<div className={style['product']}>
			<img src={product.image} alt={product.name} className={style['image-product']}></img>
			<div className={style['content-product']}>
				<h2 className={style['content-product__title']}>{product.name}</h2>
				<p className={style['content-product__cod']}>Cod. 85598</p>
				<div className={style['content-product__quantidade']}>
					<IoIosArrowBack size={14} />
					<span className={style['quantidade']}>1</span>
					<IoIosArrowForward size={14} />
				</div>
			</div>
			<div className={style['content-prices']}>
				<BsFillTrashFill size={32} className={style['content-prices__trash']} />
				<div className={style['content-prices__price']}>
					<span className={style['price-old']}>R$ {product.priceOld}</span>
					<h3 className={style['price-now']}>R$ {product.priceNow}</h3>
				</div>
			</div>
		</div>
	);
}