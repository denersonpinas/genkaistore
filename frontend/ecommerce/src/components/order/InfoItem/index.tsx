interface IInforItem {
    title?: string
    value: string
	classEdited?: string
}

export function InfoItem({ title, value, classEdited } : IInforItem) {

	return (
		<div className={(classEdited) + ' flex items-start justify-start gap-4'}>
			{title ? <span className='sub-title uppercase'><strong>{title}</strong></span> : ''}
			<span className='sub-title'>{value}</span>
		</div>
	);
}