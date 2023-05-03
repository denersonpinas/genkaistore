import { Header } from 'components/header';
import style from './EsqueciSenha.module.scss';
import { Form } from 'components/form/input';
import { Legend } from 'components/form/legend';

export function EsqueciSenha() {
	const formInputs = [
		{
			'id': 'emailEsqueciSenha',
			'type': 'email',
			'placeholder': 'Digite seu e-mail',
			'label': 'E-mail'
		}
	];

	return (
		<section className={style['section-esqueci-senha']}>
			<div className={style['section-esqueci-senha__container']}>
				<Header title='Esqueci minha senha' text='Esqueci minha senha' />
				<Form formInputs={formInputs} label='CONFIRMAR E-MAIL' />
				<Legend textInfor='Já possui uma conta? ' textLink='Clique aqui' to='/login' />
			</div>
		</section>
	);
}