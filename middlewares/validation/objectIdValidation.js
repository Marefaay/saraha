const mongoose = require("mongoose");
//Business logic
const objectIdValidation = async (request, response, next) => {
  const { id } = request.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    next();
  } else {
    response.json({ message: "Id is not Valid" });
  }
};
module.exports = objectIdValidation;
