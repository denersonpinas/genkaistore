import { AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { Button } from "../button/indext";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { IProduct } from "@/types/product";
import { DescontPrice, FormatedPrice } from "@/functions/utils";
import { WishlistContext } from "@/context/WishlistContext";



export function NewProduct({ newProducts }: IProduct) {
    const urlProduct = newProducts._id
    const { addProduct } = useContext(CartContext)
    const { addWishlist, removeWishlist, wishlistProducts } = useContext(WishlistContext)

    function addDeaturedToCart() {
        addProduct(urlProduct)
    }

    function featuredToWishlist() {
        if (isWishlist()) {
            removeWishlist(urlProduct)
        } else {
            addWishlist(urlProduct)
        }
    }

    function isWishlist() {
        if (wishlistProducts.find(element => element == urlProduct)) return true
        return false
    }

    return (
        <div className="w-full flex flex-col gap-4 bg-white shadow-md rounded-md p-4 md:w-2/5 md:mb-8 2xl:w-1/5">
            <div className="flex justify-between items-center">
                <span className="flex justify-center items-center sub-title text-white bg-secundary py-2 px-4 rounded-full">novo</span>
                <AiFillHeart onClick={() => featuredToWishlist()} size={25} className={(isWishlist() ? 'text-primary' : '') + ' text-gray-500 hover:text-secundary cursor-pointer'} />
            </div>
            <Link href={'/product/' + urlProduct}><img src={newProducts.images[0]} alt="Riuk Shinigami" className='w-full rounded-md' /></Link>
            <Link href={'/product/' + urlProduct}><h2 className="text-center md:text-2xl">{newProducts.name}</h2></Link>
            <div className="flex flex-col justify-center items-center">
                <span className="sub-title">Por: <strong className='text-2xl font-bold'>{FormatedPrice(newProducts.preco)}</strong></span>
                <span className="seb-title text-center"><strong>{FormatedPrice(DescontPrice(newProducts.preco))}</strong> à vista com  desconto Boleto</span>
            </div>
            <Button onClick={addDeaturedToCart} classname='btn-primary' label={'ADD Carrinho'} icon={<BsFillCartFill size={25} />} />
            <span className={(newProducts.quantidade === 0 ? 'text-red' : newProducts.quantidade < 5 ? 'text-secundary' : 'text-green') + " text-sm text-center"}>
                {newProducts.quantidade === 0 ? 'esgotado' : newProducts.quantidade < 5 ? 'quase esgotado' : 'em estoque'}
            </span>
        </div>
    )
}