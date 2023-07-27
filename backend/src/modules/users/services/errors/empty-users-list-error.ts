import ApiError from '../../../../common/errors/api-error'

export default class EmptyUsersListError extends ApiError {
  constructor() {
    super(
      'No user data was supplied, to be registered.',
      'empty_users_list_error',
      400
    )
  }
}
