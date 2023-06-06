import { Layout } from "@/components/layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OrdersPage() {
    const columns = [
        {
            'label': 'ID',
            'id': 1
        }, {
            'label': 'DADOS DO CLIENTE',
            'id': 2
        }, {
            'label': 'DATA',
            'id': 3
        }, {
            'label': 'PRODUTOS',
            'id': 4
        }, {
            'label': 'PAGO',
            'id': 5
        }
    ];

    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get('/api/order')
            .then(response => {
                setOrders(response.data)
            })
    }, [])

    return (
        <Layout>
            <section className="w-full p-4 flex flex-col gap-8">
                <header className="w-full flex flex-col justify-center items-start gap-4 sm:flex-row sm:justify-between sm:items-center">
                    <div className="flex flex-col gap-2">
                        <h2>Compras</h2>
                        <p className="sub-title-1">Listar as compras cadastradas no sistema</p>
                    </div>
                </header>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-personBlack">
                            <tr>
                                {columns.map((col, id) => (
                                    <th key={id} className={'px-6 py-3 text-white text-left uppercase tracking-wider'}>{col.label}</th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-300">
                            {orders.map((order, id) => (
                                <tr key={id} className={id % 2 == 0 ? 'bg-white' : 'bg-gray-300'}>
                                    <td className={'px-6 py-4 text-sm whitespace-nowrap'}>{id + 1}</td>
                                    <td className={'px-6 py-4 text-sm whitespace-nowrap'}>
                                        {order.name}  {order.email} <br />
                                        {order.city}  {order.cep} <br />
                                        {order.country} <br />
                                        {order.address}
                                    </td>
                                    <td className={'px-6 py-4 text-sm whitespace-nowrap'}>
                                        {(new Date(order.createdAt)).toLocaleDateString()}
                                    </td>
                                    <td className={'px-6 py-4 text-sm whitespace-nowrap'}>
                                        {order.line_items.map(itens => (
                                            <div>
                                                {itens.price_data?.product_data.name} x {itens.quantity} <br />
                                            </div>
                                        ))}
                                    </td>
                                    <td className={(order.paid ? 'text-green' : 'text-red') + ' px-6 py-4 text-sm whitespace-nowrap'}>
                                        {order.paid ? 'SIM' : 'NÃO'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    )
}