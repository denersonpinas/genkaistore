import Image from 'next/image'
import { Product } from '../../models/product'
import Link from 'next/link'
import { NewProduct } from '@/components/newProduct'
import { mongooseConnect } from '../../lib/mongoose'
import { Layout } from '@/components/layout'

export default function Home({ featuredProduct, newProducts }) {
  return (
    <Layout>
      <section className="w-full">
        <Link href={'/product/' + featuredProduct?._id}>
          <Image
            src={'/assets/Banner.jpg'}
            alt='Banner Riuk Shinigami'
            className='w-full aspect-auto'
            width={1512}
            height={600}
            priority
          />
        </Link>

        <section className="flex flex-col gap-16 px-4 py-16 sm:px-8 lg:px-[166px]">
          <Image
            src={'/assets/Banner-2.png'}
            alt='Banner CTA Whatsapp'
            className='w-full aspect-auto'
            width={1292}
            height={408}
            priority
          />

          <div className="flex flex-col gap-8 w-full">
            <h2>PRA QUEM VOCÊ ESTÁ COMPRANDO?</h2>
            <div className="flex flex-col w-full justify-between xl:flex-row">
              <Image
                src={'/assets/namorado.png'}
                alt='Banner CTA categoria namorado'
                className='w-full aspect-auto'
                width={380}
                height={202}
                priority
              />
              <Image
                src={'/assets/pai.png'}
                alt='Banner CTA categoria pai'
                className='w-full aspect-auto'
                width={380}
                height={193.98}
                priority
              />
              <Image
                src={'/assets/amiga.png'}
                alt='Banner CTA categoria amiga'
                className='w-full aspect-auto'
                width={380}
                height={204}
                priority
              />
            </div>
          </div>

          <div className="w-full h-[100px] bg-primary"></div>
        </section>


        <section className="flex flex-wrap px-4 py-16 gap-8 sm:px-8 lg:px-[166px] lg:gap-[20%] 2xl:gap-[6.6%]">
          {newProducts.map(prod => (
            <NewProduct key={prod._id} newProducts={prod} />
          ))}
        </section>

        <section className="flex flex-col gap-4 px-4 py-16 sm:px-8 lg:px-[166px]">
          <h2 className='uppercase'>Nossas Marcas</h2>
          <div className="flex flex-wrap gap-4 justify-between">
            <Image
              src={'/assets/op.png'}
              alt='Logo One Pience'
              className='w-[180px] h-[180px] aspect-auto bg-secundary rounded-full'
              width={180}
              height={180}
              priority
            />
            <Image
              src={'/assets/op.png'}
              alt='Logo One Pience'
              className='w-[180px] h-[180px] aspect-auto bg-secundary rounded-full'
              width={180}
              height={180}
              priority
            />
            <Image
              src={'/assets/op.png'}
              alt='Logo One Pience'
              className='w-[180px] h-[180px] aspect-auto bg-secundary rounded-full'
              width={180}
              height={180}
              priority
            />
            <Image
              src={'/assets/op.png'}
              alt='Logo One Pience'
              className='w-[180px] h-[180px] aspect-auto bg-secundary rounded-full'
              width={180}
              height={180}
              priority
            />
            <Image
              src={'/assets/op.png'}
              alt='Logo One Pience'
              className='w-[180px] h-[180px] aspect-auto bg-secundary rounded-full'
              width={180}
              height={180}
              priority
            />
          </div>
        </section>

        <section className="w-full flex flex-col gap-4 bg-secundary px-4 py-16 sm:px-8 lg:px-[166px]" id='about'>
          <h2 className='uppercase'>sobre nós</h2>
          <div className="flex flex-col gap-4">
            <p className="sub-title">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p className="sub-title">
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  const featuredProductID = '64698f1825de3febf5bac6de'
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductID)
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 })
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    }
  }
}