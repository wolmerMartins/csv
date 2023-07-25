import { UserDTO } from '../../../files/types'
import User from '../user'

export default class UserMapper {
  public static toDomain(userDTO: UserDTO): User {
    return new User(
      userDTO.name,
      userDTO.city,
      userDTO.country,
      userDTO.favorite_sport
    )
  }
}
