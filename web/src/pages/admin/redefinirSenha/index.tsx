import { Header } from 'components/header';
import style from './RedefinirSenha.module.scss';
import { Form } from 'components/form/input';
import { Legend } from 'components/form/legend';

export function RedefinirSenha() {
	const formInputs = [
		{
			'id': 'passwordRedefinirSenha',
			'type': 'password',
			'placeholder': 'Digite sua nova senha',
			'label': 'Senha'
		},
		{
			'id': 'repeatPasswordRedefinirSenha',
			'type': 'password',
			'placeholder': 'Repita sua nova senha',
			'label': 'Repita a Senha'
		},
	];

	return (
		<section className={style['section-redefinir-senha']}>
			<div className={style['section-redefinir-senha__container']}>
				<Header title='Redefinir senha' text='Defina sua nova senha' />
				<Form formInputs={formInputs} label='REDEFINIR SENHA' />
				<Legend textInfor='Já possui uma conta? ' textLink='Clique aqui' to='/login' />
			</div>
		</section>
	);
}