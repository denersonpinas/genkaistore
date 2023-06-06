import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { TbTruckReturn } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import { InfoItem } from './InfoItem';
import { Button } from '../button/indext';
import axios from 'axios';
import { FormatedPrice } from '@/functions/utils';

export function Order({ order }) {
	const [isOpen, setIsOpen] = useState(false);
	const [product, setProduct] = useState([])

	const column = [
		{
			'id': 1,
			'label': 'Item'
		},
		{
			'id': 2,
			'label': 'Quantidade'
		},
		{
			'id': 3,
			'label': '#'
		},
	];

	useEffect(() => {
		order.line_items.map(item => {
			console.log(item.price_data.product_data.id)
			axios.post('/api/product', { ids: item.price_data.product_data.id })
				.then(response => {
					setProduct(response.data)
				})
		})
	}, [])

	useEffect(() => {
		axios.get('/api/product')
			.then(response => {
			})
	}, [])

	function Amount() : number {
		let soma = 0
		order.line_items.map(amount => {
			let priceUnit = amount.price_data.unit_amount
			let quantity = amount.quantity
			soma += priceUnit * quantity
		})
		return (soma / 100)
	}

	return (
		<section className='w-full flex flex-col items-end gap-16 bg-white shadow-md rounded-md p-4'>
			<div className='w-full flex items-center justify-between cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
				<InfoItem classEdited='flex-col hidden xl:flex' title='NÚMERO' value={`#${order._id}`} />
				<InfoItem classEdited='flex-col hidden xl:flex' title='DATA' value={order.createdAt} />

				{!isOpen ?
					<div className='hidden flex-col justify-center items-start gap-4 xl:flex'>
						{product.map((image, id) => (
							<img key={id} src={image.images[0]} alt="" className='w-[84px] h-[84px]' />
						))}
					</div>
					: ''
				}
				<InfoItem classEdited='flex-col' title='TOTAL PAGO' value={FormatedPrice(Amount())} />
				<div className='flex justify-center items-start gap-4'>
					<span className={(order.paid ? 'text-green' : 'text-red') + ' sub-title'}>
						{order.paid ? 'Pago' : 'Não Pago'}
					</span>
					{isOpen ? <IoIosArrowUp size={32} /> : <IoIosArrowDown size={32} />}
				</div>
			</div>
			{isOpen ?
				<div className='w-full flex flex-col items-start justify-between gap-12 xl:flex-row'>
					<div>
						<InfoItem classEdited='pb-4' title="ENDEREÇO" value={''} />
						<InfoItem title="" value={`Rua ${order.address}`} />
						<InfoItem title="" value={`Cep ${order.cep}`} />
						<InfoItem title="" value={`Cidade ${order.city}`} />
						<InfoItem title="" value={`Pais ${order.country}`} />
					</div>
					<div>
						<InfoItem classEdited='pb-4' title="Forma de Pagamento" value={''} />
						<InfoItem title="" value={`Tipo de Pagamento ${order.paidType}`} />
						<InfoItem title="" value={`E-mail ${order.email}`} />
						<InfoItem title="" value={`Nome ${order.name}`} />
					</div>
					<div className="w-full overflow-x-auto">
						<table className="min-w-full divide-y divide-gray-300">
							<thead className="">
								<tr>
									{column.map((col, id) => (
										<th key={id} className={'px-6 py-3 text-black text-left uppercase tracking-wider'}>{col.label}</th>
									))}
								</tr>
							</thead>

							<tbody className="divide-y divide-gray-300">
								{product.map((prod, id) => (
									<tr key={id} className={id % 2 == 0 ? 'bg-white' : 'bg-gray-300'}>
										<td className={'px-6 py-4 text-sm whitespace-nowrap'}>
											<div className='w-full flex items-center justify-between gap-2'>
												<img src={prod.images[0]} alt="" className='w-[50px] h-[50px]'></img>
												<div className='flex flex-col items-start justify-center'>
													<h3 className='sub-title font-bold'>{prod.name}</h3>
													<span className='sub-title'>Cod. {prod._id}</span>
												</div>
											</div>
										</td>
										<td className={'px-6 py-4 text-sm whitespace-nowrap'}>{order.line_items[id].quantity}</td>
										{order.paid ?
											<td className={'px-6 py-4 text-sm whitespace-nowrap'}>
												<div className='py-2 px-4 rounded-md cursor-pointer bg-secundary text-white'>
													<TbTruckReturn size={16} />
												</div>
											</td>
											:
											''
										}										
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				:
				''
			}
			{
				isOpen ? <Button classname='btn-primary' label='ADD AO CARRINHO' /> : ''
			}
		</section>
	);
}