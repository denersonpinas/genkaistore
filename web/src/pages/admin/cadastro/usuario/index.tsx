import { Button } from 'components/button';
import style from './CadastroUsuario.module.scss';
import { Header } from 'components/header';

export function Cadastrousuario() {
	return(
		<section className={style['container']}>
			<div className={style['section-data']}>
				<Header text='Cadastre um novo usuario' title='Cadastro de usuario' />
				<div className={style['forms']}>
					<form action="" className={style['forms__form']}>
						<div className={style['forms__form__usuario']}>
							<div className={style['header']}>
								<h2 className={style['header__title']}>Informações do Produto</h2>
							</div>
							<div className={style['forms__form__container']}>
								<input type="text" className={style['forms__form__container__input']} placeholder='Nome' />
								<input type="text" className={style['forms__form__container__input']} placeholder='Sobrenome' />
							</div>
							<div className={style['forms__form__container']}>
								<input type="email" className={style['forms__form__container__input']} placeholder='Email' />
								<div className={style['image']}>
									<label htmlFor="image" className={style['image__label']}>Upload de Imagem</label>
									<input type="file" id='image' accept='image/*' className={style['image__input']} placeholder='Image' />
								</div>
							</div>
							<div className={style['forms__form__container']}>
								<input type="password" className={style['forms__form__container__input']} placeholder='Senha' />
								<input type="password" accept='image/*' className={style['forms__form__container__input']} placeholder='Repita a Senha' />
							</div>
						</div>
						<div className={style['forms__form__container']}>
							<Button label='Cancelar' color='yellow'/>
							<Button label='Salvar Novo Usuário'/>
						</div>					
					</form>
				</div>
			</div>
		</section>
	);
}