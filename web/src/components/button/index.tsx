import classNames from 'classnames';
import style from './Button.module.scss';

interface IButton {
    label: string,
	color?: string,
	onClick?: () => void
}

export function Button({label, color, onClick} : IButton) {
	return (
		<button 
			className={classNames({
				[style['btn-purchase']]:true,
				[style[`btn-purchase--${color}`]]: color
			})}
			onClick={onClick}>
			{label}</button>
	);
}