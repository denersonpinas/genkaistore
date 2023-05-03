import style from './Header.module.scss';

interface IHeader {
    title: string
    text: string
}

export function Header({title, text} : IHeader) {
	return (
		<div className={style['header-labels']}>
			<h2 className={style['header-labels__title']}>{title}</h2>
			<p className={style['header-labels__text']}>{text}</p>
		</div>
	);
}