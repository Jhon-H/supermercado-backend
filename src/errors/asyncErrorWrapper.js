export const asyncErrorWrapper = (fn) => (request, response, next) => {
  Promise.resolve(fn(request, response, next)).catch(next)
}
