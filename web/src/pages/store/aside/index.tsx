import style from './AsideStore.module.scss';

interface IAsideStore {
    aside: {
        id: number;
        title: string;
        component: string[];
    }[]
}

export function AsideStore({ aside }: IAsideStore) {
	return (
		<aside className={style['section-aside']}>
			{aside.map(aside => (
				<div key={aside.id} className={style['section-aside__filter']}>
					<div className={style['section-aside__filter__header']}>
						<h2 className={style['title']}>{aside.title}</h2>
					</div>
					<div className={style['section-aside__filter__abas']}>
						{aside.component.map((item, id) => (
							<div key={id} className={style['checkbox']}>
								<input className={style['checkbox__input']} type="checkbox" name="category" id={item} />
								<label className={style['checkbox__label']} htmlFor={item}>{item}</label>
							</div>
						))}
					</div>
				</div>
			))}
		</aside>
	);
}