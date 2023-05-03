import imgMarcas from 'data/marca.json';
import { Link } from 'react-router-dom';

type IImgMarcas = typeof imgMarcas[0]

export function Marca(image : IImgMarcas){
	return(
		<Link to="/store">
			<img src={`${image.photo}`} alt={image.name} />
		</Link>
	);
}