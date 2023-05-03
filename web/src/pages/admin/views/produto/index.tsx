import { HiOutlinePlusSm } from 'react-icons/hi';
import style from './ViewProduto.module.scss';
import { Table } from './table';
import { Link } from 'react-router-dom';
import { Filter } from 'components/admin/filter';
import { Header } from 'components/header';

export function ViewProduto() {
	return(
		<section className={style['container']}>
			<Filter />
			<div className={style['section-data']}>
				<div className={style['header']}>
					<Header text='Lista os produtos cadastrados no sistema' title='Produtos Cadastrados'/>
					<Link to={'/admin/cadastro-produto'}>
						<button className={style['header__btn']}>
							<HiOutlinePlusSm size={25} />
							NOVO PRODUTO
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