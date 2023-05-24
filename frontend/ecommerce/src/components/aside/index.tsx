import Link from "next/link";
import { HiShoppingBag, HiShoppingCart } from 'react-icons/hi';
import { MdLogout } from 'react-icons/md';
import { AiFillHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";

export function Aside() {
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
            'name': 'Seu Perfil',
            'to': '/yourProfile',
            'icon': <CgProfile size={32} />
        },
        {
            'id': 5,
            'name': 'Logout',
            'to': '/logout',
            'icon': <MdLogout size={32} />
        },
    ];

    const router = useRouter()
    const {pathname} = router

    return (
        <div className="w-full h-fit box-border bg-white shadow-md flex flex-col p-4 gap-10 rounded-sm lg:w-[350px]">
            <div className="flex gap-2">
                <img src="https://lh3.googleusercontent.com/a/AGNmyxZG59-MK5e7V8SNzcavliTOHAQZajRb1gr65OhsOw=s96-c" alt="" className="w-[50px] h-[50px] rounded-full" />
                <div className="flex flex-col gap-1 justify-start">
                    <span className="sub-title">Dênerson pinas de Souza</span>
                    <span className="sub-title text-xs">denersonpinas19@gmail.com</span>
                </div>
            </div>
            <ul className="flex flex-col">
                {menuInterno.map(itens => (
                    <Link href={itens.to} key={itens.id} className={(pathname === itens.to ? 'bg-personWhite rounded-full' : '') + ' w-full flex gap-4 px-4 py-2 items-center justify-start'}>
                        {itens.icon}
                        <span className="sub-title">{itens.name}</span>
                    </Link>
                ))}
            </ul>
        </div>
    )
}