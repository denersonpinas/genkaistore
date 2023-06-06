import { AuthProvider } from '@/context/AuthContext'
import { CartContextProvider } from '@/context/CartContext'
import { WishlistContextProvider } from '@/context/WishlistContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CartContextProvider>
      <WishlistContextProvider>
        <Component {...pageProps} />
      </WishlistContextProvider>
      </CartContextProvider>
    </AuthProvider>
  )
}
