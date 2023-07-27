import ApiError from './api-error'

export default class DefaultError extends ApiError {
  constructor() {
    super(
      'Internal Server Error',
      'internal_server_error',
      500
    )
  }
}
