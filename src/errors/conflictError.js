import BaseError from './baseError.js'

class ConflictError extends BaseError {
  constructor(message = 'Resource already exists') {
    super(message, 409)
  }
}

export default ConflictError
