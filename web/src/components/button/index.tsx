import style from './Button.module.scss';

interface IButton {
    label: string
}

export function Button({label} : IButton) {
	return (
		<button className={style['btn-purchase']}>{label}</button>
	);
}