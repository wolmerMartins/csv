import User from '../../domain/user'
import FilterVO from '../../domain/valueObjects/filter-vo'
import UserMongoDBModel from '../../models/user-mongodb-model'
import { IUserRepository } from '../iuser-repository'

export default class UserMongoDBRepository implements IUserRepository {
  public async createMany(users: User[]): Promise<void> {
    await UserMongoDBModel.insertMany(users)
  }

  public async get(filter?: FilterVO): Promise<User[]> {
    return UserMongoDBModel.find(filter?.toUserFilter() ?? {})
  }
}
