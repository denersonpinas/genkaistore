import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import style from './Store.module.scss';
import itemProduct from 'data/product.json';
import { Product } from 'components/product';
import { Filter } from 'components/filter';

export function Store() {
	return (
		<section className={style['section-store']}>
			<aside className={style['section-aside']}>
				<div className={style['section-aside__filter']}>
					<div className={style['section-aside__filter__header']}>
						<h2 className={style['title']}>MARCAS</h2>
					</div>
					<div className={style['section-aside__filter__abas']}>
						<div className={style['checkbox']}>
							<input className={style['checkbox__input']} type="checkbox" name="category" id="category" />
							<label className={style['checkbox__label']} htmlFor="category">FUNKO POP</label>
						</div>
						<div className={style['checkbox']}>
							<input className={style['checkbox__input']} type="checkbox" name="category" id="category" />
							<label className={style['checkbox__label']} htmlFor="category">FUNKO POP</label>
						</div>
						<div className={style['checkbox']}>
							<input className={style['checkbox__input']} type="checkbox" name="category" id="category" />
							<label className={style['checkbox__label']} htmlFor="category">FUNKO POP</label>
						</div>
						<div className={style['checkbox']}>
							<input className={style['checkbox__input']} type="checkbox" name="category" id="category" />
							<label className={style['checkbox__label']} htmlFor="category">FUNKO POP</label>
						</div>
					</div>
				</div>
				<div className={style['section-aside__filter']}>
					<div className={style['section-aside__filter__header']}>
						<h2 className={style['title']}>CATEGORIAS</h2>
					</div>
					<div className={style['section-aside__filter__abas']}>
						<div className={style['checkbox']}>
							<input className={style['checkbox__input']} type="checkbox" name="category" id="category" />
							<label className={style['checkbox__label']} htmlFor="category">NARUTO</label>
						</div>
						<div className={style['checkbox']}>
							<input className={style['checkbox__input']} type="checkbox" name="category" id="category" />
							<label className={style['checkbox__label']} htmlFor="category">DRAGON BALL</label>
						</div>
						<div className={style['checkbox']}>
							<input className={style['checkbox__input']} type="checkbox" name="category" id="category" />
							<label className={style['checkbox__label']} htmlFor="category">MARVEL</label>
						</div>
						<div className={style['checkbox']}>
							<input className={style['checkbox__input']} type="checkbox" name="category" id="category" />
							<label className={style['checkbox__label']} htmlFor="category">DC</label>
						</div>
					</div>
				</div>
			</aside>
			<section className={style['section-content']}>
				<Filter pageName={'store'}/>
				<section className={style['section-content__products']}>
					{itemProduct.map(product => (
						<Product key={product.id} product={product} isFlag={true} to="http://"/>
					))}
				</section>
			</section>
		</section>
	);
}