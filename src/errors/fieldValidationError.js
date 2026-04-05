import BaseError from './baseError.js'

class FieldValidationError extends BaseError {
  constructor(message = 'Invalid field value') {
    super(message, 400);
  }
}

export default FieldValidationError