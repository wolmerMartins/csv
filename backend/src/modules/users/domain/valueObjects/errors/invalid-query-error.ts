import ApiError from '../../../../../common/errors/api-error'
import { VALID_FILTER_KEYS } from '../filter-vo'

export default class InvalidQueryError extends ApiError {
  constructor(invalidKey: string) {
    super(
      `The query keys "${invalidKey}" aren't valid to filter, the keys must be one of: "${[...VALID_FILTER_KEYS].join(', ')}"`,
      'invalid_query_error',
      400
    )
  }
}
