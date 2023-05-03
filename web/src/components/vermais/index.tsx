import style from './Pagination.module.scss';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface IVerMais {
    text: string,
}

export function VerMais( {text} : IVerMais) {
	return(
		<div className={style['ver-mais']}>
			<a href="http://" target="_blank" rel="noopener noreferrer">
				<p>{text}<MdKeyboardArrowRight size={16}/></p>
			</a>
		</div>
	);
}