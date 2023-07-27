import { UserDTO } from '../../../files/types'
import EmptyUsersListError from '../errors/empty-users-list-error'
import InvalidAttributesError from '../errors/invalid-attributes-error'
import UserService from '../user-service'
import UserRepositoryMock from './user-repository-mock'

const userService = new UserService(new UserRepositoryMock())

const usersDTOs: UserDTO[] = [
  {
    name: 'Test 1',
    city: 'BH',
    country: 'Brazil',
    favorite_sport: 'Basketball'
  }
]

describe('user-service', () => {
  describe('createMany()', () => {
    it('Should try to create multiple users with an empty array and throw a "EmptyUsersListError"', async () => {
      await expect(() => userService.createMany([]))
        .rejects
        .toThrowError(new EmptyUsersListError())
    })

    it('Should try to create multiple users and throw an "InvalidAttributesError"', async () => {
      const invalidDTO = {
        ...usersDTOs[0],
        age: 18,
        document: '1234567890'
      }

      await expect(() => userService.createMany([invalidDTO]))
        .rejects
        .toThrowError(new InvalidAttributesError('age, document'))
    })
  })
})
