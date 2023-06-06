interface IDetailsProduct {
    title: string;
    information: string;
  }

export function DetailsProduct( { title, information } : IDetailsProduct ) {
	return (
		<div className='w-full flex items-center justify-between py-4'>
			<span className='sub-title font-bold uppercase'>{title}</span>
			<span className='sub-title uppercase'>{information}</span>
		</div>
	);
}