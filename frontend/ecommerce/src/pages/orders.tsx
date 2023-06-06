import { Breadcrumb } from "@/components/breadcrumb";
import { Layout } from "@/components/layout";
import { Order } from "@/components/order";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Orders() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get('/api/order')
            .then(response => {
                setOrders(response.data)
            })
    }, [])

    return (
        <Layout>
            <main className="flex flex-col items-start justify-start gap-4 py-16 px-4 sm:px-8 lg:px-[166px]">
                <header className='flex flex-col gap-16 pb-8'>
                    <Breadcrumb origim={'home'} current={'minhas compras'} linkCurrent={'/orders'} />
                    <div className='flex items-center justify-between'>
                        <h1 className='uppercase'>Minhas Compras</h1>
                    </div>
                </header>
                <section className='w-full flex flex-col justify-start items-start gap-16'>
                    {orders.map((item, id) => (
                        <Order order={item} key={id} />
                    ))}
                </section>
            </main>
        </Layout>
    );
}