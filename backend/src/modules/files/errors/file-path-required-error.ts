import RequiredValueError from '../../../common/errors/required-value-error'

export default class FilePathRequiredError extends RequiredValueError {
  constructor() {
    super(
      'The file is required to retrieve data',
      'file_required_error'
    )
  }
}
