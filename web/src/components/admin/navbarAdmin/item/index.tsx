import { Link } from 'react-router-dom';
import styles from './Item.module.scss';

interface IItem {
    icon: JSX.Element,
    label: string,
	to: string
}

export function Item(item : IItem) {
	return (
		<Link to={item.to} className={styles['item']}>
			{item.icon}
			{item.label}
		</Link>
	);
}