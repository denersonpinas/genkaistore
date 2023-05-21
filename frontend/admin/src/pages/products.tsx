import { Layout } from "@/components/layout";
import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from 'react-icons/bs';

interface IProduct {
    name: String | '',
    preco: Number | null,
    quantidade: String | '',
    descricao: String | '',
    marca: String | '',
    categoria: String | '',
    dimenssao: String | '',
    unidadeMedida: String | '',
    material: String | '',
    peso: Number | null,
    data: String | '',
    hora: String | '',
    images: String[] | ''
}

export default function Products() {

    const columns = [
        {
            'label': 'ID',
            'id': 1
        }, {
            'label': 'NOME',
            'id': 2
        }, {
            'label': 'VALOR',
            'id': 3
        }, {
            'label': 'QUANTIDADE',
            'id': 4
        }, {
            'label': 'DATA',
            'id': 5
        }, {
            'label': 'AÇÕES',
            'id': 6
        }
    ];

    const [products, setProducts] = useState<IProduct[] | []>([])

    useEffect(() => {
        axios.get('/api/products').then(response => {
            setProducts(response.data)
        })
    }, [])

    return (
        <Layout>
            <section className="w-full p-4 flex flex-col gap-8">
                <header className="w-full flex flex-col justify-center items-start gap-4 sm:flex-row sm:justify-between sm:items-center">
                    <div className="flex flex-col gap-2">
                        <h2>Produtos Cadastrados</h2>
                        <p className="sub-title-1">Lista os produtos cadastrados no sistema</p>
                    </div>
                    <Link href={'/products/new'} className="flex gap-4 items-center py-4 px-2 rounded-md text-white bg-primary box-border">
                        <AiOutlinePlus size={25} />
                        Adicione um novo Produto
                    </Link>
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
                            {products.map((item, id) => (
                                <tr key={id} className={id % 2 == 0 ? 'bg-white' : 'bg-gray-300'}>
                                    <td className={'px-6 py-4 text-sm whitespace-nowrap'}>{id + 1}</td>
                                    <td className={'px-6 py-4 text-sm whitespace-nowrap'}>{item.name}</td>
                                    <td className={'px-6 py-4 text-sm whitespace-nowrap'}>{item.preco}</td>
                                    <td className={'px-6 py-4 text-sm whitespace-nowrap'}>{item.quantidade}</td>
                                    <td className={'px-6 py-4 text-sm whitespace-nowrap'}>{item.data}</td>
                                    <td className={'px-6 py-4 text-sm whitespace-nowrap' + ' flex gap-1'}>
                                        <Link href={'/products/delete/' + item._id} className='py-2 px-4 flex gap-1 items-center text-white bg-primary cursor-pointer rounded-lg'>
                                            <BsFillTrashFill size={16} />
                                            Deletar
                                        </Link>
                                        <Link href={'/products/edit/' + item._id} className='py-2 px-4 flex gap-1 items-center text-white bg-secundary cursor-pointer rounded-lg'>
                                            <AiFillEdit size={16} />
                                            Editar
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { 'genkaistore.token': token } = parseCookies(context)
  
    if(!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
  
    return {
        props: {}
    }
  }