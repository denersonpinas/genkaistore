import style from './DetailsProduct.module.scss';

interface IDetailsProduct {
    title: string;
    information: string;
  }

export function DetailsProduct( { title, information } : IDetailsProduct ) {
	return (
		<div className={style['details']}>
			<span className={style['title']}>{title}</span>
			<span className={style['infor']}>{information}</span>
		</div>
	);
}