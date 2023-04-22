import { MenuInternal } from 'components/menuInternal';
import style from './MyPurshase.module.scss';
import { Filter } from 'components/filter';
import myPurshase from 'data/myPurshase.json';
import { Purshase } from './purshase';

interface IProps {
    purshase: typeof myPurshase[0]
}

export function MyPurshase() {

	return (
		<section className={style['section-cart']}>
			<aside className={style['section-aside']}>
				<MenuInternal />
			</aside>
			<section className={style['section-content']}>
				<Filter pageName='Minhas Compras' />
				<section className={style['section-content__purshases']}>
					{myPurshase.map((item, id) => (
						<Purshase purshase={item} key={id} />
					))}
				</section>
			</section>
		</section>
	);
}