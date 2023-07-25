import { UserDTO } from '../../files/types'
import User from '../domain/user'
import FilterVO from '../domain/valueObjects/filter-vo'

export interface IUserService {
  createMany: (usersDTOs: UserDTO[]) => Promise<void>
  get: (filter?: FilterVO) => Promise<User[]>
}
