import { Button } from 'components/button';
import style from './Product.module.scss';

export function Product() {
	return(
		<section className="section-product">
			<div className="section-product__images"></div>
			<div className="section-product__content">
				<h1 className="title">Kimetsu no Yaiba Inosuke Hashibira</h1>
				<div className="infor-product">
					<div className="infor-product__stars">
						<p className="media-estrelas">+450 Review</p>
					</div>
					<span className="codigo">COD. 5689</span>
					<span className="stock">em estoque</span>
				</div>
				<p className="description">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
				<div className="prices">
					<div className="price">
						<p className="price__old">R$ 49,90</p>
						<p className="price__now">R$ 29,90</p>
					</div>
				</div>
				<div className="buttons">
					<Button label='ADQUIRIR!' />
				</div>
			</div>
		</section>
	);
}