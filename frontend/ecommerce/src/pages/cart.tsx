import { CartProduct } from "@/components/cartProduct";
import { Layout } from "@/components/layout";
import { OrderSuccess } from "@/components/orderSuccess";
import { CartContext } from "@/context/CartContext";
import { DescontPrice, FormatedPrice } from "@/functions/utils";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdKeyboardArrowRight, MdMoodBad } from "react-icons/md";

interface ICart {
    name: String
    email: String
    city: String
    cep:    String
    address: String
    numberAddress: String
    country: String
    products: String[]
}

export default function Cart() {
    const { cartProducts, clearCart } = useContext(CartContext)
    const [products, setProducts] = useState([])
    const [isSuccess, setIsSuccess] = useState(false)
    const { register, handleSubmit } = useForm()

    
    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', { ids: cartProducts })
            .then(response => {
                    setProducts(response.data)
                })
        } else {
            setProducts([])
        }
        
    }, [cartProducts])

    useEffect(() => {
        if(window?.location.href.includes('success')) {
            clearCart()
            setIsSuccess(true)
        }
    }, [])
    
    let total = 0
    for (const productId of cartProducts) {
        const price = products.find(preco => preco._id === productId)?.preco || 0
        total += price
    }
    
    async function handAddress(data : ICart) {
        const response = await axios.post('/api/checkout', data)
        if (response.data.url) {
            window.location = response.data.url
        }
    }

    if(isSuccess) {
        return <OrderSuccess/>
    }

    return (
        <Layout>
            <main className="flex flex-col items-start justify-start gap-4 py-16 px-4 sm:px-8 lg:px-[166px]">
                <header className='flex flex-col gap-16 pb-8'>
                    <div className='flex justify-start items-center'>
                        <Link href={'/'}><span className='uppercase sub-title font-bold hover:text-red cursor-pointer'>HOME</span></Link>
                        <MdKeyboardArrowRight size={16} />
                        <Link href={'/cart'}><span className='uppercase sub-title font-bold hover:text-red cursor-pointer'>Carrinho</span></Link>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h1 className='uppercase'>Carrinho</h1>
                    </div>
                </header>
                <section className='w-full flex flex-col gap-8 xl:gap-[5%] xl:flex-row'>
                    <section className='w-full flex flex-col justify-start items-start gap-16 xl:w-3/5'>
                        {cartProducts?.length === 0 && (
                            <section className="w-full h-[189px] flex items-center justify-between p-4 shadow-md rounded-md bg-white">
                                <h1 className="flex items-center gap-8">Seu carrinho está vazio <MdMoodBad size={25} /></h1>
                            </section>
                        )}
                        {products?.map(cart => (
                            <CartProduct key={cart._id} itemProduct={cart} />
                        ))}
                        {cartProducts?.length > 0 && (
                            <div className='w-full h-[90px] flex items-center justify-between p-4 shadow-md rounded-md bg-white'>
                                <h3 className='w-full flex justify-between sub-title font-bold text-personBlack'>
                                    <span>Total: </span>
                                    {DescontPrice(total)}
                                </h3>
                            </div>
                        )}

                    </section>
                    <aside className="w-full flex flex-col h-fit bg-white shadow-md p-4 xl:w-[30%]">
                        <h3>Informações do Pedido</h3>
                        {cartProducts?.length > 0 && (
                            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(handAddress)}>
                                <div>
                                    <label htmlFor="name">Nome</label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            {...register('name')}
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="Digite seu nome..." />
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
                                <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
                                    <div className=" w-full flex flex-col gap-2">
                                        <label htmlFor="city">Cidade</label>
                                        <div className="mt-2">
                                            <input
                                                id="city"
                                                {...register('city')}
                                                name="city"
                                                type="text"
                                                required
                                                placeholder="Digite sua cidade..." />
                                        </div>
                                    </div>
                                    <div className=" w-full flex flex-col gap-2">
                                        <label htmlFor="cep">CEP</label>
                                        <div className="mt-2">
                                            <input
                                                id="cep"
                                                {...register('cep')}
                                                name="cep"
                                                type="text"
                                                required
                                                placeholder="Digite seu cep..." />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
                                    <div className=" w-full flex flex-col gap-2">
                                        <label htmlFor="address">Rua</label>
                                        <div className="mt-2">
                                            <input
                                                id="address"
                                                {...register('address')}
                                                name="address"
                                                type="text"
                                                required
                                                placeholder="Digite sua rua..." />
                                        </div>
                                    </div>
                                    <div className=" w-full flex flex-col gap-2">
                                        <label htmlFor="number">N°</label>
                                        <div className="mt-2">
                                            <input
                                                id="number"
                                                {...register('number')}
                                                name="number"
                                                type="number"
                                                required
                                                placeholder="N° da casa..." />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="country">Bairro</label>
                                    <div className="mt-2">
                                        <input
                                            id="country"
                                            {...register('country')}
                                            name="country"
                                            type="text"
                                            required
                                            placeholder="Digite seu bairro..." />
                                    </div>
                                </div>
                                <input 
                                    type="hidden" 
                                    value={cartProducts.join(',')}
                                    {...register('products')}
                                    name="products"
                                    />
                                <div className="flex min-h-full flex-col justify-center space-y-6">
                                    <button type="submit" className="btn-primary">
                                        finalizar aquisição
                                    </button>
                                </div>
                            </form>
                        )}
                    </aside>
                </section>
            </main>
        </Layout>
    )
}