import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { BsCheck2All } from 'react-icons/bs'

interface IResetPassword {
    password: String,
    passwordConfirmed: String
}

export default function ResetPassword() {
    const { register, handleSubmit } = useForm()

    async function handleResetPassword(data: IResetPassword) {
        // console.log(data)
    }

    return (
        <div className="flex min-h-screen flex-col justify-center items-center gap-10 px-6 py-12 lg:px-8">
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
                    <h2>Esqueci minha senha</h2>
                    <p className="sub-title-2">Esqueci minha senha</p>
                </div>
            </div>

            <div className="w-full sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(handleResetPassword)}>
                    <div>
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
                    </div>
                    <div>
                        <label htmlFor="repeatPassword">Confirmar Senha</label>
                        <div className="mt-2">
                            <input
                                id="repeatPassword"
                                {...register('repeatPassword')}
                                name="repeatPassword"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder="Digite a senha novamente..." />
                        </div>
                    </div>
                    <div className="flex min-h-full flex-col justify-center space-y-6">
                        <button type="submit" className="btn-primary">
                            <BsCheck2All size={16} />
                            Redefinir
                        </button>
                    </div>
                </form>

                <p className=" flex min-h-full flex-col justify-center space-y-6 mt-10 text-left text-sm text-gray-500 space-x-6">
                    Já possui uma conta?
                    <Link href={'/'} className="font-semibold leading-6 text-primary hover:text-red-500">Clique aqui!</Link>
                </p>
            </div>
        </div>
    )
}
