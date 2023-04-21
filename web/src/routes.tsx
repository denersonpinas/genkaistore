import { Footer } from 'components/footer';
import { Navbar } from 'components/navbar';
import { Cart } from 'pages/cart';
import { Home } from 'pages/home';
import { Store } from 'pages/store';
import { Wishlist } from 'pages/wishlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function AppRoutes() {
	return (
		<main className="container">
			<Router>
				<Navbar/>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/store' element={<Store/>}/>
					<Route path='/lista-de-desejos' element={<Wishlist/>}/>
					<Route path='/carrinho' element={<Cart/>}/>
				</Routes>
				<Footer/>
			</Router>
		</main>
	);
}