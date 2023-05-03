import { Footer } from 'components/footer';
import { Navbar } from 'components/navbar';
import { Outlet } from 'react-router-dom';

export function PageDefault() {
	return (
		<>
			<Navbar/>
			<main>
				<Outlet />
			</main>	
			<Footer/>		
		</>
	);
}