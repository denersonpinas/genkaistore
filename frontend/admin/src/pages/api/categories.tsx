import type { NextApiRequest, NextApiResponse } from 'next'
import { Category } from '../../../models/category'
import { mongooseConnect } from '../../../lib/mongoose'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {method} = req
  await mongooseConnect()

  if(method === 'GET') {

    if(req.query?.id) {
      res.json(await Category.findOne({_id:req.query.id}))
    } else {
      res.json(await Category.find().populate('parentCategory'))
    }

  }

  if(method === 'POST') {
    const {name, parentCategory} = req.body
    const categoryDoc = await Category.create({
        name, parentCategory,
    })
    res.json(categoryDoc)
  }

  if(method === 'PUT') {
    const {name, parentCategory, _id} = req.body
    await Category.updateOne({_id}, {name, parentCategory})
    res.json(true)
  }

  if(method === 'DELETE') {
    if(req.query?.id) {
      await Category.deleteOne({_id:req.query?.id})
      res.json(true);
    }
  }
}