import style from './ProductDetails.module.scss';
import { Stars } from 'components/stars';
import details from 'data/details.json';
import commets from 'data/comments.json';
import { useParams } from 'react-router-dom';
import { FilterStars } from 'functions/utils';
import { DetailsProduct } from './detailsProduct';
import { ApresentationProduct } from 'components/apresentationProduct';

export function ProductDetails() {

	const { id } = useParams();

	const detailsProduct = details.find(resDetail => resDetail.idProd === Number(id));
	const commentsProduct = commets.filter(resCommets => resCommets.productId === Number(id));

	const starsCount = [0, 0, 0, 0, 0];
	commentsProduct.forEach(comment => {
		starsCount[comment.stars - 1]++;
	});

	return (
		<section className={style['section-product']}>
			<ApresentationProduct id={Number(id)} isButton={true}/>
			<section className={style['main']}>
				<div className={style['details-product']}>
					<h3 className={style['details-product__title']}>DETALHES DO PRODUTO</h3>
					<DetailsProduct title="CATEGORIA" information={`${detailsProduct?.category}`} />
					<DetailsProduct title="DIMENSSÕES" information={`${detailsProduct?.dimenssões}`} />
					<DetailsProduct title="MARCA" information={`${detailsProduct?.marca}`} />
					<DetailsProduct title="MATERIAL" information={`${detailsProduct?.material}`} />
					<DetailsProduct title="PESO" information={`${detailsProduct?.peso}g`} />
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