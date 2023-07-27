import User from '../../domain/user'
import UserMongoDBModel from '../../models/user-mongodb-model'
import { IUserRepository } from '../iuser-repository'

export default class UserMongoDBRepository implements IUserRepository {
  public async createMany(users: User[]): Promise<void> {
    await UserMongoDBModel.insertMany(users)
  }

  private getQuery(filter?: string): Record<string, any> {
    if (!filter) return {}

    const query = new RegExp(filter, 'gi')
    return {
      $or: [
        { name: query },
        { city: query },
        { country: query },
        { favoriteSport: query }
      ]
    }
  }

  public async get(filter?: string): Promise<User[]> {
    const dbUsers = await UserMongoDBModel.find(this.getQuery(filter))

    return dbUsers.map(
      dbUser => new User(dbUser.name, dbUser.city, dbUser.country, dbUser.favoriteSport)
    )
  }
}
