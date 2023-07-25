import { UserDTO } from '../../files/types'
import UserMapper from '../domain/mappers/user-mapper'
import User from '../domain/user'
import FilterVO from '../domain/valueObjects/filter-vo'
import { IUserRepository } from '../repositories/iuser-repository'
import { IUserService } from './iuser-service'

export default class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  public async createMany(usersDTOs: UserDTO[]): Promise<void> {
    const users = usersDTOs.map(
      (userDTO: UserDTO) => UserMapper.toDomain(userDTO)
    )

    await this.userRepository.createMany(users)
  }

  public async get(filter?: FilterVO): Promise<User[]> {
    const users = await this.userRepository.get(filter)

    return users
  }
}
