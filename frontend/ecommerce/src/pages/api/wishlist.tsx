import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../../../models/product'
import { mongooseConnect } from '../../../lib/mongoose'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {method} = req
  await mongooseConnect()

  res.json(await Product.find({_id:req.body.ids}))
}