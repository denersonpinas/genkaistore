import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications } from 'react-icons/md'
import { BiMenuAltLeft } from 'react-icons/bi'

export function Navbar() {
    const [isOpen, setIsOpen] = useState<Boolean>(false)
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
        <section className="w-full flex flex-col">
            <div className="hidden w-full h-14 sm:flex justify-center items-center px-[166px] bg-red">
                <p className="uppercase text-white">A LOJA DOS GEEKS MAIS GEEKS É AQUI!</p>
            </div>
            <header className="w-full py-8 flex flex-col justify-between items-center px-4 bg-white sm:px-8 lg:px-[166px] sm:shadow-md">
                <div className="w-full flex flex-col gap-4 justify-between items-center pb-4 sm:flex-row">
                    <Image
                        src={'/assets/logo-genkai.png'}
                        alt="Logo Genkai"
                        className="aspect-auto w-[96px] h-[50px]"
                        width={96}
                        height={50}
                        priority
                    />
                    <div className='flex items-start justify-between w-[300px] h-[40px] border border-personBlack rounded-full'>
                        <form action="" className='w-full h-[42px] flex flex-row-reverse items-center justify-center'>
                            <input type="text" name="search" id="search" className='w-4/5 h-full border-none bg-transparent outline-none pr-4' placeholder='search' />
                            <button className='w-1/5 h-full flex justify-center items-center border-none bg-transparent cursor-pointer'>
                                <AiOutlineSearch size={25} />
                            </button>
                        </form>
                    </div>
                    <div className="hidden relative ml-3 lg:block">
                        <div className="flex items-center gap-4">
                            <Link href={'/login'} className="sub-title hover:text-secundary" >Login / Cadastrar</Link>
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span className="sr-only">Open user menu</span>
                                <img className="h-8 w-8 rounded-full" src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} alt="" />
                            </button>
                            <button>
                                <MdNotifications size={25} className="text-personBlack hover:text-secundary" />
                            </button>
                        </div>

                        <div className={(isOpen ? 'block' : 'hidden') + ' absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                            <Link href={'/yourProfile'} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</Link>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2" onClick={() => { }}>Sign out</a>
                        </div>
                    </div>
                    <div className="lg:hidden" id="mobile-menu">
                        <button className="bg-red text-white rounded-md p-2" onClick={() => setIsOpen(!isOpen)}>
                            <BiMenuAltLeft size={25} />
                        </button>
                    </div>
                </div>
                <div className={(isOpen ? 'flex' : 'hidden') + " w-full bg-red flex-col gap-4 rounded-md lg:hidden"}>
                    <div className="flex items-center px-3 py-2">
                        <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className="ml-3">
                            <Link href={'/login'} className="sub-title text-white" >Login / Cadastrar</Link>
                        </div>
                    </div>
                    <nav>
                        <ul className="flex flex-col justify-start" >
                            {routes.map(li => (
                                <Link
                                    key={li.to}
                                    href={li.to}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 text-white">
                                    {li.label}
                                </Link>
                            ))}
                        </ul>
                    </nav>
                    <div className="w-full flex flex-col">
                        <Link href={'/yourProfile'} className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 text-white uppercase">Your Profile</Link>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 text-white uppercase">Settings</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 text-white uppercase">Sign out</a>
                    </div>
                </div>
                <hr className="w-full border-t border-personBlack opacity-10" />
                <nav className="w-full hidden lg:flex justify-center items-center">
                    <ul className="flex gap-4">
                        {routes.map(li => (
                            <Link
                                key={li.to}
                                href={li.to}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 text-personBlack hover:text-secundary hover:border-t hover:border-secundary">
                                {li.label}
                            </Link>
                        ))}
                    </ul>
                </nav>
            </header>
        </section>
    )
}