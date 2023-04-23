import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../components/form/model'

export default async function getUser(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query
  const { address } = query

  await mongoose.connect(process.env.MONGO_URI as string)
  const user = await User.findOne({ address: address })
  res.status(200).json({ user })
}
