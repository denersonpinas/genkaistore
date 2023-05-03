import { Column } from './column';
import style from './Table.module.scss';
import rows from './rows.json';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';

export function Table() {
	const columns = [
		{
			'label': 'ID',
			'id': 1
		}, {
			'label': 'NOME',
			'id': 2
		}, {
			'label': 'VALOR',
			'id': 3
		}, {
			'label': 'QUANTIDADE',
			'id': 4
		}, {
			'label': 'DATA',
			'id': 5
		}, {
			'label': 'AÇÕES',
			'id': 6
		}
	];

	return (
		<table className={style['table']}>
			<thead>
				<tr className={style['table__columns']}>
					{columns.map((column, id) => (
						<Column label={column.label} key={id} />
					))}
				</tr>
			</thead>

			<tbody>
				{rows.map((row, id) => (
					<tr key={id} className={style['rows']}>
						<td className={style['rows__row']}>{row.id}</td>
						<td className={style['rows__row']}>{row.nome}</td>
						<td className={style['rows__row']}>{row.valor}</td>
						<td className={style['rows__row']}>{row.quantidade}</td>
						<td className={style['rows__row']}>{row.data}</td>
						<td className={style['rows__row']}>
							<div className={style['rows__row__icon--trash']}>
								<BsFillTrashFill size={16}/>
							</div>
							<div className={style['rows__row__icon--edit']}>
								<AiFillEdit size={16} />
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}