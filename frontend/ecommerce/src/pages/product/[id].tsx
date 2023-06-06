import { Layout } from "@/components/layout";
import { mongooseConnect } from "../../../lib/mongoose";
import { Product } from "../../../models/product";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ApresentationProduct } from "@/components/apresentationProduct";
import { Category } from "../../../models/category";
import { DetailsProduct } from "@/components/detailsProduct";

export default function ProductPage({ product, category }) {
    return (
        <Layout>
            <main className="flex flex-col items-start justify-start gap-4 py-16 px-4 sm:px-8 lg:px-[166px]">
                <header className='flex flex-col gap-16 pb-8'>
                    <div className='flex justify-start items-center'>
                        <Link href={'/'}><span className='uppercase sub-title font-bold hover:text-red cursor-pointer'>HOME</span></Link>
                        <MdKeyboardArrowRight size={16} />
                        <Link href={'/category/' + category.name}><span className='uppercase sub-title font-bold hover:text-red cursor-pointer'>{category.name}</span></Link>
                    </div>
                </header>
                <section className='w-full flex flex-col items-center justify-center gap-8'>
                    <ApresentationProduct product={product} />
                    <section className='w-full flex items-start justify-between gap-8'>
                        <div className='w-full h-full flex flex-col items-start justify-start gap-4 py-8 px-4 bg-white shadow-md rounded-md'>
                            <h3 className='pb-4'>DETALHES DO PRODUTO</h3>
                            <DetailsProduct title="CATEGORIA" information={`${category?.name}`} />
                            <DetailsProduct title="DIMENSSÕES" information={`${product?.dimenssao} ${product?.unidadeMedida}`} />
                            <DetailsProduct title="MARCA" information={`${product?.marca}`} />
                            <DetailsProduct title="MATERIAL" information={`${product?.material}`} />
                            <DetailsProduct title="PESO" information={`${product?.peso}g`} />
                        </div>
                    </section>
                </section>
            </main>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    await mongooseConnect()
    const { id } = context.query
    const product = await Product.findById(id)
    const category = await Category.findById(product.categoria)
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
            category: JSON.parse(JSON.stringify(category))
        }
    }
}