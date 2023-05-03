import style from './Label.module.scss';

interface ILabel {
    label: string
    htmlfor: string
}

export function Label({label, htmlfor} : ILabel) {
	return(
		<label htmlFor={htmlfor} className={style['label']}>{label}</label>
	);
}