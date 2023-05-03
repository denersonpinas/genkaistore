import style from './ApresentationProduct.module.scss';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import product from 'data/product.json';
import commets from 'data/comments.json';
import { DescontPrice, FilterStars } from 'functions/utils';
import { Stars } from 'components/stars';
import { Button } from 'components/button';

type IProduct = typeof product[0]

interface IApresentationProduct {
    id: number,
    isButton: boolean
}

export function ApresentationProduct({id, isButton} : IApresentationProduct) {

	const unidProduct: IProduct | undefined = product.find(res => res.id === Number(id));

	const commentsProduct = commets.filter(resCommets => resCommets.productId === Number(id));

	const starsCount = [0, 0, 0, 0, 0];
	commentsProduct.forEach(comment => {
		starsCount[comment.stars - 1]++;
	});

	if (!unidProduct) {
		return <h1></h1>;
	}

	return (
		<section className={style['section-apresentation']}>
			<div className={style['section-apresentation__images']}>
				<Carousel
					showThumbs={true}
					showStatus={true}
					autoPlay={true}
					transitionTime={1}
					infiniteLoop={true}
				>
					{unidProduct.image.map((image, id) => (
						<img src={image.photo} key={id} className={style['card-image']} />
					))}
				</Carousel>
			</div>
			<div className={style['section-apresentation__content']}>
				<h1 className={style['title']}>{unidProduct.name}</h1>
				<div className={style['infor-product']}>
					<div className={style['infor-product__stars']}>
						<Stars color='yellow' starsNumber={FilterStars(commentsProduct)} />
						<p className={style['media-estrelas']}>+{commentsProduct.length} Review</p>
					</div>
					<span className={style['codigo']}>COD. {unidProduct.id}</span>
					<span className={style['stock']}>{unidProduct.stock > 5 ? 'em estoque' : 'em falta'}</span>
				</div>
				<p className={style['description']}>{unidProduct.description}</p>
				<div className={style['prices']}>
					<div className={style['price']}>
						<p className={style['price__old']}>R$ {DescontPrice(Number(unidProduct.priceNow))}</p>
						<p className={style['price__now']}>R$ {unidProduct.priceNow}</p>
					</div>
				</div>
				{isButton ? 
					<div className={style['buttons']}>
						<Button label='ADD CARRINHO!' color={'yellow'} />
						<Button label='ADQUIRIR!' />
					</div>
					:
					''
				}
			</div>
		</section>
	);
}