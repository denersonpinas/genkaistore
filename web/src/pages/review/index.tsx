import { Label } from 'components/form/label';
import style from './Review.module.scss';
import commets from 'data/comments.json';
import { Input } from 'components/form/input/index';
import { useState } from 'react';
import { Star } from 'components/star';
import { Button } from 'components/button';
import { ApresentationProduct } from 'components/apresentationProduct';
import { useParams } from 'react-router-dom';

type ICommets = typeof commets[0]

export function Review() {
	const formInputs = [
		{
			'id': 'nameUser',
			'type': 'text',
			'placeholder': 'Digite seu nome...',
			'label': 'nome'
		},
		{
			'id': 'emailUser',
			'type': 'email',
			'placeholder': 'Digite seu e-mail...',
			'label': 'E-mail'
		},
		{
			'id': 'mensagemUser',
			'type': 'text',
			'placeholder': 'Digite sua avaliação...',
			'label': 'Mensagem'
		}
	];

	const [activeIndex, setActiveIndex] = useState<number>();
	const items: number[] = [...(new Array(5).keys() as any)];
	const { id } = useParams();

	const onClickStar = (id: number) => {
		setActiveIndex((oldState) => (oldState === id ? undefined : id));
	};


	return (
		<section className={style['section-review']}>
			<ApresentationProduct id={Number(id)} isButton={false} />
			<div className={style['review-product']}>
				<h3 className={style['review-product__title']}>ADD SEU REVIEW</h3>
				<form action="" className={style['review-product__form']}>
					{formInputs.map(form => (
						<div key={form.id}>
							<Label htmlfor={form.id} label={form.label} />
							<Input id={form.id} placeholder={form.placeholder} type={form.type} />
						</div>
					))}
					<div>
						<label htmlFor="" className={style['label']}>CLASSIFICAÇÃO</label>
						<div className={style['input-star']}>
							{items.map(id => (
								<Star onClick={() => onClickStar(id)} isActive={id <= activeIndex!} key={id} />
							))}
						</div>
					</div>
					<Button label='ENVIAR' />
				</form>
			</div>
		</section>
	);
}