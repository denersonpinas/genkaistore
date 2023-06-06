import { Layout } from "@/components/layout";
import { mongooseConnect } from "../../../lib/mongoose";
import { Product } from "../../../models/product";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ApresentationProduct } from "@/components/apresentationProduct";
import { Category } from "../../../models/category";
import { DetailsProduct } from "@/components/detailsProduct";
import { Breadcrumb } from "@/components/breadcrumb";
import { NewProduct } from "@/components/newProduct";

export default function CategoryPage({product, category }) {
    console.log(product)
    return (
        <Layout>
            <main className="flex flex-col items-start justify-start gap-4 py-16 px-4 sm:px-8 lg:px-[166px]">
                <header className='flex flex-col gap-16 pb-8'>
                    <div className='flex justify-start items-center'>
                        <Breadcrumb origim={'home'} current={category.name} linkCurrent={'/category/' + category._id} />
                    </div>
                    <div className='flex items-center justify-between'>
                        <h1 className='uppercase'>{category.name}</h1>
                    </div>
                </header>
                <section className="flex flex-wrap gap-8 py-16 lg:gap-[20%] 2xl:gap-[6.6%]">
                    {product?.map(prod => (
                        <NewProduct key={prod._id} newProducts={prod} />
                    ))}
                </section>
            </main>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    await mongooseConnect()
    const { id } = context.query
    const category = await Category.findById(id)
    const product = await Product.find({categoria: category._id})
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
            category: JSON.parse(JSON.stringify(category))
        }
    }
}