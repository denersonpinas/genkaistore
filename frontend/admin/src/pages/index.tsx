import { ISignInData } from '@/types/auth';
import { AuthContext } from '@/context/AuthContext';
import Link from 'next/link';

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { MdLogin } from 'react-icons/md';
import { useContext } from 'react';

export default function Login() {
  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data: ISignInData) {
    await signIn(data)
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
          <h2>Faça login em sua conta</h2>
          <p className="sub-title-2">Preencha seus dados para entrar</p>
        </div>
      </div>

      <div className="w-full sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(handleSignIn)}>
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
            <div className="flex items-center justify-between">
              <label htmlFor="password">Senha</label>
              <div className="text-sm">
                <Link href={'/forgotPassword'} className="font-semibold text-indigo-600 hover:text-indigo-500">Esqueceu a senha?</Link>
              </div>
            </div>
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

          <div className="flex min-h-full flex-col justify-center space-y-6">
            <button type="submit" className="btn-primary">
              <MdLogin size={16} />
              Login
            </button>
          </div>
        </form>

        <p className=" flex min-h-full flex-col justify-center space-y-6 mt-10 text-left text-sm text-gray-500 space-x-6">
          Ainda não tem uma conta?
          <Link href={'/register'} className="font-semibold leading-6 text-primary hover:text-red-500">Crie uma conta agora</Link>
        </p>
      </div>
    </div>
  )
}
