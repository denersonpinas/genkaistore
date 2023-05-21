import { Layout } from "@/components/layout";
import { ProductForm } from "@/components/productForm";

export default function NewProduct() {

    return (
        <Layout>
            <header className="w-full flex flex-col gap-2 p-4">
                <h2>Cadastro de Produtos</h2>
                <p className="sub-title-1">Cadastre um novo produto</p>
            </header>
            <ProductForm />
        </Layout>
    );
}