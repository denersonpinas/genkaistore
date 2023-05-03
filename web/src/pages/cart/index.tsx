import { MenuInternal } from 'components/menuInternal';
import style from './Cart.module.scss';
import { Filter } from 'components/filter';
import { Itens } from './itens';
import product from 'data/whistlist.json';
import { Button } from 'components/button';
import { IoMdAlert } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Cart() {
	const [cep, setCep] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const formattedCep = cep.replace(/[^0-9]/g, '');

		if (formattedCep.length === 8) {
			setCep(`${formattedCep.substring(0, 5)}-${formattedCep.substring(5)}`);
		} else {
			setCep(formattedCep);
		}
	}, [cep]);

	const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCep(event.target.value);
	};


	return (
		<section className={style['section-cart']}>
			<MenuInternal />
			<section className={style['section-content']}>
				<Filter pageName='CARRINHO' />
				<section className={style['section-content__products']}>
					{product.map((item, id) => (
						<Itens key={id} {...item} />
					))}
				</section>
				<section className={style['section-delivery']}>
					<form className={style['form-frete']}>
						<label htmlFor="frete" className={style['form-frete__label']}>Calcule o frete:</label>
						<input 
							type="text" 
							id='frete' 
							value={cep} 
							onChange={handleCepChange}
							maxLength={9}
							className={style['form-frete__input']} />
						<span className={style['form-frete__infor']}>
							<IoMdAlert size={16} />
							Não sei meu CEP
						</span>
					</form>
				</section>
				<section className={style['section-finished']}>
					<div className={style['section-finished__content']}>
						<p className={style['paragraph']}>Total: <span className={style['price']}><strong>R$ 449,70</strong></span></p>
						<p className={style['paragraph']}>via Pix por R$ 440,70 com 2% de desconto ou em até 2x de <strong>R$ 224,85</strong> sem juros</p>
					</div>
					<div className={style['section-finished__purshase']}>
						<button className={style['section-finished__purshase__continue']} onClick={() => navigate(-1)}>CONTINUAR COMPRANDO</button>
						<Button label='FINALIZAR AQUISIÇÃO' />
					</div>
				</section>
			</section>
		</section>
	);
}