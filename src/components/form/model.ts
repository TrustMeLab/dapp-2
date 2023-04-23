import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
  handle: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
    sparce: true,
  },
  isLensUser: {
    type: Boolean,
    required: true,
  },
})

export const User = models.User || model('User', userSchema)
