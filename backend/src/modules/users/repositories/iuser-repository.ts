import User from '../domain/user'
import FilterVO from '../domain/valueObjects/filter-vo'

export interface IUserRepository {
  createMany: (users: User[]) => Promise<void>
  get: (filter?: FilterVO) => Promise<User[]>
}
