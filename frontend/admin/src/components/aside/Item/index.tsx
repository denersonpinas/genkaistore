import Link from "next/link";
import { useRouter } from "next/router";

interface IItem {
    item : {
        icon: JSX.Element;
        label: string;
        to: string;
    }
}

export function Item({ item} : IItem) {
    const link ='flex gap-4 p-4 text-white hover:bg-white hover:text-red rounded-l-lg'
    const activeLink = 'flex gap-4 p-4 bg-white text-red rounded-l-lg'

    const router = useRouter()
    const {pathname} = router

    return (
        <>
        <Link className={pathname === item.to ? activeLink : link} href={item.to}>
            {item.icon}
            <span><strong>{item.label}</strong></span>
        </Link>
        </>
    )
}