const notFound = (request, response, next) => {
  const error = new Error(`Not Found - ${request.originalUrl}`);
  error.status = 404;
  next(error);
};

module.exports = notFound;
