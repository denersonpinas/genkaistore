import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext({})

export function WishlistContextProvider({ children }) {
    const localS = typeof window !== "undefined" ? window.localStorage : null

    const [wishlistProducts, setWishlistProducts] = useState([])

    useEffect(() => {
        if (wishlistProducts.length > 0) {
            localStorage.setItem('wishlist', JSON.stringify(wishlistProducts))
        } else {
            localStorage.setItem('wishlist', JSON.stringify([]))
        }
    }, [wishlistProducts])

    useEffect(() => {
        if (localS && localS.getItem('wishlist')) {
            setWishlistProducts(JSON.parse(localS.getItem('wishlist')))
        }
    }, [])

    function addWishlist(productID) {
        if(wishlistProducts == []) {
            wishlistProducts.find(element => {
                if(element !== productID) {
                    setWishlistProducts(prev => [...prev, productID])
                }
            })
        } else {
            setWishlistProducts(prev => [...prev, productID])
        }
    }

    function removeWishlist(productID) {
        setWishlistProducts(prev => {
            const position = prev.indexOf(productID)
            if (position !== -1) {
                return prev.filter((value, index) => index !== position)
            }
            return prev
        })
    }

    function clearWishlist() {
        setWishlistProducts([])
        localStorage.setItem('wishlist', JSON.stringify([]))
    }

    return (
        <WishlistContext.Provider value={{ wishlistProducts, setWishlistProducts, addWishlist, removeWishlist, clearWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}