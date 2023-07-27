import ApiError from '../../../../common/errors/api-error'
import { VALID_USER_DTO_ATTRIBUTES } from '../user-service'

export default class InvalidAttributesError extends ApiError {
  constructor(invalidAttributes: string) {
    super(
      `The attributes are "${invalidAttributes}" are invalid. Must be one of: "${[...VALID_USER_DTO_ATTRIBUTES].join(', ')}"`,
      'invalid_attributes_error',
      400
    )
  }
}
