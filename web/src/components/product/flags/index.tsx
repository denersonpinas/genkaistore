import { Link } from 'react-router-dom';
import style from './Flags.module.scss';
import { IconType } from 'react-icons';

interface IFlags {
    icon: {
        icon: JSX.Element;
    }[],
    to: string,
    isFlag: boolean,
    flag?: string
}

export function Flags({ icon, to, isFlag, flag }: IFlags) {
	return (
		<div className={style['section-flag']}>
			{isFlag ? <span className={style['flag']}>{flag}</span> : ''}
			<Link to={to} rel="noopener noreferrer">
				{isFlag ? icon[0].icon : icon[1].icon }
			</Link>
		</div>
	);
}