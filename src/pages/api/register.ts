import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../components/form/model'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(400).json({ message: 'Registration are closed' })

  if (req.method === 'POST') {
    await mongoose.connect(process.env.MONGO_URI as string)

    const user = await User.create({
      handle: req.body.values.handle,
      email: req.body.values.email ?? null,
      address: req.body.values.address,
      isLensUser: req.body.values.isLensUser,
    })

    res.status(200).json({ message: 'User registered', user: user })
  } else {
    res.status(200).json({ answer: 'Hi there, want to build on TalentLayer?' })
  }
}
