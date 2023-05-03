import style from './Category.module.scss';
import { Product } from 'components/product';
import { Filter } from 'components/filter';
import { useParams } from 'react-router-dom';
import product from 'data/product.json';
import categoryName from 'data/category.json';

export function Category() {
	const { id } = useParams();
	const category = product.filter(item => item.category == Number(id));
	const nameCategory = categoryName.find(res => res.id == Number(id));

	if(!nameCategory) {
		return <h1></h1>;
	}


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
				<Filter pageName={nameCategory.name}/>
				<section className={style['section-content__products']}>
					{category.map(prod => (
						<Product key={prod.id} product={prod} isFlag={true}/>
					))}
				</section>
			</section>
		</section>
	);
}