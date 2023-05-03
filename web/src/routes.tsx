import { PageDefaultAdmin } from 'components/admin/pageDefaultAdmin';
import { PageDefault } from 'components/pageDefault';
import { Admin } from 'pages/admin';
import { MarcaCategoria } from 'pages/admin/cadastro/marca&Categoria';
import { CadastroProduto } from 'pages/admin/cadastro/produto';
import { Cadastrousuario } from 'pages/admin/cadastro/usuario';
import { EsqueciSenha } from 'pages/admin/esqueciSenha';
import { Login } from 'pages/admin/login';
import { NovaConta } from 'pages/admin/novaConta';
import { RedefinirSenha } from 'pages/admin/redefinirSenha';
import { ViewProduto } from 'pages/admin/views/produto';
import { ViewUsuario } from 'pages/admin/views/usuario';
import { Cart } from 'pages/cart';
import { Category } from 'pages/category';
import { Home } from 'pages/home';
import { MyPurshase } from 'pages/myPurshase';
import { Pagamento } from 'pages/pagamento';
import { ProductDetails } from 'pages/productDetails';
import { Review } from 'pages/review';
import { Store } from 'pages/store';
import { Wishlist } from 'pages/wishlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function AppRoutes() {
	return (
		<main className="container">
			<Router>
				<Routes>
					<Route path='/' element={<PageDefault/>}>
						<Route index element={<Home/>}/>
						<Route path='/store' element={<Store/>}/>
						<Route path='/lista-de-desejos' element={<Wishlist/>}/>
						<Route path='/carrinho' element={<Cart/>}/>
						<Route path='/minhas-compras' element={<MyPurshase/>}/>
						<Route path='/departamento/:id' element={<Category/>}/>
						<Route path='/produtos/:id' element={<ProductDetails/>}/>
						<Route path='/login' element={<Login/>}/>
						<Route path='/nova-conta' element={<NovaConta/>}/>
						<Route path='/esqueci-senha' element={<EsqueciSenha/>}/>
						<Route path='/redefinir-senha' element={<RedefinirSenha/>}/>
						<Route path='/review' element={<Review/>}/>
						<Route path='/pagamento' element={<Pagamento/>}/>
					</Route>
					<Route path='/admin' element={<PageDefaultAdmin/>}>
						<Route index element={<Admin/>}/>
						<Route path='/admin/cadastro-produto' element={<CadastroProduto/>}/>
						<Route path='/admin/cadastro-usuario' element={<Cadastrousuario/>}/>
						<Route path='/admin/produto' element={<ViewProduto/>}/>
						<Route path='/admin/usuario' element={<ViewUsuario/>}/>
						<Route path='/admin/cadastro-adicionais' element={<MarcaCategoria/>}/>
					</Route>
				</Routes>
			</Router>
		</main>
	);
}