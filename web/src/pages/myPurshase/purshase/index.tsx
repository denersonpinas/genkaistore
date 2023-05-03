import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import style from './Purshase.module.scss';
import { Button } from 'components/button';
import myPurshase from 'data/myPurshase.json';
import product from 'data/product.json';
import { useState } from 'react';
import classNames from 'classnames';
import { InfoItem } from './InfoItem';

type IProduct = typeof product[0]

interface IProps {
	purshase: typeof myPurshase[0]
}

export function Purshase({ purshase }: IProps) {
	const [isOpen, setIsOpen] = useState(false);
	const productFilter = selectProduct({ purshase }, product);
	const column = [
		{
			'id': 1,
			'title': 'Item'
		},
		{
			'id': 2,
			'title': 'Quantidade'
		},
	];
	const { endereco, pagamento } = purshase;

	function selectProduct({ purshase }: IProps, products: IProduct[]): IProduct[] {
		const selectedProducts: IProduct[] = [];

		if (purshase.produto && products.length) {
			purshase.produto.map(item => {
				const prod = products.find(p => p.id === item.id);
				if (prod) {
					selectedProducts.push(prod);
				}
			});
		}

		return selectedProducts;
	}

	function hideCardNumber(cardNumber: string): string {
		const visibleDigits = 4;
		const cardLength = cardNumber.length;

		if (!/^\d+$/.test(cardNumber)) {
			throw new Error('O número do cartão deve conter apenas dígitos numéricos.');
		}

		if (cardLength < visibleDigits) {
			throw new Error('O número do cartão deve ter pelo menos 4 dígitos.');
		}

		const maskedLength = cardLength - visibleDigits;
		const maskedNumbers = '*'.repeat(maskedLength);
		const visibleNumbers = cardNumber.slice(maskedLength, cardLength);
		return `${maskedNumbers}${visibleNumbers}`;
	}

	return (
		<section className={style['purshase']}>
			<div className={style['resume']} onClick={() => setIsOpen(!isOpen)}>
				<InfoItem title='NÚMERO' value={purshase.codCompra} />
				<InfoItem title='DATA' value={purshase.data} />

				{!isOpen ?
					<div className={style['resume__infors--row']}>
						{productFilter.map((res, id) => (
							<img key={id} src={res.image[id].photo} alt="" className={style['image-mini']} />
						))}
					</div>
					: ''
				}
				<InfoItem title='TOTAL PAGO' value={purshase.total} />
				<div className={style['resume__infors--row']}>
					<span className={classNames({
						[style['resume__infors__infor']]: true,
						[style['resume__infors__infor--approved']]: purshase.status === 'approved',
						[style['resume__infors__infor--canceled']]: purshase.status === 'canceled',
						[style['resume__infors__infor--pendding']]: purshase.status === 'pendding'
					})}>
						{purshase.status == 'approved' ? 'Confirmado' : ''}
						{purshase.status == 'canceled' ? 'Cancelado' : ''}
						{purshase.status == 'pendding' ? 'Em aprovação' : ''}
					</span>
					{isOpen ? <IoIosArrowUp size={32} /> : <IoIosArrowDown size={32} />}
				</div>
			</div>
			{isOpen ?
				<div className={style['complete']}>
					<div>
						<InfoItem title="ENDEREÇO" value={`Rua ${endereco.rua}`} />
						<InfoItem title="" value={`Bairro ${endereco.bairro}`} />
						<InfoItem title="" value={`Cidade ${endereco.cidade}`} />
						<InfoItem title="" value={endereco.proximo} />
					</div>
					<div>
						<InfoItem title="Forma de Pagamento" value={pagamento.tipo} />
						<InfoItem title="" value={pagamento.bandeira} />
						<InfoItem title="" value={hideCardNumber(pagamento.número)} />
					</div>

					<div className={style['complete__infors']}>
						<table className={style['table']}>
							<thead className={style['table__header']}>
								<tr className={style['table__header__cols']}>
									{column.map(column => (
										<th scope="col" key={column.id} className={style['col']}>{column.title}</th>
									))}
								</tr>
							</thead>
							<tbody className={style['table__body']}>
								{productFilter.map((prod, id) => (
									<tr key={id} className={style['table__body__rows']}>
										<td className={style['row']}>
											<div className={style['product']}>
												<img src={prod.image[0].photo} alt="" className={style['product__image']}></img>
												<div className={style['product__infors']}>
													<h3 className={style['product__infors__title']}>{prod.name}</h3>
													<span className={style['product__infors__cod']}>Cod. {prod.id}</span>
												</div>
											</div>
										</td>
										<td className={style['row']}>{purshase.produto[id].qtd}</td>
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
				isOpen ? <Button label='ADD AO CARRINHO' /> : ''
			}
		</section>
	);
}