import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button } from '../button/indext';
import { DescontPrice, FormatedPrice } from '@/functions/utils';
import { IProduct } from '@/types/product';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

export function ApresentationProduct({product} : IProduct) {
	const {addProduct} = useContext(CartContext)

	function moreProduct() {
		addProduct(product._id)
	}

	return (
		<section className='w-full flex flex-col items-start justify-center gap-4 p-4 bg-white shadow-md rounded-md xl:flex-row'>
			<div className='w-full xl:w-[30%] flex items-center justify-center'>
				<Carousel
					showThumbs={true}
					showStatus={true}
					autoPlay={true}
					transitionTime={1}
					infiniteLoop={true}
				>
					{product?.images?.map((image, id) => (
						<img src={image} key={id}/>
					))}
				</Carousel>
			</div>
			<div className='w-full xl:w-[70%] h-[450px] flex flex-col justify-between items-start'>
				<div className='w-full flex items-center justify-between gap-2'>
					<h1 className='text-2xl font-bold sm:text-5xl'>{product.name}</h1>
					<span className={(product.quantidade >= 5 ? 'text-green' : 'text-red') + ' sub-title'}>{product.quantidade >= 5 ? 'em estoque' : 'em falta'}</span>
				</div>
				<p className='sub-title text-sm sm:text-lg'>{product.descricao}</p>
				<div className='w-full flex items-center justify-between'>
					<div className='flex items-center justify-center gap-8'>
						<p className='sub-title text-xs'>{FormatedPrice(DescontPrice(Number(product.preco)))}</p>
						<p className='sub-title text-2xl font-bold text-primary sm:text-5xl'>{FormatedPrice(product.preco)}</p>
					</div>
				</div>
				<div className='w-full flex items-start justify-center gap-8'>
					<Button label='GOSTEI!' classname='btn-secudary text-sm sm:text-2xl' />
					{product.quantidade < 5 ? '' : <Button label='ADD CARRINHO!' classname='btn-primary text-sm sm:text-2xl' onClick={moreProduct} />}
				</div>
			</div>
		</section>
	)
}