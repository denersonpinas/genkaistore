import style from './Narvbar.module.scss';
import { MenuSuperior } from './menusuperior';
import { AiFillHeart, AiFillShopping, AiOutlineSearch } from 'react-icons/ai';
import logoGenkai from 'image/logo-genkai.png';
import { Link } from 'react-router-dom';
import { MdNotifications } from 'react-icons/md';

export function Navbar() {
	const routes = [
		{
			label: 'HOME',
			to: '/'
		}, {
			label: 'DEPARTAMENTOS',
			to: '/departamentos'
		}, {
			label: 'STORE',
			to: '/store'
		}, {
			label: 'LISTA DE DESEJOS',
			to: '/lista-de-desejos'
		}, {
			label: 'SOBRE',
			to: '/#about'
		}, {
			label: 'CONTATO',
			to: '/#footer'
		}
	];


	return (
		<section className={style['section-menu']}>
			<MenuSuperior />
			<div className={style['section-menu__container']}>
				<img src={logoGenkai} alt="" className={style['logo']}></img>
				<div className={style['search']}>
					<form action="" className={style['search__form']}>
						<input type="text" name="search" id="search" className={style['search__form__text']} placeholder='search' />
						<button className={style['search__form__btn-submit']}>
							<AiOutlineSearch size={25} />
						</button>
					</form>
				</div>
				<div className={style['icons']}>
					<Link to={'/login'} className={style['icons__label']}>Login / Cadastrar</Link>
					<Link key={'notify'} to={'/carrinho'}>
						<MdNotifications size={32} className={style['icon']} />
					</Link>
					<Link key={'cart'} to={'/carrinho'}>
						<AiFillShopping size={32} className={style['icon']} />
					</Link>					
				</div>
			</div>
			<hr className={style['section-menu__divi']} />
			<div className={style['section-menu__container']}>
				<ul className={style['menu-itens']}>
					{routes.map((route, id) => (
						<Link key={id} to={route.to} className={style['menu-itens__item']}>
							{route.label}
						</Link>
					))}
				</ul>
			</div>
		</section>
	);
}