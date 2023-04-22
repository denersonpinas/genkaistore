import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import style from './Purshase.module.scss';
import { Button } from 'components/button';
import myPurshase from 'data/myPurshase.json';
import product from 'data/product.json';
import { useState } from 'react';
import classNames from 'classnames';

type IProduct = typeof product[0]

interface IProps {
	purshase: typeof myPurshase[0]
}

export function Purshase({ purshase }: IProps) {
	const [isOpen, setIsOpen] = useState(false);


	const productFilter = selectProduct({ purshase }, product);

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
				<div className={style['resume__infors']}>
					<span className={style['resume__infors__infor']}><strong>NÚMERO</strong></span>
					<span className={style['resume__infors__infor']}>#{purshase.codCompra}</span>
				</div>
				<div className={style['resume__infors']}>
					<span className={style['resume__infors__infor']}><strong>DATA</strong></span>
					<span className={style['resume__infors__infor']}>{purshase.data}</span>
				</div>
				{!isOpen ?
					<div className={style['resume__infors--row']}>
						{productFilter.map((res, id) => (
							<img key={id} src={res.image} alt="" className={style['image-mini']} />
						))}
					</div>
					: ''
				}
				<div className={style['resume__infors']}>
					<span className={style['resume__infors__infor']}><strong>TOTAL PAGO</strong></span>
					<span className={style['resume__infors__infor']}>{purshase.total}</span>
				</div>
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
					<div className={style['complete__infors']}>
						<span className={style['complete__infors__title']}><strong>ENDEREÇO</strong></span>
						<span className={style['complete__infors__infor']}>Rua {purshase.endereco.rua}</span>
						<span className={style['complete__infors__infor']}>Bairro {purshase.endereco.bairro}</span>
						<span className={style['complete__infors__infor']}>Cidade {purshase.endereco.cidade}</span>
						<span className={style['complete__infors__infor']}>{purshase.endereco.proximo}</span>
					</div>
					<div className={style['complete__infors']}>
						<span className={style['complete__infors__title']}><strong>Forma de Pagamento</strong></span>
						<span className={style['complete__infors__infor']}>{purshase.pagamento.tipo}</span>
						<span className={style['complete__infors__infor']}>{purshase.pagamento.bandeira}</span>
						<span className={style['complete__infors__infor']}>{hideCardNumber(purshase.pagamento.número)}</span>
					</div>
					<div className={style['complete__infors']}>
						<table className={style['table']}>
							<thead className={style['table__header']}>
								<tr className={style['table__header__cols']}>
									<th scope="col" className={style['col']}>Item</th>
									<th scope="col" className={style['col']}>Quantidade</th>
								</tr>
							</thead>
							<tbody className={style['table__body']}>
								{productFilter.map((prod, id) => (
									<tr key={id} className={style['table__body__rows']}>
										<td className={style['row']}>
											<div className={style['product']}>
												<img src={prod.image} alt="" className={style['product__image']}></img>
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