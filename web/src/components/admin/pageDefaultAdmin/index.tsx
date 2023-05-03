import style from './PageDefaultAdmin.module.scss';
import { Outlet } from 'react-router-dom';
import { NavbarAdmin } from '../navbarAdmin';

export function PageDefaultAdmin() {
	return (
		<>
			<section className={style['section-container']}>
				<NavbarAdmin />
				<Outlet />
			</section>		
		</>
	);
}