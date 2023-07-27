import { NextFunction, Request, Response } from 'express'

import ApiError from '../errors/api-error'
import DefaultError from '../errors/default-error'

export default function errorHandler(error: ApiError, req: Request, res: Response, next: NextFunction) {
  if (!(error instanceof ApiError)) {
    error = new DefaultError()
  }

  res.status(error.status).json({
    message: error.message,
    code: error.code
  })
}
