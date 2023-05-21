import axios from "axios"
import { useRouter } from "next/router"
import { DetailedHTMLProps, InputHTMLAttributes, useEffect, useState } from "react"
import { MdUpload } from "react-icons/md"
import { Spinner } from "../spinner"
import { ReactSortable } from "react-sortablejs"

interface IProductForm {
    _id?: String,
    name?: String | undefined,
    preco?: Number | undefined,
    quantidade?: String | undefined,
    descricao?: String | undefined,
    marca?: String | undefined,
    categoria?: String | undefined,
    dimenssao?: String | undefined,
    unidadeMedida?: String | undefined,
    material?: String | undefined,
    peso?: Number | undefined,
    data?: String | undefined,
    hora?: String | undefined,
    images?: String[] | undefined
}

export function ProductForm({
    _id,
    name            : existingName,
    preco           : existingPreco,
    quantidade      : existingQuantidade,
    descricao       : existingDescricao,
    marca           : existingMarca,
    categoria       : existingCategoria,
    dimenssao       : existingDimenssao,
    unidadeMedida   : existingUnidadeMedida,
    material        : existingMaterial,
    peso            : existingPeso,
    data            : existingData,
    hora            : existingHora,
    images          : existingImages,
}: IProductForm) {

    const [name, setName]                   = useState(existingName || '')
    const [preco, setPreco]                 = useState(existingPreco || '')
    const [quantidade, setQuantidade]       = useState(existingQuantidade || '')
    const [descricao, setDescricao]         = useState(existingDescricao || '')
    const [marca, setMarca]                 = useState(existingMarca || '')
    const [categoria, setCategoria]         = useState(existingCategoria || '')
    const [dimenssao, setDimenssao]         = useState(existingDimenssao || '')
    const [unidadeMedida, setUnidadeMedida] = useState(existingUnidadeMedida || '')
    const [material, setMaterial]           = useState(existingMaterial || '')
    const [peso, setPeso]                   = useState(existingPeso || '')
    const [images, setImages]               = useState(existingImages || [])
    const [data, setData]                   = useState(existingData || '')
    const [hora, setHora]                   = useState(existingHora || '')
    const [isUploading, setIsUploading]     = useState(false)
    const [getCategory, setGetCategory]        = useState([])

    const router = useRouter()

    async function saveProduct(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const today = new Date();
        const dia = String(today.getDate()).padStart(2, '0');
        const mes = String(today.getMonth() + 1).padStart(2, '0');
        const ano = today.getFullYear();
        setData(existingData || `${dia}/${mes}/${ano}`)

        const horaCompleta = String(today.getHours()).padStart(2, '0');
        const minuto = String(today.getMinutes()).padStart(2, '0');
        const segundo = String(today.getSeconds()).padStart(2, '0');
        setHora(existingHora || `${horaCompleta}:${minuto}:${segundo}`)

        const dados = { name, preco, quantidade, descricao, marca, categoria, dimenssao, unidadeMedida, material, peso, data, hora, images }

        if (_id) {
            // update
            await axios.put('/api/products', { ...dados, _id })
        } else {
            // create
            await axios.post('/api/products', dados)
        }
        goBack()

    }

    function goBack() {
        router.push('/products')
    }

    async function uploadImages(event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
        
        const files = event.target?.files
        if (files?.length > 0) {
            setIsUploading(true)
            const data = new FormData()
            for (const file of files) {
                data.append('file', file)
            }
            const res = await axios.post('/api/upload', data)
            setImages(oldImages => {
                return [...oldImages, ...res.data.links]
            })
            setIsUploading(false)
        }
    }

    function updateImagesOrder(images: String[]) {
        setImages(images)
    }

    useEffect(() => {
        axios.get('/api/categories')
            .then(result => {
                setGetCategory(result.data)
            })
    }, [])

    return (
        <section className="w-full lg:p-4">
            <form onSubmit={saveProduct} className="w-full bg-white shadow-lg flex flex-col justify-start gap-8 p-4">
                <div className="flex flex-col gap-2">
                    <h3>Informações do Produto</h3>
                    <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
                        <div className=" w-full flex flex-col gap-2">
                            <label>Nome:</label>
                            <input
                                value={name}
                                onChange={ev => setName(ev.target.value)}
                                type="text"
                                placeholder="Digite seu nome..." />
                        </div>
                        <div className=" w-full flex flex-col gap-2">
                            <label>Preço (R$):</label>
                            <input
                                type="number"
                                placeholder="Digite o preço"
                                value={preco}
                                onChange={ev => setPreco(ev.target.value)} />
                        </div>
                        <div className=" w-full flex flex-col gap-2">
                            <label>Quantidade:</label>
                            <input
                                type="number"
                                placeholder="Digite a quantidade..."
                                value={quantidade}
                                onChange={ev => setQuantidade(ev.target.value)} />
                        </div>
                    </div>
                    <div className=" w-full flex flex-col gap-2">
                        <label>Descrição:</label>
                        <textarea
                            placeholder="Descrição do produto..."
                            value={descricao}
                            onChange={ev => setDescricao(ev.target.value)} />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3>Detalhes do Produto</h3>
                    <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
                        <div className=" w-full flex flex-col gap-2">
                            <label>Marca:</label>
                            <select
                                value={marca}
                                onChange={ev => setMarca(ev.target.value)}
                            >
                                <option value="0">-</option>
                                <option value="dragonBall">Dragon Ball</option>
                                <option value="deathNote">Death Note</option>
                                <option value="naruto">Naruto</option>
                                <option value="marvel">Marvel</option>
                                <option value="onePience">One Piece</option>
                            </select>
                        </div>
                        <div className=" w-full flex flex-col gap-2">
                            <label>Categoria:</label>
                            <select
                                value={categoria}
                                onChange={ev => setCategoria(ev.target.value)}
                            >
                                <option value={'0'}>-</option>
                                {getCategory.map(getcategory => (
                                    <option key={getcategory._id} value={getcategory._id}>{getcategory.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
                        <div className=" w-full flex flex-col gap-2">
                            <label>Dimenssão:</label>
                            <input
                                type="text"
                                placeholder="Digite a dimenssão..."
                                value={dimenssao}
                                onChange={ev => setDimenssao(ev.target.value)} />
                        </div>
                        <div className=" w-full flex flex-col gap-2">
                            <label>Unidade de Medida:</label>
                            <select
                                value={unidadeMedida}
                                onChange={ev => setUnidadeMedida(ev.target.value)}
                            >
                                <option value="0">-</option>
                                <option value="cm">CM</option>
                                <option value="kg">Kg</option>
                                <option value="m">M</option>
                                <option value="g">G</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
                        <div className=" w-full flex flex-col gap-2">
                            <label>Material:</label>
                            <input
                                type="text"
                                placeholder="Digite o tipo de material..."
                                value={material}
                                onChange={ev => setMaterial(ev.target.value)} />
                        </div>
                        <div className=" w-full flex flex-col gap-2">
                            <label>Peso (em gr):</label>
                            <input
                                type="number"
                                placeholder="Digite o peso..."
                                value={peso}
                                onChange={ev => setPeso(ev.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label>Imagens:</label>
                    <div className="flex items-center gap-2">
                        <div className="flex gap-2 w-full flex-wrap">
                            <ReactSortable 
                                list={images} 
                                className="flex gap-2 flex-wrap"
                                setList={updateImagesOrder}>
                                {!!images?.length && images?.map(link => (
                                    <div key={link} className="h-24">
                                        <img src={link} className="rounded-lg"/>
                                    </div>
                                ))}
                            </ReactSortable>
                            {isUploading && (
                                <div className="h-24  p-1 flex items-center justify-center">
                                    <Spinner/>
                                </div>
                            )}
                        </div>
                        <label className="w-24 h-24 p-1 border flex justify-center items-center text-gray-500 rounded-lg bg-gray-200 cursor-pointer">
                            <MdUpload size={16} />
                            Upload
                            <input type="file" onChange={uploadImages} hidden />
                        </label>
                    </div>
                </div>
                <div className="w-full flex flex-col-reverse justify-around gap-2 sm:flex-row">
                    <span className="btn-cancel" onClick={goBack} >CANCELAR</span>
                    <button type="submit" className="btn-primary">SALVAR PRODUTO</button>
                </div>
            </form>
        </section>
    );
}