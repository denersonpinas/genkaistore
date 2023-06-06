import { BsFillTrashFill } from 'react-icons/bs';
import { ButtonQuantidade } from './buttonQuantidade';
import { DescontPrice, FormatedPrice } from '@/functions/utils';
import { IProduct } from '@/types/product';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';


export function CartProduct({ itemProduct } : IProduct) {
    const { cartProducts, removeAllProduct } = useContext(CartContext)

    function totalPrice() {
        return cartProducts.filter(id => id === itemProduct._id).length
    }

    return (
        <div className='w-full flex flex-col items-center justify-between gap-8 p-4 shadow-md rounded-md bg-white xl:gap-0 xl:h-[189px] xl:flex-row'>
            <img src={itemProduct.images[0]} alt={itemProduct.name} className='aspect-auto w-full xl:h-full xl:w-auto'></img>
            <div className='w-full flex items-center justify-between gap-4 xl:items-start xl:justify-between xl:w-1/2 xl:flex-col xl:h-full'>
                <h2>{itemProduct.name}</h2>
                <ButtonQuantidade id={itemProduct._id} />
            </div>
            <div className='w-full h-full flex flex-row-reverse items-end justify-between xl:flex-col xl:w-1/5'>
                <BsFillTrashFill onClick={() => removeAllProduct(itemProduct._id)} size={32} className='cursor-pointer hover:text-primary' />
                <div className='w-full flex items-center justify-start gap-2 xl:items-start xl:flex-col'>
                    <span className='sub-title'>{FormatedPrice(Number(totalPrice() * itemProduct.preco))}</span>
                    <h3 className='sub-title text-2xl font-bold text-primary xl:text-3xl'>{DescontPrice(totalPrice() * itemProduct.preco)}</h3>
                </div>
            </div>
        </div>
    )
}