import type { NextApiRequest, NextApiResponse } from 'next'
import multiparty from 'multiparty';
import fs from 'fs'
import mime from 'mime-types'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { mongooseConnect } from '../../../lib/mongoose';


const bucketName = 'next-genkaistore'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  await mongooseConnect()

  const form = new multiparty.Form()
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err)
      resolve({ fields, files })
    })
  })
  const client = new S3Client({
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
    },
  })
  const links = []
  for (const file of files.file) {
    const extension = file.originalFilename.split('.').pop()
    const newFilename = Date.now() + '.' + extension
    await client.send(new PutObjectCommand({
      Bucket: bucketName,
      Key: newFilename,
      Body: fs.readFileSync(file.path),
      ACL: 'public-read',
      ContentType: mime.lookup(file.path)
    }))
    const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`
    links.push(link)
  }
  res.json({links})
}

export const config = {
  api: { bodyParser: false }
}