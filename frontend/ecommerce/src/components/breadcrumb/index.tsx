import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface IBreadcrumb {
    origim: String,
    current?: String,
    linkCurrent?: String
}

export function Breadcrumb({ origim, current, linkCurrent = '' }: IBreadcrumb) {

    return (
        <ul className='flex justify-start items-center'>
            <li className="flex"><Link href={'/'}><span className='uppercase sub-title font-bold hover:text-red cursor-pointer'>{origim}</span></Link></li>
            {current ?
                <li className="flex items-center justify-center">
                    <MdKeyboardArrowRight size={16} />
                    <Link href={linkCurrent}><span className='uppercase sub-title font-bold hover:text-red cursor-pointer'>{current}</span></Link>
                </li>
                :
                ''
            }
        </ul>
    )
}