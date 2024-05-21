const joi = require("joi");

const schema = joi.object({
  name: joi
    .string()
    .min(5)
    .pattern(/[a-zA-Z](?!\d)/)
    .required(),
});
const editNameValidation = async (request, response, next) => {
  const errorsArray = [];
  const { error } = schema.validate(request.body);
  if (!error) {
    next();
  } else {
    error.details.forEach((msg) => {
      errorsArray.push(msg.message);
    });
    response.json({status:"false",message:errorsArray});
  }
};
module.exports = editNameValidation;
