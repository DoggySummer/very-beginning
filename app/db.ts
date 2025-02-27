import { MongoClient } from 'mongodb'

const uri = process.env.NEXT_PUBLIC_MONGODB ?? ''
const options = {}

const client = new MongoClient(uri, options)
const connectDB = client.connect()

export default connectDB
