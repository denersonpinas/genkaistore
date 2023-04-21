import style from './Marcas.module.scss';
import imgMarca from 'data/marca.json';
import { Marca } from './marca';

export function Marcas() {
	return(
		<section className={style['section-marcas']}>
			<h2 className={style['title']}>NOSSAS MARCAS</h2>
			<div className={style['marcas']}>
				{imgMarca.map(marca => (
					<Marca key={marca.id} {...marca} />
				))}
			</div>			
		</section>
	);
}