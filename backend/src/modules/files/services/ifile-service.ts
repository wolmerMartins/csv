import { UserDTO } from '../types'

export interface IFilesService {
  getData: (filePath?: string) => Promise<UserDTO[]>
}
