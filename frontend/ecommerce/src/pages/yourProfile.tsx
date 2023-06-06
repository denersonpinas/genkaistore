import { Aside } from "@/components/aside";
import { Layout } from "@/components/layout";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useState } from "react";

interface IClientForm {
    _id?: String,
    name?: String | undefined,
    sobrenome?: String | undefined,
    email?: String | undefined,
    whatsapp?: String | undefined
}


export default function YourProfile({
    _id,
    name: existingName,
    sobrenome: existingsobrenome,
    email: existingemail,
    whatsapp: existingwhatsapp
}: IClientForm) {
    const [name, setName] = useState(existingName || '')
    const [sobrenome, setSobrenome] = useState(existingsobrenome || '')
    const [email, setEmail] = useState(existingemail || '')
    const [whatsapp, setWhatsapp] = useState(existingwhatsapp || '')

    const router = useRouter()

    async function saveClient(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()


        const dados = { name, sobrenome, email, whatsapp }

        if (_id) {
            // update
            // await axios.put('/api/products', { ...dados, _id })
        } else {
            // create
            // await axios.post('/api/products', dados)
        }
        goBack()

    }

    function goBack() {
        router.push('/')
    }

    return (
        <Layout>
            <main className="flex flex-col gap-4 py-16 px-4 sm:px-8 lg:flex-row lg:px-[166px]">
                <Aside/>
                <section className="w-full lg:p-4">
                    <header className="w-full flex flex-col gap-2 p-4">
                        <h2>Seu Perfil</h2>
                        <p className="sub-title-1">Edite suas informações</p>
                    </header>
                    <form onSubmit={saveClient} className="w-full bg-white shadow-lg flex flex-col justify-start gap-8 p-4">
                        <div className="flex flex-col gap-2">
                            <h3>Informações do Básicas</h3>
                            <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
                                <div className=" w-full flex flex-col gap-2">
                                    <label>Nome:</label>
                                    <input
                                        value={name}
                                        onChange={ev => setName(ev.target.value)}
                                        type="text"
                                        placeholder="Digite seu nome..." />
                                </div>
                                <div className=" w-full flex flex-col gap-2">
                                    <label>Sobrenome:</label>
                                    <input
                                        type="text"
                                        placeholder="Digite seu sobrenome..."
                                        value={sobrenome}
                                        onChange={ev => setSobrenome(ev.target.value)} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
                                <div className=" w-full flex flex-col gap-2">
                                    <label>E-mail:</label>
                                    <input
                                        value={email}
                                        onChange={ev => setEmail(ev.target.value)}
                                        type="email"
                                        placeholder="Digite seu e-mail..." />
                                </div>
                                <div className=" w-full flex flex-col gap-2">
                                    <label>Whatsapp:</label>
                                    <input
                                        type="tel"
                                        placeholder="Digite seu whatsapp..."
                                        value={whatsapp}
                                        onChange={ev => setWhatsapp(ev.target.value)} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
                                <div className=" w-full flex flex-col gap-2">
                                    <label>Senha:</label>
                                    <Link href={'reset'}>Clique aqui para trocar a senha</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3>Endereço</h3>
                            <span className="sub-title">Clique aqui e cadastre um endereço</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3>Forma de Pagamento</h3>
                            <span className="sub-title">Clique aqui e cadastre uma forma de pagamento</span>
                        </div>
                        <div className="w-full flex flex-col-reverse justify-around gap-2 sm:flex-row">
                            <span className="btn-cancel" onClick={goBack} >CANCELAR</span>
                            <button type="submit" className="btn-primary">SALVAR DADOS</button>
                        </div>
                    </form>
                </section>
            </main>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { 'genkaistore.token': token } = parseCookies(context)
  
    if(!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
  
    return {
        props: {}
    }
  }