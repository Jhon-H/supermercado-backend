import BaseError from './baseError.js'

class NotFoundError extends BaseError {
  constructor(message = 'Resource not found') {
    super(message, 404);
  }
}

export default NotFoundError