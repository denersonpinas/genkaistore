import { MdClose, MdOutlineFilterList } from 'react-icons/md';
import styles from './Filter.module.scss';
import { useState } from 'react';
import classNames from 'classnames';

export function Filter() {

	const [open, setOpen] = useState(false);

	function isOpen() {
		setOpen(!open);
	}

	return(
		<section className={styles['section-filter']}>
			<div className={styles['section-filter__header']}>
				<h2 className={styles['section-filter__greeting']}>
                    olá, <span>Denner</span>
				</h2>
				{ open ? <MdClose size={25} onClick={isOpen} className={styles['section-filter__icon']}/> : <MdOutlineFilterList size={25} onClick={isOpen} className={styles['section-filter__icon']}/>}
			</div>
			<input type='search' name='Isearch' id='isearch' className={styles['search']} placeholder='Search' />
		</section>
	);
}