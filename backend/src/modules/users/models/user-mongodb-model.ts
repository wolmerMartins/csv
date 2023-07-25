import { Schema, model } from 'mongoose'
import User from '../domain/user'

const userSchema = new Schema<User>({
  name: String,
  city: String,
  country: String,
  favoriteSport: String
})

const UserMongoDBModel = model<User>('User', userSchema, 'users')

export default UserMongoDBModel
