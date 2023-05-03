import styles from './Filter.module.scss';

export function Filter() {

	return(
		<section className={styles['section-filter']}>
			<div className={styles['section-filter__header']}>
				<h2 className={styles['section-filter__greeting']}>
                    olá, <span>Denner</span>
				</h2>
			</div>
			<input type='search' name='Isearch' id='isearch' className={styles['search']} placeholder='Search' />
		</section>
	);
}