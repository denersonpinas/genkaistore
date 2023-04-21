import style from './Product.module.scss';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import itemProduct from 'data/product.json';
import { IconType } from 'react-icons';
import { BsFillTrashFill } from 'react-icons/bs';
import { Button } from 'components/button';

// type IProduct = typeof itemProduct[0]

interface IProduct {
	product: typeof itemProduct[0],
	to: string,
	isFlag: boolean
}


export function Product({product, to, isFlag}: IProduct) {

	function stars(item: number) {
		const stars = [];
		const activeStar = <AiFillStar size={16} className={style['stars__star']} />;
		const starSize = 16;

		for (let i = 0; i < item; i++) {
			stars.push(activeStar);
		}

		for (let i = item; i < 5; i++) {
			stars.push(<AiOutlineStar size={starSize} className={style.stars} />);
		}

		return <>{stars}</>;
	}

	return (
		<div className={style['product-container']}>
			{isFlag ?
				<div className={style['product-container__divi']}>
					<span className={style['flag']}>{product.flag}</span>
					<a href={to} target="_blank" rel="noopener noreferrer">
						<RiShoppingCart2Fill size={32} className={style['shopping-cart']} />
					</a>
				</div>
				:
				<div className={style['product-container__divi']}>
					<a href={to} target="_blank" rel="noopener noreferrer">
						<BsFillTrashFill size={32} className={style['shopping-cart']} />
					</a>
				</div>
			}
			<img src={`${product.image}`} alt="" className={style['image_product']} />
			<div className={style['product-container__divi']}>
				<p className={style['name-product']}>{product.name}</p>
				<div className={style['stars']}>
					{stars(product.stars)}
				</div>
				<div>
					<p className={style['price']}>Por<strong className={style['emphasis']}>R${product.priceNow}</strong></p>
					<p className={style['price']}> <strong>{product.priceOld}</strong> à vista com desconto no Boleto </p>
				</div>
			</div>
			<div className={style['product-container__divi']}>
				<Button label='EU QUERO'/>
				<p className={style['infor']}>{product.stock ? <span className={style['true']}>em estoque</span> : <span className={style['false']}>indisponivel</span>}</p>
			</div>
		</div>
	);
}