import style from './NavbarAdmin.module.scss';
import { useState } from 'react';
import logo from 'image/logo-genkai.png';

import { Item } from './item';
import { BiCategoryAlt, BiMenuAltRight, BiUserCircle } from 'react-icons/bi';
import {
	MdPerson,
	MdLogout,
	MdClose,
	MdHome,
	MdProductionQuantityLimits,
} from 'react-icons/md';
import classNames from 'classnames';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { RiProductHuntFill } from 'react-icons/ri';

const menuItems = [
	{ icon: <MdHome size={25} />, label: 'HOME', to: '/admin' },
	{ icon: <RiProductHuntFill size={25} />, label: 'PRODUTO', to: '/admin/produto' },
	{ icon: <MdProductionQuantityLimits size={25} />, label: 'CADASTRO DE PRODUTO', to: '/admin/cadastro-produto' },
	{ icon: <BiCategoryAlt size={25} />, label: 'CADASTRO DE MARCA / CATEGORIA', to: '/admin/cadastro-adicionais' },
	{ icon: <BiUserCircle size={25} />, label: 'USUÁRIO', to: '/admin/usuario' },
	{ icon: <AiOutlineUserAdd size={25} />, label: 'CADASTRO DE USUÁRIO', to: '/admin/cadastro-usuario' }
];

const userItems = [
	{ icon: <MdPerson size={25} />, label: 'PROFILE', to: '/profiler' },
	{ icon: <MdLogout size={25} />, label: 'LOGOUT', to: '/logout' }
];

export function NavbarAdmin(){
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function toggleMenu() {
		setIsMenuOpen((prevState) => !prevState);
	}

	return (
		<aside className={style['section-aside']}>
			<div className={style['bg']}></div>
			<div className={style['section-aside__logo']}>
				<img src={logo} alt="Logo da FLorestar" className={style['section-aside__logo__img']} />
				<p className={style['section-aside__logo__text']}>A LOJA DOS GEEKS MAIS GEEKS É AQUI!</p>
			</div>
			{
				isMenuOpen ?
					<MdClose size={25} className={style['section-aside__icon']} onClick={toggleMenu} />
					: 
					<BiMenuAltRight size={25} className={style['section-aside__icon']} onClick={toggleMenu} />
			}
			<div className={classNames({
				[style['section-aside__menu']] : true,
				[style['open']] : isMenuOpen
			})}>
				<ul className={style['items']}>
					{menuItems.map((item, index) => (
						<Item key={index} {...item} />
					))}
				</ul>
				<ul className={style['items']}>
					{userItems.map((item, index) => (
						<Item key={index} {...item} />
					))}
				</ul>
			</div>
		</aside>
	);
}