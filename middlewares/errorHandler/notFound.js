const notFound = (request, response, next) => {
  const error = new Error(`Not Found - ${request.originalUrl}`);
  next(error);
};
module.exports = notFound;
