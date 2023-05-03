import { Link } from 'react-router-dom';
import style from './ImageComponet.module.scss';

interface IImageComponet {
    imagesData: {
        image: string,
        label: string,
        to: string
    }[]
}

export function ImageComponet({ imagesData } : IImageComponet) {
	return (
		<div className={style['section-image']}>
			{imagesData.map(image => (
				<Link className={style['section-image__link']} key={image.image} to={image.to}>
					<img src={image.image} alt={image.to} className={style['section-image__link__image']} />
				</Link>
			))}
		</div>
	);
}