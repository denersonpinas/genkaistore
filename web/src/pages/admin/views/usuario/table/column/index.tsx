import styles from './Column.module.scss';

interface IColumn {
    label: string
}

export function Column({label} : IColumn) {
	return(
		<th className={styles['column']}>{label}</th>
	);
}