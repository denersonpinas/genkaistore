import { ModalDelete } from "@/components/modalDeletePage";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProductPage() {

    const router = useRouter()
    const { id } = router.query
    const [productInfo, setProductInfo] = useState();

    useEffect(() => {
        if(!id){return}

        axios.get('/api/products?id='+id)
            .then(response => {
                setProductInfo(response.data)
            })

    }, [id])

    async function deleteProduct() {
        await axios.delete('/api/products?id='+id)
        goBack()
    }
    
    function goBack() {
        router.push('/products')
    }

    return (
        <ModalDelete page={'produto'} nome={productInfo?.name} onClickDelete={deleteProduct} onClickGoBack={goBack} />
    );
}