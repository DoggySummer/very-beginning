import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/app/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const db = (await connectDB).db('tekken_database')
      let result = await db.collection('tekken_skill').insertOne(req.body)
      return res.redirect(302, '/list')
    } catch (error) {
      return res.status(500).json('DB 저장 오류')
    }
  }
  return res.status(500).json('내용을 입력해주세요!')
}
