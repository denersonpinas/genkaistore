import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../../../models/product'
import { mongooseConnect } from '../../../lib/mongoose'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {method} = req
  await mongooseConnect()

  // if(method === 'GET') {
  // }

  // if(method === 'POST') {
  //   const {name, senha} = req.body
  //   const productDoc = await 
  //   res.json(productDoc)
  // }

  // if(method === 'PUT') {
  //   const {name, preco, quantidade, descricao, marca, categoria, dimenssao, unidadeMedida, material, peso, dataAtual, horaAtual, images, _id} = req.body
  //   await Product.updateOne({_id}, {name, preco, quantidade, descricao, marca, categoria, dimenssao, unidadeMedida, material, peso, dataAtual, horaAtual, images})
  //   res.json(true)
  // }

  // if(method === 'DELETE') {
  //   if(req.query?.id) {
  //     await Product.deleteOne({_id:req.query?.id})
  //     res.json(true);
  //   }
  // }
}