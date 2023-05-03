import { Form } from 'components/form/input';
import style from './NovaConta.module.scss';
import { Header } from 'components/header';
import { Legend } from 'components/form/legend';

export function NovaConta() {
	const formInputs = [
		{
			'id': 'nameNovaConta',
			'type': 'text',
			'placeholder': 'Digite seu nome',
			'label': 'Nome'
		},
		{
			'id': 'lastnameNovaConta',
			'type': 'text',
			'placeholder': 'Digite seu sobrenome',
			'label': 'Sobrenome'
		},
		{
			'id': 'emailNovaConta',
			'type': 'email',
			'placeholder': 'Digite seu email',
			'label': 'E-mail'
		},
		{
			'id': 'passwordNovaConta',
			'type': 'password',
			'placeholder': 'Digite sua senha',
			'label': 'Senha'
		},
		{
			'id': 'repeatPasswordNovaConta',
			'type': 'password',
			'placeholder': 'Digite sua senha novamente',
			'label': 'Repita a Senha'
		},
	];

	return(
		<section className={style['section-cadastro']}>
			<div className={style['section-cadastro__container']}>
				<Header text='Não possui uma conta? Cadastre-se agora' title='Criar conta' />
				<Form formInputs={formInputs} label='CRIAR CONTA' />
				<Legend textInfor='Já possui uma conta? ' textLink='Clique aqui' to='/login' />
			</div>
		</section>
	);
}