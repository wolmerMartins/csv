import { UserDTO } from '../../files/types'
import UserMapper from '../domain/mappers/user-mapper'
import User from '../domain/user'
import { IUserRepository } from '../repositories/iuser-repository'
import EmptyUsersListError from './errors/empty-users-list-error'
import InvalidAttributesError from './errors/invalid-attributes-error'
import { IUserService } from './iuser-service'

export const VALID_USER_DTO_ATTRIBUTES = new Set<string>(['name', 'city', 'country', 'favorite_sport'])

export default class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  private validateAttributes(usersDTOs: UserDTO[]): void {
    const invalidAttributes = Object
      .keys(usersDTOs[0])
      .filter((attr: string) => !VALID_USER_DTO_ATTRIBUTES.has(attr))

    if (invalidAttributes?.length)
      throw new InvalidAttributesError(invalidAttributes.join(', '))
  }

  public async createMany(usersDTOs: UserDTO[]): Promise<void> {
    if (!usersDTOs?.length) throw new EmptyUsersListError()

    this.validateAttributes(usersDTOs)

    const users = usersDTOs.map(
      (userDTO: UserDTO) => UserMapper.toDomain(userDTO)
    )

    await this.userRepository.createMany(users)
  }

  public async get(filter?: string): Promise<User[]> {
    const users = await this.userRepository.get(filter)

    return users
  }
}
