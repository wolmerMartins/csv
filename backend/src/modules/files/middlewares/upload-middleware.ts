import { Request } from 'express'
import multer from 'multer'

import EnvConfig from '../../../common/config'
import { UPLOAD_FOLDER } from '../../../common/config/constants'

type UploadCallback = (error: Error | null, destination: string) => void

export function uploadFileMiddleware() {
  const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, callback: UploadCallback) => {
      callback(null, `./${EnvConfig.getValue(UPLOAD_FOLDER)}`)
    },
    filename: (req: Request, file: Express.Multer.File, callback: UploadCallback) => {
      const [filename, extension] = file.originalname.split('.')

      callback(null, `${filename}-${Date.now()}.${extension}`)
    }
  })

  return multer({ storage }).single('file')
}
