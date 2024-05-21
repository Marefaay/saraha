const errorHandler = (err, request, response)=> {
  response.json({status:"false",
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
module.exports = errorHandler;
