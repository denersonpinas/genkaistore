import stars from 'data/comments.json';

export function DescontPrice( price : number ): number {
	const descont = (price - ( price * .1 ));
	return Number(descont.toFixed(2));
}

export function FormatedPrice( price : number ) : string {
	return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

type IFiltersStars = typeof stars


export function FilterStars( stars : IFiltersStars ) : number {
	let contadorStars = 0;
	stars.map(iterator => (
		contadorStars += iterator.stars
	));
	return Number(Math.min(contadorStars / stars.length).toFixed(1));
}