import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import style from './ButtonQuantidade.module.scss';

interface IButtonQuantidade {
    quantidade: number,
    setQuantidade: React.Dispatch<React.SetStateAction<number>>
}

export function ButtonQuantidade( { quantidade, setQuantidade } : IButtonQuantidade ) {

	const aumentaQuantidade = () => {
		setQuantidade(quantidade++);
	};
    
	const diminuiQuantidade = () => {
		setQuantidade(quantidade > 0 ? quantidade-- : quantidade);
	};

	return (
		<div className={style['button-quantidade']}>
			{quantidade > 0 ? 
				<IoIosArrowBack size={14} onClick={diminuiQuantidade} className={style['button-quantidade__icon']}  /> 
				: 
				<p className={style['button-quantidade__icon-none']}></p>
			}
			<span className={style['quantidade']}>{quantidade}</span>
			<IoIosArrowForward size={14} onClick={aumentaQuantidade} className={style['button-quantidade__icon']} />
		</div>
	);
}