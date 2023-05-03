import { Button } from 'components/button';
import style from './Form.module.scss';
import { Label } from './label';
import { Input } from './input/index';
import { useState } from 'react';
import { ILogin } from 'types/interfaces';

interface IForm {
    formInputs: {
        id: string;
        type: string;
        placeholder: string;
        label: string;
    }[]
	label: string,
	onClick?: () => void,
	setDataLogin?: React.Dispatch<React.SetStateAction<ILogin[]>>
}

export function Form({ formInputs, label, onClick, setDataLogin} : IForm) {

	const [loginValue, setLoginValue] = useState('');
	const [paswordValue, setPaswordValue] = useState('');

	const values = [loginValue, paswordValue];
	const sets = [setLoginValue, setPaswordValue];

	function handleFormSubmit( event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		
		
		if(!setDataLogin) return false;
		setDataLogin(
			[
				{
					loginValue,
					paswordValue
				}
			]
		);

		setLoginValue('');
		setPaswordValue('');
	}

	return (
		<form action="" className={style['form']} onSubmit={handleFormSubmit}>
			{formInputs.map((input, id) => (
				<div key={input.id} className={style['form__container']}>
					<Label htmlfor={input.id} label={input.label} />
					<Input value={values[id]} id={input.id} placeholder={input.placeholder} type={input.type} onChange={(event) => sets[id](event.target.value)} />
				</div>
			))}
			<Button onClick={onClick} label={label} />
		</form>
	);
}