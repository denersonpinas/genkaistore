import type { NextApiRequest, NextApiResponse } from 'next'
import { mongooseConnect } from '../../../lib/mongoose'
import { Order } from '../../../models/order'
import { Category } from '../../../models/category'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {method} = req
  await mongooseConnect()

  res.json( await Category.find().sort({createAt: -1}) )
}