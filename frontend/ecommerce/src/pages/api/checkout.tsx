import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../../../models/product'
import { mongooseConnect } from '../../../lib/mongoose'
import { DescontPrice } from '@/functions/utils'
import { Order } from '../../../models/order'
const stripe = require('stripe')(process.env.STRIPE_SK)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {method} = req
  await mongooseConnect()

  if(method !== 'POST') {
    res.json('Só aceitamos requisições via POST')
    return
  }

  const { name, email, city, cep, String, address, numberAddress, country, products, } = req.body

  const productsIds = products.split(',')
  const uniqueIds = [...new Set(productsIds)]
  const productsInfos = await Product.find({_id:uniqueIds})

  let line_items = []
  for(const productId of uniqueIds) {
    const productInfo = productsInfos.find(p => p._id.toString() === productId)
    const quantity = productsIds.filter(id => id === productId)?.length || 0
    if(quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: 'BRL',
          product_data: {name:productInfo.name, id:productInfo._id},
          unit_amount: DescontPrice(productInfo.preco) * 100
        }
      })
    }
  }

  const orderDoc = await Order.create({
    line_items, name, email, city, cep, String, address, numberAddress, country, paidType:'', paid:false,
  })

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    customer_email: email,
    success_url: process.env.PUBLIC_URL + '/cart?success=1',
    cancel_url: process.env.PUBLIC_URL + '/cart?cancel=1',
    metadata: {orderId:orderDoc._id.toString(), test: "ok"}
  })

  res.json({url:session.url})
}