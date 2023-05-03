import style from './InfoItem.module.scss';

interface IInforItem {
    title: string
    value: string
}

export function InfoItem({ title, value }: IInforItem) {

	const styles = {
		title: style['infors__title'],
		info: style['infors__infor'],
		container: style['infors'],
	};


	return (
		<div className={styles.container}>
			<span className={styles.title}><strong>{title}</strong></span>
			<span className={styles.info}>{value}</span>
		</div>
	);
}