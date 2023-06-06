import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({})

export function CartContextProvider({ children }) {
    const localS = typeof window !== "undefined" ? window.localStorage : null

    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        if (cartProducts.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cartProducts))
        }
    }, [cartProducts])

    useEffect(() => {
        if (localS && localS.getItem('cart')) {
            setCartProducts(JSON.parse(localS.getItem('cart')))
        }
    }, [])

    function addProduct(productID) {
        setCartProducts(prev => [...prev, productID])
    }

    function removeProduct(productID) {
        setCartProducts(prev => {
            const position = prev.indexOf(productID)
            if (position !== -1) {
                return prev.filter((value, index) => index !== position)
            }
            return prev
        })
    }

    function removeAllProduct(productID) {
        setCartProducts(prev => {
            return prev.filter((value, index) => value !== productID)
        })
    }

    function clearCart() {
        setCartProducts([])
        localStorage.setItem('cart', JSON.stringify([]))
    }

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct, removeProduct, clearCart, removeAllProduct }}>
            {children}
        </CartContext.Provider>
    )
}