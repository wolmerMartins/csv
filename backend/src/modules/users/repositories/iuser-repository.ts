import User from '../domain/user'

export interface IUserRepository {
  createMany: (users: User[]) => Promise<void>
  get: (filter?: string) => Promise<User[]>
}
