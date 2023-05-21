import { Layout } from "@/components/layout";
import { ProductForm } from "@/components/productForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProductPage() {

    const [productInfo, setProductInfo] = useState(null);
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        if (!id) { return }
        axios.get('/api/products?id=' + id)
            .then(response => {
                setProductInfo(response.data)
            })
    }, [id])

    return (
        <Layout>
            <header className="w-full flex flex-col gap-2 p-4">
                <h2>Edite um Produto</h2>
                <p className="sub-title-1">Editar produto existente.</p>
            </header>
            { productInfo && (
                <ProductForm {...productInfo} />
            )}
        </Layout>
    );
}