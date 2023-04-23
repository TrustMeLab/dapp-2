import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../components/form/model'

export default async function checkHandleUniqueness(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query
  const { handle } = query

  res.status(400).json({ message: 'Registration are closed' })

  await mongoose.connect(process.env.MONGO_URI as string)
  const user = await User.findOne({ handle: handle })
  res.status(200).json({ isUnique: user ? false : true })
}
