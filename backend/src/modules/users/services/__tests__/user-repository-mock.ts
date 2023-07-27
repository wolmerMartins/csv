import User from '../../domain/user'
import { IUserRepository } from '../../repositories/iuser-repository'

export default class UserRepositoryMock implements IUserRepository {
  public async createMany(users: User[]): Promise<void> {}

  public async get(filter?: string): Promise<User[]> {
    return [
      new User('Test 1', 'BH', 'Brazil', 'Basketball')
    ]
  }
}
