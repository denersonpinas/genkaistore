import { AiFillPhone, AiOutlineWhatsApp } from "react-icons/ai";
import { SlSocialInstagram } from "react-icons/sl";

interface IFooter {
    isHome: Boolean
}

export function Footer({isHome} : IFooter) {
    return (
        <footer className={(isHome ? 'bg-secundary' : 'bg-transparent') + " flex flex-col justify-center items-center gap-4 px-4 sm:px-8 lg:px-[166px] py-8 bg-[url('/assets/footer-banner.png')] bg-no-repeat bg-cover bg-origin-border"} id="contato">
            <div className="w-full flex flex-col gap-16 items-start sm:flex-row sm:flex-wrap lg:justify-between">
                <div className="flex flex-col gap-8">
                    <h3 className="text-white uppercase">atendimento</h3>
                    <div className="flex flex-col gap-2">
                        <p className="text-white sub-title">
                            <strong>Segunda e Sexta</strong>
                        </p>
                        <p className="text-white">
                            <strong>Das:</strong> 10h as 20h
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-white sub-title">
                            <strong>Sábado e Domingo</strong>
                        </p>
                        <p className="text-white">
                            <strong>Das:</strong> 10h as 23h
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-4">
                            <AiFillPhone size={25} className="text-white" />
                            <p className="text-white">
                                (00) 9 0000 - 0000
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <AiFillPhone size={25} className="text-white" />
                            <p className="text-white">
                                (00) 9 0000 - 0000
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <h3 className="text-white uppercase">dados da loja</h3>
                    <div className="flex flex-col gap-2">
                        <p className="text-white sub-title">
                            <strong>Rua Seu Jorge 1051</strong>
                        </p>
                        <p className="text-white sub-title">
                            <strong>Bairro Vasco da Gama, 45829-074</strong>
                        </p>
                        <p className="text-white sub-title">
                            <strong>Eunápolis - BA</strong>
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-white sub-title">
                            <strong>GENKAI STORE</strong>
                        </p>
                        <p className="text-white sub-title">
                            CNPJ: 000.000.00/0000-1
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <h3 className="text-white uppercase">Institucional</h3>
                    <div className="flex flex-col gap-2">
                        <p className="text-white sub-title">
                            <strong>Fale Conosco</strong>
                        </p>
                        <p className="text-white sub-title">
                            <strong>Sobre Nós</strong>
                        </p>
                        <p className="text-white sub-title">
                            <strong>Politicas de Privacidade</strong>
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="text-red bg-white rounded-full w-10 h-10 flex justify-center items-center">
                            <AiOutlineWhatsApp size={25} />
                        </button>
                        <button className="text-red bg-white rounded-full w-10 h-10 flex justify-center items-center">
                            <SlSocialInstagram size={25} />
                        </button>
                    </div>
                </div>
            </div>
            <hr className="w-full border-t border-personWhite opacity-10" />
            <p className="sub-title text-white p-4 text-center">
                2023 ® Genkai Store - Todos os direitos reservados
            </p>
        </footer>
    )
}