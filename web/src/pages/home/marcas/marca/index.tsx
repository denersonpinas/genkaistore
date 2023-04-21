import imgMarcas from 'data/marca.json';

type IImgMarcas = typeof imgMarcas[0]

export function Marca(image : IImgMarcas){
	return(
		<a href="">
			<img src={`${image.photo}`} alt="" className='marca__image' />
		</a>
	);
}