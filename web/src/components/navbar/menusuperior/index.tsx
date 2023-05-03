import style from './MenuSuperior.module.scss';

export function MenuSuperior() {
	return(
		<div className={style['menu-superior']}>
			<p className={style['menu-superior__paragraph']}>A LOJA DOS GEEKS MAIS GEEKS É AQUI!</p>
		</div>
	);
}