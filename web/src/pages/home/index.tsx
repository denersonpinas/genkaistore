import style from './Home.module.scss';
import banner from 'image/Banner.jpg';
import bannerCTA from 'image/Banner-cta.png';
import { Colections } from './collections';
import { Product } from 'components/product';
import itemProduct from 'data/product.json';
import { VerMais } from 'components/vermais';
import { Marcas } from './marcas';
import { About } from 'pages/home/about';
import { ImageComponet } from './imageComponent';

export function Home() {

	const imagesPrincipal = [
		{
			'image' : banner,
			'label'	: 'Banner grande vermelho com imagem do Action Figure Ryuk em promoção!',
			'to'	: '/store'
		}
	];
	const imagesWhatsapp = [
		{
			'image' : bannerCTA,
			'label'	: 'Banner grande vermelho com uma chamada para conversar com atendente!',
			'to'	: '/store'
		}
	];
	
	return (
		<main className={style['container']}>
			<section className={style['section-banner']}>
				<ImageComponet imagesData={imagesPrincipal} />
			</section>
			<section className={style['section-banner-cta']}>
				<ImageComponet imagesData={imagesWhatsapp} />
			</section>
			<Colections/>
			<div className={style['container__divi']}>
				<div></div>
			</div>
			<section className={style['section-product']}>
				{itemProduct.map(product => (
					<Product key={product.id} product={product} isFlag={true}/>
				))}
			</section>
			<VerMais text={'veja todos os produtos'} />			
			<Marcas />
			<VerMais text={'veja todas as marcas'} />
			<About/>
		</main>
	);
}