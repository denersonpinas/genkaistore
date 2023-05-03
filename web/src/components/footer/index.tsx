import { Link } from 'react-router-dom';
import style from './Footer.module.scss';
import { BsFacebook, BsFillTelephoneFill, BsWhatsapp } from 'react-icons/bs';

export function Footer() {
	return (
		<section className={style['section-footer']} id='footer'>
			<div className={style['section-footer__contact']}>
				<div>
					<h2 className={style['title']}>ATENDIMENTO</h2>
					<div className={style['atendiment']}>
						<div>
							<p className={style['paragraph']}><strong>Segunda a Sexta</strong></p>
							<p className={style['paragraph']}><strong>Das:</strong> 10h as 20h</p>
						</div>
						<div>
							<p className={style['paragraph']}><strong>Sábado e Domingo</strong></p>
							<p className={style['paragraph']}><strong>Das:</strong>10h as 23h</p>
						</div>
					</div>
					<div className={style['contact']}>
						<BsFillTelephoneFill size={16} className={style['contact__icon']} />
						<p className={style['paragraph']}>(00) 9 0000 - 0000</p>
					</div>
					<div className={style['contact']}>
						<BsFillTelephoneFill size={16} className={style['contact__icon']} />
						<p className={style['paragraph']}>(00) 9 0000 - 0000</p>
					</div>
				</div>
				<div>
					<h2 className={style['title']}>DADOS DA LOJA</h2>
					<div>
						<p className={style['paragraph']}><strong>Rua Seu Jorge 1051</strong></p>
						<p className={style['paragraph']}><strong>Bairro Vasco da Gama, 45829-074</strong></p>
						<p className={style['paragraph']}><strong>Eunápolis - BA</strong></p>
					</div>
					<div>
						<p className={style['paragraph']}><strong>GENKAI STORE</strong></p>
						<p className={style['paragraph']}>CNPJ: 000.000.00/0000-1</p>
					</div>
				</div>
				<div>
					<h2 className={style['title']}>INSTITUCIONAL</h2>
					<ul className={style['menu-footer']}>
						<li className={style['menu-footer__item']}><a href=""><strong>Fale Conosco</strong></a></li>
						<li className={style['menu-footer__item']}><a href=""><strong>Sobre Nós</strong></a></li>
						<li className={style['menu-footer__item']}><a href=""><strong>Politicas de Privacidade</strong></a></li>
						<li className={style['menu-footer__item']}><Link to={'/admin'}> <strong>Painel Administrativo</strong> </Link></li>
						
					</ul>
					<div className={style['social']}>
						<div>
							<a href="">
								<BsFacebook size={32} className={style['social__icon']} />
							</a>
						</div>
						<div>
							<a href="">
								<BsWhatsapp size={32} className={style['social__icon']} />
							</a>
						</div>
					</div>
				</div>
			</div>
			<hr className={style['section-footer__divi']}></hr>
			<p className={style['section-footer__paragraph']}>2023 ® Genkai Store - Todos os direitos reservados</p>
		</section>
	);
}