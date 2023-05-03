import { Link } from 'react-router-dom';
import style from './Legend.module.scss';

interface ILegend {
    textInfor: string
    textLink: string
    to: string
}

export function Legend({textInfor, textLink, to} : ILegend) {
	return(
		<div className={style['legend']}>
			<span className={style['legend__infor']}>{textInfor}</span>
			<Link to={to} className={style['legend__link']}>
				<span className={style['legend__link__infor']}>{textLink}</span>
			</Link>
		</div>
	);
}