import { BiHappyHeartEyes } from "react-icons/bi";
import { Layout } from "../layout";
import Router from "next/router";

export function OrderSuccess() {

    return (
        <Layout>
            <section className="flex flex-col items-start justify-start gap-4 py-16 px-4 sm:px-8 lg:px-[166px]">
                <section className="w-full h-[189px] flex flex-col items-center justify-center gap-4 p-4 shadow-md rounded-md bg-white">
                    <h1 className="flex items-center gap-8">Parabéns, Sua compra foi efetuada com sucesso! <BiHappyHeartEyes size={25} /></h1>
                    <p className="sub-title">Nós lhe enviaremos um e-mail quando seu pedido for enviado</p>
                    <button className="btn-primary" onClick={() => Router.push('/')}>Voltar para a Home</button>
                </section>
            </section>
        </Layout>
    )
}