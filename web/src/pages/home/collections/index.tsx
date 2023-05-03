import style from './Colections.module.scss';
import ichigo from 'image/ichigo.png';
import paiIchigo from 'image/pai-ichigo.png';
import matsumoto from 'image/matsumoto.png';
import { ImageComponet } from '../imageComponent';

export function Colections(){
	const images = [
		{
			'image' : ichigo,
			'label'	: 'Banner CTA para coleção namorado!',
			'to'	: '/store'
		},
		{
			'image' : paiIchigo,
			'label'	: 'Banner CTA para coleção pai!',
			'to'	: '/store'
		},
		{
			'image' : matsumoto,
			'label'	: 'Banner CTA para coleção amiga!',
			'to'	: '/store'
		},
	];

	return(
		<section className={style['section-colections']}>
			<h2 className={style['section-colections__title']}>PRA QUEM VOCÊ ESTÁ COMPRANDO?</h2>
			<div className={style['colections']}>
				<ImageComponet imagesData={images} />
			</div>
		</section>
	);
}