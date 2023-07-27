import User from '../../domain/user'
import FilterVO from '../../domain/valueObjects/filter-vo'
import { IUserRepository } from '../../repositories/iuser-repository'

export default class UserRepositoryMock implements IUserRepository {
  public async createMany(users: User[]): Promise<void> {}

  public async get(filter?: FilterVO | undefined): Promise<User[]> {
    return [
      new User('Test 1', 'BH', 'Brazil', 'Basketball')
    ]
  }
}
