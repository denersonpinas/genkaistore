import Link from 'next/link';
import { BiCategoryAlt, BiMenuAltRight, BiUserCircle } from 'react-icons/bi';
import {
    MdProductionQuantityLimits,
} from 'react-icons/md';
import { AiFillDashboard, AiOutlineUserAdd } from 'react-icons/ai';
import { RiListOrdered, RiProductHuntFill } from 'react-icons/ri';
import { Item } from './Item';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface IAside {
    isOpen: Boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function Aside({isOpen, setIsOpen} : IAside) {
    const menuItems = [
        { icon: <AiFillDashboard size={25} />, label: 'DASHBOARD', to: '/dashboard' },
        { icon: <RiProductHuntFill size={25} />, label: 'PRODUTOS', to: '/products' },
        { icon: <RiListOrdered size={25} />, label: 'CATEGORIAS', to: '/categories' },
        { icon: <MdProductionQuantityLimits size={25} />, label: 'ORDERS', to: '/admin/cadastro-produto' },
        // { icon: <BiCategoryAlt size={25}/>, label: 'CADASTRO DE MARCA / CATEGORIA', to: '/admin/cadastro-adicionais' },
        // { icon: <BiUserCircle size={25}/>, label: 'USUÁRIO', to: '/admin/usuario' },
        // { icon: <AiOutlineUserAdd size={25}/>, label: 'CADASTRO DE USUÁRIO', to: '/admin/cadastro-usuario' }
    ];

    return (
        <aside className={(isOpen ? 'flex': 'hidden') + ' w-full flex-col gap-8 bg-red h-screen transition fixed lg:flex lg:w-1/4 '}>
            <div className="flex justify-between items-center p-4">
                <Link href={'/'} className='flex flex-col w-full justify-center align-middle pb-16 pt-4' >
                    <Image
                        src={'/assets/logo-genkai-white.png'}
                        alt='Logo Henkai Store'
                        className='w-[96px] h-[50px] self-center aspect-auto'
                        width={96}
                        height={50}
                        priority
                    />
                    <span className='text-center text-personWhite'>
                        GENKAI STORE ADMIN
                    </span>
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden self-start bg-personWhite p-1 text-red rounded-md'>
                    <BiMenuAltRight size={25}/>
                </button>
            </div>
            <nav>
                {menuItems.map((item, id) => (
                    <Item key={id} item={item} />
                ))}
            </nav>
        </aside>
    );
}