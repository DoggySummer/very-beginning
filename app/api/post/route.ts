import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/app/db'
import { ObjectId } from 'mongodb'
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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const character_name = searchParams.get('character_name')
    const skill_name = searchParams.get('skill_name')
    const db = (await connectDB).db('tekken_database')
    let result = await db
      .collection('tekken_skill')
      .find({ character_name: character_name, skill_name: skill_name })
      .toArray()
    console.log(result)
    return NextResponse.json({ status: 200, data: result[0] })
  } catch (error) {
    return NextResponse.json({ error: 'DB 저장 오류' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const character_name = searchParams.get('character_name')
    const skill_name = searchParams.get('skill_name')
    const db = (await connectDB).db('tekken_database')

    const body = await request.json()
    let result = await db
      .collection('tekken_skill')
      .updateOne(
        { character_name: character_name, skill_name: skill_name },
        { $set: body }
      )
    return NextResponse.json({ status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'DB 저장 오류' }, { status: 500 })
  }
}
