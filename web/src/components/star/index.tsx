import { AiFillStar } from 'react-icons/ai';
import style from './Star.module.scss';

interface IProps {
    isActive : boolean,
    onClick?: () => void
}

export const Star = ({isActive, onClick} : IProps) => {
	const yellow = '#FEBA59';
	const grey = '#ccc';

	return(
		<AiFillStar 
			size={16} 
			fill={isActive ? yellow : grey } 
			onClick={onClick}
			className={style['btn-star']}
		/>
	);
};