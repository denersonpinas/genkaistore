import { IUserRegister } from "@/types/auth";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { MdAppRegistration } from 'react-icons/md'
import { Layout } from "@/components/layout";
import { api } from "@/service/api";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";

export default function Register() {
    const { register, handleSubmit } = useForm()
    const { registerIn } = useContext(AuthContext)

    async function handRegister(data: IUserRegister) {
        // const { login, senha } = data
        registerIn(data)
        // const response = await axios.post(
        //     'http://localhost:8022/usuario/registerUser',
        //     { 
        //             login:"João", 
        //             senha:"testando"
        //     })
        // console.log(response.data)
    }

    return (
        <Layout>
            <section className="flex justify-center items-center py-12 px-4">
                <div className="flex bg-white flex-col justify-center items-center gap-10 px-6 py-12 rounded-md shadow-md w-full lg:w-auto lg:px-8">
                    <div className="w-full sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-4 justify-center items-center">
                        <Image
                            src={'/assets/logo-genkai.png'}
                            alt='Logo Genkai Store'
                            className='h-[50px] w-[97px] aspect-auto'
                            width={97}
                            height={50}
                            priority
                        />
                        <div className="w-full flex flex-col gap-2 justify-start">
                            <h2>Criar conta</h2>
                            <p className="sub-title-2">Não possui uma conta? Cadastre-se agora</p>
                        </div>
                    </div>

                    <div className="w-full sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(handRegister)}>
                            <div className="lg:w-[384px]">
                                <label htmlFor="name">Nome</label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        {...register('name')}
                                        name="name"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="Digite seu nome..." />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lastName">Sobrenome</label>
                                <div className="mt-2">
                                    <input
                                        id="lastName"
                                        {...register('lastName')}
                                        name="lastName"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="Digite seu sobrenome..." />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        {...register('email')}
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        placeholder="Digite seu e-mail..." />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="senha">Senha</label>
                                <div className="mt-2">
                                    <input
                                        id="senha"
                                        {...register('senha')}
                                        name="senha"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        placeholder="Digite sua senha..." />
                                </div>
                            </div>
                            {/* <div>
                                <label htmlFor="password">Senha</label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        {...register('password')}
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        placeholder="Digite sua senha..." />
                                </div>
                            </div> */}

                            <div className="flex min-h-full flex-col justify-center space-y-6">
                                <button type="submit" className="btn-primary">
                                    <MdAppRegistration size={16} />
                                    Cadastrar
                                </button>
                            </div>
                        </form>

                        <p className=" flex min-h-full flex-col justify-center space-y-6 mt-10 text-left text-sm text-gray-500 space-x-6">
                            Já possui uma conta?
                            <Link href={'/login'} className="font-semibold leading-6 text-primary hover:text-red-500">Clique aqui!</Link>
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}