import { Schema, model } from 'mongoose'
import User from '../domain/user'

const userSchema = new Schema<User>({
  name: { type: String, index: true },
  city: { type: String, index: true },
  country: { type: String, index: true },
  favoriteSport: { type: String, index: true }
})

const UserMongoDBModel = model<User>('User', userSchema, 'users')

export default UserMongoDBModel
