import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../../../models/product'
import { mongooseConnect } from '../../../lib/mongoose'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {method} = req
  await mongooseConnect()

  if(method === 'GET') {

    if(req.query?.id) {
      res.json(await Product.findOne({_id:req.query.id}))
    } else {
      res.json(await Product.find())
    }

  }

  if(method === 'POST') {
    const {name, preco, quantidade, descricao, marca, categoria, dimenssao, unidadeMedida, material, peso, data, hora, images} = req.body
    const productDoc = await Product.create({
        name, preco, quantidade, descricao, marca, categoria, dimenssao, unidadeMedida, material, peso, data, hora, images,
    })
    res.json(productDoc)
  }

  if(method === 'PUT') {
    const {name, preco, quantidade, descricao, marca, categoria, dimenssao, unidadeMedida, material, peso, dataAtual, horaAtual, images, _id} = req.body
    await Product.updateOne({_id}, {name, preco, quantidade, descricao, marca, categoria, dimenssao, unidadeMedida, material, peso, dataAtual, horaAtual, images})
    res.json(true)
  }

  if(method === 'DELETE') {
    if(req.query?.id) {
      await Product.deleteOne({_id:req.query?.id})
      res.json(true);
    }
  }
}