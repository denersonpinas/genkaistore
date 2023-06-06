import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/button/indext";
import { Layout } from "@/components/layout";
import { NewProduct } from "@/components/newProduct";
import { CartContext } from "@/context/CartContext";
import { WishlistContext } from "@/context/WishlistContext";
import { DescontPrice, FormatedPrice } from "@/functions/utils";
import axios from "axios";
import Router from "next/router";
import { useContext, useEffect, useState } from "react";

export default function WishlistPage() {
    const {wishlistProducts, clearWishlist} = useContext(WishlistContext)
    const {addProduct} = useContext(CartContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (wishlistProducts.length > 0) {
            axios.post('/api/wishlist', { ids: wishlistProducts })
            .then(response => {
                    setProducts(response.data)
                })
        } else {
            setProducts([])
        }
        
    }, [wishlistProducts])

    function totalWishlist() : number {
		let soma = 0;
		products.map(item => {
			soma += parseInt(item.preco);
		});
		return DescontPrice(soma);
	}

    function aquisition() {
        wishlistProducts.map(wish => addProduct(wish))
        clearWishlist()
        Router.push('/cart')
    }

    return (
        <Layout>
            <main className="flex flex-col items-start justify-start gap-4 py-16 px-4 sm:px-8 lg:px-[166px]">
                <header className='flex flex-col gap-16 pb-8'>
                    <Breadcrumb origim={'home'} current={'lista de desejos'} linkCurrent={'/wishlist'} />
                    <div className='flex items-center justify-between'>
                        <h1 className='uppercase'>lista de desejos</h1>
                    </div>
                </header>
                <section className="flex flex-wrap py-16 gap-8 md:gap-[20%] 2xl:gap-[6.6%]">
                    {products.map(prod => (
                        <NewProduct key={prod._id} newProducts={prod} />
                    ))}
                </section>
                <div className='w-[499px] h-[74px] flex items-center justify-between self-end p-4 bg-white shadow-md rounded-md'>
					<p className='sub-title'>Total ({products.length} itens) {FormatedPrice(totalWishlist())}</p>
					<Button classname="btn-primary" label='ADIQUIRIR' onClick={aquisition}/>
				</div>
            </main>
        </Layout>
    )
}