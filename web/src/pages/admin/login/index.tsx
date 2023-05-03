import { Form } from 'components/form/input';
import style from './Login.module.scss';
import { Header } from 'components/header';
import { Legend } from 'components/form/legend';
import { useState } from 'react';
import { ILogin } from 'types/interfaces';

export function Login() {

	
	const [dataLogin, setDataLogin] = useState<ILogin[]>([]);
	
	const formInputs = [
		{
			'id': 'nameLogin',
			'type': 'text',
			'placeholder': 'Digite seu nome',
			'label': 'Login'
		},
		{
			'id': 'passwordLogin',
			'type': 'password',
			'placeholder': 'Digite sua senha',
			'label': 'Senha'
		},
	];

	return(
		<section className={style['section-login']}>
			<div className={style['section-login__container']}>
				<Header title='Entrar' text='Preencha seus dados para entrar' />
				<Form formInputs={formInputs} label='ENTRAR' setDataLogin={setDataLogin}/>
				<Legend textInfor='Ainda não tem uma conta?  ' textLink='Crie uma conta agora' to='/nova-conta' />
			</div>
		</section>
	);
}