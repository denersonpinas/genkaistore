import { Button } from 'components/button';
import style from './ProductDetails.module.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Stars } from 'components/stars';
import { Star } from '../../components/star';
import { useState } from 'react';
import product from 'data/product.json';
import details from 'data/details.json';
import commets from 'data/comments.json';
import { useParams } from 'react-router-dom';
import { DescontPrice, FilterStars } from 'functions/utils';
import { DetailsProduct } from './detailsProduct';
import { Label } from 'components/form/label';
import { Input } from 'components/form/input/index';

type IProduct = typeof product[0]
type ICommets = typeof commets[0]

export function ProductDetails() {

	const { id } = useParams();

	const unidProduct: IProduct | undefined = product.find(res => res.id === Number(id));
	const detailsProduct = details.find(resDetail => resDetail.idProd === Number(id));
	const commentsProduct = commets.filter(resCommets => resCommets.productId === Number(id));

	const starsCount = [0, 0, 0, 0, 0];
	commentsProduct.forEach(comment => {
		starsCount[comment.stars - 1]++;
	});

	const [activeIndex, setActiveIndex] = useState<number>();
	const items: number[] = [...(new Array(5).keys() as any)];

	const onClickStar = (id: number) => {
		setActiveIndex((oldState) => (oldState === id ? undefined : id));
	};

	const formInputs = [
		{
			'id': 'nameUser',
			'type': 'text',
			'placeholder': 'Digite seu nome...',
			'label': 'nome'
		},
		{
			'id': 'emailUser',
			'type': 'email',
			'placeholder': 'Digite seu e-mail...',
			'label': 'E-mail'
		},
		{
			'id': 'mensagemUser',
			'type': 'text',
			'placeholder': 'Digite sua avaliação...',
			'label': 'Mensagem'
		}
	];


	if (!unidProduct) {
		return <h1></h1>;
	}

	return (
		<section className={style['section-product']}>
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
					<div className={style['buttons']}>
						<Button label='ADD CARRINHO!' color={'yellow'} />
						<Button label='ADQUIRIR!' />
					</div>
				</div>
			</section>
			<section className={style['main']}>
				<div className={style['details-product']}>
					<h3 className={style['details-product__title']}>DETALHES DO PRODUTO</h3>
					<DetailsProduct title="CATEGORIA" information={`${detailsProduct?.category}`} />
					<DetailsProduct title="DIMENSSÕES" information={`${detailsProduct?.dimenssões}`} />
					<DetailsProduct title="MARCA" information={`${detailsProduct?.marca}`} />
					<DetailsProduct title="MATERIAL" information={`${detailsProduct?.material}`} />
					<DetailsProduct title="PESO" information={`${detailsProduct?.peso}g`} />
				</div>
				<div className={style['review-product']}>
					<h3 className={style['review-product__title']}>ADD SEU REVIEW</h3>
					<form action="" className={style['review-product__form']}>
						{formInputs.map(form => (
							<div key={form.id}>
								<Label htmlfor={form.id} label={form.label} />
								<Input id={form.id} placeholder={form.placeholder} type={form.type} />
							</div>
						))}
						<div>
							<label htmlFor="" className={style['label']}>CLASSIFICAÇÃO</label>
							<div className={style['input-star']}>
								{items.map(id => (
									<Star onClick={() => onClickStar(id)} isActive={id <= activeIndex!} key={id} />
								))}
							</div>
						</div>
						<Button label='ENVIAR' />
					</form>
				</div>
			</section>
			<section className={style['section-comments']}>
				<h2 className={style['section-comments__title']}>AVALIAÇÃO DO PRODUTO</h2>
				<div className={style['section-comments__header']}>
					<div className={style['section-comments__header__avaible']}>
						<span className={style['star']}>{FilterStars(commentsProduct)} de 5</span>
						<div className={style['section-comments__header__avaible__star']}>
							<Stars color='red' starsNumber={FilterStars(commentsProduct)}/>
						</div>
					</div>
					<div className={style['section-comments__header__filters']}>
						<span className={style['section-comments__header__filters__filter']}>TUDO</span>
						{starsCount.map((stars, id) => (
							<span key={id} className={style['section-comments__header__filters__filter']}>{id+1} ESTRELAS ({stars})</span>
						))}
					</div>
				</div>
				<div className={style['section-comments__comments']}>
					{commentsProduct.map((comment, id) => (
						<div key={id} className={style['section-comments__comments__comment']}>
							<div className={style['photo']}>
								<img src={comment.photo} alt={comment.name} className={style['photo__image']} />
							</div>
							<div className={style['comment-content']}>
								<h3 className={style['comment-content__name']}>{comment.name}</h3>
								<div className={style['comment-content__star']}>
									<Stars color='red' starsNumber={comment.stars} />
								</div>
								<span className={style['comment-content__date']}>{comment.date}</span>
								<p className={style['comment-content__description']}>{comment.comment}</p>
							</div>
						</div>
					))}
					<hr className={style['section-comments__comments__divi']} />
				</div>
			</section>
		</section>
	);
}