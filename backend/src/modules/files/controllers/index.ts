import { usersService } from '../../users/services'
import { filesService } from '../services'
import FilesController from './files-controller'

export const filesController = new FilesController(filesService, usersService)
