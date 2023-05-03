import { ILogin } from 'types/interfaces';
import style from './Input.module.scss';

interface IInput {
    type: string
    placeholder: string
    id: string
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export function Input({type, placeholder, id, value, onChange}: IInput) {
	return(
		<input 
			value={value} 
			type={type} 
			id={id} 
			placeholder={placeholder} 
			className={style['input']}
			onChange={onChange} />
	);
}