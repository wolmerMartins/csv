import { UserDTO } from '../../files/types'
import User from '../domain/user'

export interface IUserService {
  createMany: (usersDTOs: UserDTO[]) => Promise<void>
  get: (filter?: string) => Promise<User[]>
}
