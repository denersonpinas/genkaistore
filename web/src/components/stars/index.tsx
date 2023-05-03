import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import style from './Stars.module.scss';

interface IStars {
    starsNumber: number,
	color: 'red' | 'yellow'
}

export function Stars({starsNumber, color} : IStars) {


	function stars(item: number) {
		const stars = [];
		const activeStar = <AiFillStar fill={color === 'red' ? '#F3134E'  : '#FEBA59'} size={16} className={style['stars__star']} />;

		for (let i = 0; i < item; i++) {
			stars.push(activeStar);
		}

		for (let i = item; i < 5; i++) {
			stars.push(<AiOutlineStar fill={color === 'red' ? '#F3134E'  : '#FEBA59'} size={16} className={style.stars} />);
		}

		return <>{stars}</>;
	}

	return (
		<div className={style['stars']}>
			{stars(starsNumber)}
		</div>
	);
}