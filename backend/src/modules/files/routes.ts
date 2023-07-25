import { Router } from 'express'

import { uploadFileMiddleware } from './middlewares/upload-middleware'
import { filesController } from './controllers'

const router = Router()

router.post('/', uploadFileMiddleware(), filesController.handleUploadedFile.bind(filesController))

export const filesRouter = router
