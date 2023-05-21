import { ModalDelete } from "@/components/modalDeletePage";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteCategoryPage() {

    const router = useRouter()
    const { id } = router.query
    const [categoryInfo, setCategoryInfo] = useState();

    useEffect(() => {
        if(!id){return}

        axios.get('/api/categories?id='+id)
            .then(response => {
                setCategoryInfo(response.data)
            })

    }, [id])

    async function deleteCategory() {
        await axios.delete('/api/categories?id='+id)
        goBack()
    }
    
    function goBack() {
        router.push('/categories')
    }

    return (
        <ModalDelete page={'categoria'} nome={categoryInfo?.name} onClickDelete={deleteCategory} onClickGoBack={goBack} />
    );
}