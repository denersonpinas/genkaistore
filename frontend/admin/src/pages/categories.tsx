import { Layout } from "@/components/layout";
import { useContext } from 'react';
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { AuthContext } from "@/context/AuthContext";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

export default function Categories() {
    const columns = [
        {
            'label': 'ID',
            'id': 1
        }, {
            'label': 'NOME',
            'id': 2
        }, {
            'label': 'CATEGORIA PAI',
            'id': 2
        }, {
            'label': 'AÇÕES',
            'id': 6
        }
    ];
    const [name, setName] = useState('')
    const [categories, setCategories] = useState([])
    const [parentCategory, setParentCategory] = useState('')
    const [editedCategory, setEditedCategory] = useState(null)

    async function saveCategory(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const dados = { name, parentCategory }
        if (editedCategory) {
            await axios.put('/api/categories', { ...dados, _id: editedCategory._id })
            setEditedCategory(null)
        } else {
            if(parentCategory) {
                await axios.post('/api/categories', dados)
            } else {
                await axios.post('/api/categories', {name})
            }
        }
        setName('')
        fetchCategories()
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    function fetchCategories() {
        axios.get('/api/categories')
            .then(result => {
                setCategories(result.data)
            })
    }

    function editCategory(category: never) {
        setEditedCategory(category)
        setName(category.name)
        setParentCategory(category.parentCategory?._id)
    }

    const { user } = useContext(AuthContext)

    return (
        <Layout>
            <section className="w-full p-4 flex flex-col gap-4">
                <header className="w-full flex flex-col gap-2 p-4">
                    <h2>{editedCategory ? 'Editar Categoria' : 'Cadastrar Categoria'}</h2>
                    <p className="sub-title-1">{editedCategory ? 'Edite uma categoria' : 'Cadastre uma nova categoria'}</p>
                </header>
                <form onSubmit={saveCategory} className="w-full bg-white shadow-lg flex flex-col justify-start gap-8 p-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-4 justify-between items-center lg:flex-row">
                            <div className="w-full flex flex-col gap-2">
                                <label>Nome da Categoria:</label>
                                <input
                                    value={name}
                                    onChange={ev => setName(ev.target.value)}
                                    type="text"
                                    placeholder="Digite o nome da categoria..." />
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label>Categoria Pai:</label>
                                <select
                                    value={parentCategory}
                                    onChange={ev => setParentCategory(ev.target.value)}
                                >
                                    <option value="0">Não tem Categoria Pai</option>
                                    {categories.map(category => (
                                        <option value={category._id}>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="w-full justify-between flex flex-col-reverse gap-2">
                            {editedCategory && (
                                <span
                                    className="btn-cancel lg:w-1/2 text-center"
                                    onClick={() => { 
                                        setName('')
                                        setParentCategory('')
                                        setEditedCategory(null) 
                                    }}>
                                    CANCELAR
                                </span>
                            )}
                            <button type="submit" className="btn-primary lg:w-1/2">SALVAR CATEGORIA</button>
                        </div>
                    </div>
                </form>
                {!editedCategory && (
                    <div className="overflow-x-auto">
                        <table className='min-w-full divide-y divide-gray-300'>
                            <thead className="bg-personBlack">
                                <tr>
                                    {columns.map((col, id) => (
                                        <th key={id} className={'px-6 py-3 text-white text-left uppercase tracking-wider'}>{col.label}</th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-300">
                                {categories.map((item, id) => (
                                    <tr key={id} className={id % 2 == 0 ? 'bg-white' : 'bg-gray-300'}>
                                        <td className={'px-6 py-4 text-sm whitespace-nowrap'}>{id + 1}</td>
                                        <td className={'px-6 py-4 text-sm whitespace-nowrap'}>{item.name}</td>
                                        <td className={'px-6 py-4 text-sm whitespace-nowrap'}>{item.parentCategory?.name}</td>
                                        <td className={'px-6 py-4 text-sm whitespace-nowrap' + ' flex gap-1'}>
                                            <Link href={'/categories/delete/' + item._id} className='py-2 px-4 flex gap-1 items-center text-white bg-primary cursor-pointer rounded-lg'>
                                                <BsFillTrashFill size={16} />
                                                Deletar
                                            </Link>
                                            <button onClick={() => editCategory(item)} className='py-2 px-4 flex gap-1 items-center text-white bg-secundary cursor-pointer rounded-lg'>
                                                <AiFillEdit size={16} />
                                                Editar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { 'genkaistore.token': token } = parseCookies(context)

    if (!token) {
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