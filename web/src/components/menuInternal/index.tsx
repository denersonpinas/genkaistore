import { AiFillHeart } from 'react-icons/ai';
import style from './MenuInternal.module.scss';
import { HiShoppingBag, HiShoppingCart } from 'react-icons/hi';
import { MdLogout } from 'react-icons/md';
import avatar from 'image/User.png';
import { Link } from 'react-router-dom';

export function MenuInternal() {
	const menuInterno = [
		{
			'id': 1,
			'name': 'Lista de desejos',
			'to': '/lista-de-desejos',
			'icon': <AiFillHeart size={32} />
		},
		{
			'id': 2,
			'name': 'Carrinho',
			'to': '/carrinho',
			'icon': <HiShoppingCart size={32} />
		},
		{
			'id': 3,
			'name': 'Minhas compras',
			'to': '/minhas-compras',
			'icon': <HiShoppingBag size={32} />
		},
		{
			'id': 4,
			'name': 'Logout',
			'to': '/logout',
			'icon': <MdLogout size={32} />
		},
	];

	return (
		<aside className={style['section-aside']}>
			<div className={style['section-menu-left']}>
				<div className={style['header']}>
					<img src={avatar} alt="" className={style['avatar']}></img>
					<div className={style['personal-infor']}>
						<h3 className={style['name']}>Nick Fury</h3>
						<p className={style['email']}>nickfury@gmail.com</p>
					</div>
				</div>
				<div className={style['menu-left']}>
					<ul className={style['menu-left__itens']}>
						{menuInterno.map(itens => (
							<Link to={itens.to} key={itens.id} className={style['menu-left__itens__item']}>
								{itens.icon}
								<h2 className={style['title']}>{itens.name}</h2>
							</Link>
						))}
					</ul>
				</div>
			</div>
		</aside>
	);
}