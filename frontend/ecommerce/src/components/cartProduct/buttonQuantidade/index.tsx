import { CartContext } from '@/context/CartContext';
import { useContext } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


export function ButtonQuantidade({ id }) {
	const { cartProducts, addProduct, removeProduct } = useContext(CartContext)

	function moreOfThisProduct() {
		addProduct(id)
	}

	function lessOfThisProduct() {
		removeProduct(id)
	}

	return (
		<div className='w-fit flex items-center justify-end self-end gap-4 bg-white border border-primary rounded-full p-2'>
			{cartProducts.filter(idCart => idCart === id).length > 0 ? 
				<IoIosArrowBack size={14} onClick={() => lessOfThisProduct()} className='cursor-pointer'  /> 
				: 
				<p className='w-[14px] h-[14px]'></p>
			}
			<span className='sub-title'>{cartProducts.filter(idCart => idCart === id).length}</span>
			<IoIosArrowForward size={14} onClick={() => moreOfThisProduct()} className='cursor-pointer' />
		</div>
	);
}