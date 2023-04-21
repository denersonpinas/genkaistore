import { AiFillHeart } from 'react-icons/ai';
import style from './MenuInternal.module.scss';
import { HiShoppingBag, HiShoppingCart } from 'react-icons/hi';
import { MdLogout } from 'react-icons/md';
import avatar from 'image/User.png';

export function MenuInternal() {
	return (
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
					<li className={style['menu-left__itens__item']}>
						<AiFillHeart size={32} />
						<h2 className={style['title']}>Lista de desejos</h2>
					</li>
					<li className={style['menu-left__itens__item']}>
						<HiShoppingCart size={32} />
						<h2 className={style['title']}>Carrinho</h2>
					</li>
					<li className={style['menu-left__itens__item']}>
						<HiShoppingBag size={32} />
						<h2 className={style['title']}>Minhas compras</h2>
					</li>
					<li className={style['menu-left__itens__item']}>
						<MdLogout size={32} />
						<h2 className={style['title']}>Logout</h2>
					</li>
				</ul>
			</div>
		</div>
	);
}