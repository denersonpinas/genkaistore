import style from './Product.module.scss';
import { useNavigate } from 'react-router-dom';
import { RiShoppingCart2Fill } from 'react-icons/ri';

import { BsFillTrashFill } from 'react-icons/bs';
import { Button } from 'components/button';
import { Stars } from 'components/stars';
import { Flags } from './flags';

import { DescontPrice, FilterStars } from 'functions/utils';
import itemProduct from 'data/product.json';
import commetsStar from 'data/comments.json';
import classNames from 'classnames';

interface IProduct {
	product: typeof itemProduct[0]
	isFlag: boolean
}


export function Product({product, isFlag}: IProduct) {
	const navigate = useNavigate();

	const starProduct = commetsStar.filter(stars => stars.productId === product.id);

	const icons = [
		{
			'icon' : <RiShoppingCart2Fill size={32}/>
		},
		{
			'icon' : <BsFillTrashFill size={32}/>
		}
	];

	return (
		<div
			onClick={() => navigate(`/produtos/${product.id}`)} 
			className={style['product-container']}
		>
			<Flags 
				icon={icons} 
				isFlag={isFlag} 
				to='/carrinho' 
				flag={product.flag}/>
			<img src={`${product.image[0].photo}`} alt="" className={style['image_product']} />
			<div className={style['product-container__divi']}>
				<p className={style['name-product']}>{product.name}</p>
				<Stars color='yellow' starsNumber={FilterStars(starProduct)} />
				<div>
					<p className={style['price']}>Por<strong className={style['emphasis']}>R${product.priceNow}</strong></p>
					<p className={style['price']}> <strong>{DescontPrice(Number(product.priceNow))}</strong> à vista com desconto no Boleto </p>
				</div>
			</div>
			<div className={style['product-container__divi']}>
				<Button label='EU QUERO'/>
				<p className={style['infor']}>
					<span className={classNames({
						[style['false']] : true,
						[style['true']] : product.stock >= 5
					})}>
						{product.stock >=5 ? 'em estoque' : 'indisponivel'}
					</span>
				</p>
			</div>
		</div>
	);
}