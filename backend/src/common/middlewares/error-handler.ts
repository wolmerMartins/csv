import { NextFunction, Request, Response } from 'express'

import ApiError from '../errors/api-error'

export default function errorHandler(error: ApiError, req: Request, res: Response, next: NextFunction) {
  res.status(error.status).json({
    message: error.message,
    code: error.code
  })
}
