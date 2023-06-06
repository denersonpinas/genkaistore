
import { api } from "@/service/api"
import { recoverUserInformation, signInRequest } from "@/service/auth"
import { IRegisterInData, ISignInData, IUser } from "@/types/auth"
import axios from "axios"
import Router from "next/router"
import { parseCookies, setCookie } from "nookies"
import { createContext, useEffect, useState } from "react"

interface IAuthContext {
    isAuthenticated: Boolean,
    user: IUser,
    signIn: (data: ISignInData) => Promise<void>
    registerIn: (data: IRegisterInData) => Promise<void>
}

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({children}) {
    const [user, setUser] = useState<IUser | null>(null)

    const isAuthenticated = !!user

    useEffect(() => {
        const { 'genkaistore.token' : token } = parseCookies()

        if(token) {
            recoverUserInformation(token)
                .then(response => setUser(response.user))
        }
    }, [])

    async function signIn({ email, password } : ISignInData) {
        // Aqui eu faria a chamada para api (backend) com o fecth do axios

        // simulação
        const { token, user } = await signInRequest({ email, password })
        setCookie(undefined, 'genkaistore.token', token, {
            maxAge: 60 * 60 * 1 //1 hora
        })
        
        setUser(user)
        Router.push('/')
    }

    async function registerIn(data : IRegisterInData) {
        // Aqui eu faria a chamada para api (backend) com o fecth do axios

        const response = await api.post('/usuario/registerUser', data)
        
        Router.push('/')
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, registerIn }}>
            {children}
        </AuthContext.Provider>
    )
}