const errorHandler = (err, request, response, next) => {
  const statusCode = err.status || 500;
  response.status(statusCode);
  response.json({
    status: "Error",
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Hide stack trace in production
  });
};

module.exports = errorHandler;
