import style from './Home.module.scss';
import banner from 'image/Banner.jpg';
import bannerCTA from 'image/Banner-cta.png';
import { Colections } from './colections';
import { Product } from 'components/product';
import itemProduct from 'data/product.json';
import { VerMais } from 'components/vermais';
import { Marcas } from './marcas';
import { About } from 'components/about';

export function Home() {
	return (
		<main className={style['container']}>
			<section className={style['section-banner']}>
				<a href="http://" target="_blank" rel="noopener noreferrer">
					<img src={banner} alt="" className={style['section-banner__banner']} />
				</a>
			</section>
			<section className={style['section-banner-cta']}>
				<a href="http://" target="_blank" rel="noopener noreferrer">
					<img src={bannerCTA} alt="" className={style['section-banner-cta__banner']} />
				</a>
			</section>
			<Colections/>
			<div className={style['container__divi']}>
				<div></div>
			</div>
			<section className={style['section-product']}>
				{itemProduct.map(product => (
					<Product key={product.id} product={product} isFlag={true} to="http://"/>
				))}
			</section>
			<VerMais text={'veja todos os produtos'} />			
			<Marcas />
			<VerMais text={'veja todas as marcas'} />
			<About/>
		</main>
	);
}