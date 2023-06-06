import { Layout } from "@/components/layout";
import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/product";
import { NewProduct } from "@/components/newProduct";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function StorePage({ products }) {
    return (
        <Layout>
            <main className="flex flex-col items-start justify-start gap-4 py-16 px-4 sm:px-8 lg:px-[166px]">
                <header className='flex flex-col gap-16 pb-8'>
                    <div className='flex justify-start items-center'>
                        <Link href={'/'}><span className='uppercase sub-title font-bold hover:text-red cursor-pointer'>HOME</span></Link>
                        <MdKeyboardArrowRight size={16} />
                        <Link href={'/store'}><span className='uppercase sub-title font-bold hover:text-red cursor-pointer'>store</span></Link>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h1 className='uppercase'>store</h1>
                    </div>
                </header>
                <section className="flex flex-wrap gap-8 py-16 lg:gap-[20%] 2xl:gap-[6.6%]">
                    {products?.map(prod => (
                        <NewProduct key={prod._id} newProducts={prod} />
                    ))}
                </section>
            </main>
        </Layout>
    )
}

export async function getServerSideProps() {
    await mongooseConnect()
    const products = await Product.find({}, null, { sort: { '_id': -1 } })
    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}