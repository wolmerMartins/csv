import { usersRepository } from '../repositories'
import UserService from './user-service'

export const usersService = new UserService(usersRepository)
