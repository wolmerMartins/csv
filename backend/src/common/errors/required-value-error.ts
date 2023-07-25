import ApiError from './api-error'

export default class RequiredValueError extends ApiError {
  constructor(message: string, code: string) {
    super(message, code, 400)
  }
}
