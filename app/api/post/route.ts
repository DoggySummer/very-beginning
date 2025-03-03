import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/app/db'

export async function POST(request: NextRequest) {
  try {
    const db = (await connectDB).db('tekken_database')
    const body = await request.json()
    console.log(body)
    let result = await db.collection('tekken_skill').insertOne(body)
    return NextResponse.json({ status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'DB 저장 오류' }, { status: 500 })
  }
}
