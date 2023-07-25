import { Request, Response } from 'express'

import { IFilesService } from '../services/ifile-service'
import { IUserService } from '../../users/services/iuser-service'

export default class FilesController {
  constructor(
    private filesService: IFilesService,
    private usersService: IUserService
  ) {}

  public async handleUploadedFile(req: Request, res: Response) {
    const uploadedData = await this.filesService.getData(req.file?.path)

    await this.usersService.createMany(uploadedData)

    res.status(200).json(uploadedData)
  }
}
