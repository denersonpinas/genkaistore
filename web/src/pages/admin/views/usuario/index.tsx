import { HiOutlinePlusSm } from 'react-icons/hi';
import style from './ViewUsuario.module.scss';
import { Filter } from './filter';
import { Table } from './table';
import { Link } from 'react-router-dom';
import { Header } from 'components/header';

export function ViewUsuario() {
	return (
		<section className={style['container']}>
			<Filter />
			<div className={style['section-data']}>
				<div className={style['header']}>
					<Header text='Lista dos usuarios cadastrados no sistema' title='Usuarios Cadastrados' />
					<Link to={'/admin/cadastro-produto'}>
						<button className={style['header__btn']}>
							<HiOutlinePlusSm size={25} />
                            NOVO USUÁRIO
						</button>
					</Link>
				</div>
				<div className={style['tables']}>
					<Table />
				</div>
			</div>
		</section>
	);
}