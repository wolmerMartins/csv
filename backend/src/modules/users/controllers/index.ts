import { usersService } from '../services'
import UsersController from './users-controller'

export const usersController = new UsersController(usersService)
