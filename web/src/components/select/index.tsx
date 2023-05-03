import style from './Select.module.scss';

interface ISelect {
    options: {
        id: number;
        option: string;
        value: string;
    }[]
}

export function Select( { options } : ISelect ) {
	return (
		<select name="order" id="order" className={style['order-input']}>
			{options.map(option => (
				<option key={option.id} value={option.value}>{option.option}</option>
			))}
		</select>
	);
}