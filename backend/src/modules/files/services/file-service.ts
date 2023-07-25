import { parseFile } from 'fast-csv'
import * as fs from 'fs/promises'

import FilePathRequiredError from '../errors/file-path-required-error'
import { IFilesService } from './ifile-service'
import { UserDTO } from '../types'

export default class FilesService implements IFilesService {
  private async deleteFile(filePath: string): Promise<void> {
    await fs.unlink(filePath)
  }

  public async getData(filePath?: string): Promise<UserDTO[]> {
    if (!filePath) throw new FilePathRequiredError()

    return new Promise<UserDTO[]>((resolve) => {
      const data: UserDTO[] = []

      parseFile(filePath, { headers: true })
        .on('data', row => { data.push(row) })
        .on('end', () => {
          this.deleteFile(filePath)

          resolve(data)
        })
    })
  }
}
