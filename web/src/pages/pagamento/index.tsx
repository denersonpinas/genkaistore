import { Header } from 'components/header';
import style from './Pagamento.module.scss';
import { Button } from 'components/button';
import { useNavigate } from 'react-router-dom';

export function Pagamento() {
    
	return (
		<section className={style['section-pagamento']}>
			<div className={style['section-pagamento__entrega']}>
				<Header text='' title='Endereço para entrega' />
				<input
					value={''}
					type={'number'}
					id={'cepEntrega'}
					placeholder={'CEP *'}
					className={style['input']} />
				<input
					value={''}
					type={'text'}
					id={'ruaEntrega'}
					placeholder={'RUA *'}
					className={style['input']} />
				<input
					value={''}
					type={'text'}
					id={'bairroEntrega'}
					placeholder={'BAIRRO *'}
					className={style['input']} />
				<div>
					<input
						value={''}
						type={'text'}
						id={'cidadeEntrega'}
						placeholder={'CIDADE *'}
						className={style['input']} />
					<input
						value={''}
						type={'text'}
						id={'ufEntrega'}
						placeholder={'UF *'}
						className={style['input']} />
					<input
						value={''}
						type={'number'}
						id={'numeroEntrega'}
						placeholder={'NÚMERO *'}
						className={style['input']} />
				</div>
				<input
					value={''}
					type={'text'}
					id={'complementoEntrega'}
					placeholder={'COMPLEMENTO'}
					className={style['input']} />
			</div>
			<div className={style['section-pagamento__frete']}>
				<div className="mainBox-conteudo-form-cadastro-entrega-cep-entrega-opcoes-box">
					<input type="radio" name="envio" id="sedex" value="62" data-cep="45826033" data-retirada="n" data-ponto-retirada="n" />
					<label htmlFor='sedex'>
						<div>
							<span>ECONÔMICO&nbsp; |&nbsp;R$ 54,65</span>
							<span className="prazo-medio">Médio: 7 dias úteis*</span>
						</div>
					</label>
				</div>
				<div className="mainBox-conteudo-form-cadastro-entrega-cep-entrega-opcoes-box">
					<input type="radio" name="envio" id="pac" value="62" data-cep="45826033" data-retirada="n" data-ponto-retirada="n" />
					<label htmlFor='pac'>
						<div>
							<span>ECONÔMICO&nbsp; |&nbsp;R$ 24,65</span>
							<span className="prazo-medio">Médio: 7 dias úteis*</span>
						</div>
					</label>
				</div>
			</div>
			<div className={style['section-pagamento__form-pagamento']}>
				<Header text='' title='Escolha a forma de pagamento' />
				<div className={style['section-pagamento__form-pagamento__cartão']}>
					<input
						value={''}
						type={'number'}
						id={'numeroCartao'}
						placeholder={'NÚMERO DO CARTÃO'}
						className={style['input']} />
					<input
						value={''}
						type={'text'}
						id={'nomeCartao'}
						placeholder={'NOME IMPRESSO '}
						className={style['input']} />
					<input
						value={''}
						type={'number'}
						id={'numeroCartao'}
						placeholder={'NÚMERO DO CARTÃO'}
						className={style['input']} />
					<input
						value={''}
						type={'text'}
						id={'cpfCartao'}
						placeholder={'CPF *'}
						className={style['input']} />
					<input
						value={''}
						type={'date'}
						id={'dateCartao'}
						placeholder={'VALIDADE DO CARTÃO *'}
						className={style['input']} />
					<input
						value={''}
						type={'number'}
						id={'codCartao'}
						placeholder={'CÓDIGO DE SEGURANÇA *'}
						className={style['input']} />
				</div>
			</div>
			<section className={style['section-pagamento__total']}>
				<div className={style['section-pagamento__total__content']}>
					<p className={style['paragraph']}>Total: <span className={style['price']}><strong>R$ 449,70</strong></span></p>
					<p className={style['paragraph']}>via Pix por R$ 440,70 com 2% de desconto ou em até 2x de <strong>R$ 224,85</strong> sem juros</p>
				</div>
				<div className={style['section-pagamento__total__purshase']}>
					<button className={style['section-pagamento__total__purshase__continue']} >CONTINUAR COMPRANDO</button>
					<Button label='FINALIZAR AQUISIÇÃO' />
				</div>
			</section>
		</section>
	);
}