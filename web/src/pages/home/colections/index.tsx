import style from './Colections.module.scss';
import ichigo from 'image/ichigo.png';
import paiIchigo from 'image/pai-ichigo.png';
import matsumoto from 'image/matsumoto.png';

export function Colections(){
	return(
		<section className={style['section-colections']}>
			<h2 className={style['section-colections__title']}>PRA QUEM VOCÊ ESTÁ COMPRANDO?</h2>
			<div className={style['colections']}>
				<a href="" target='_blank'>
					<img src={ichigo} alt="" className={style['colections__image']} />
				</a>
				<a href="" target='_blank'>
					<img src={paiIchigo} alt="" className={style['colections__image']} />
				</a>
				<a href="" target='_blank'>
					<img src={matsumoto} alt="" className={style['colections__image']} />
				</a>
			</div>
		</section>
	);
}