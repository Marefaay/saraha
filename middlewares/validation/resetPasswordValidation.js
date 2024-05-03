const joi = require("joi");

const schema = joi.object({
  oldPassword: joi
    .string()
    .required()
    //at least 8 char ==>1u==>1L==>1 special
    .pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .min(8),
  newPassword: joi
    .string()
    .required()
    //at least 8 char ==>1u==>1L==>1 special
    .pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .min(8),

  //8char 1u 1l 1num 1speical
  newPassswordConfirmation: joi.ref("newPassword"),
});
const resetPasswordValidation = async (request, response, next) => {
  const errorsArray = [];
  const { error } = schema.validate(request.body);
  if (!error) {
    next();
  } else {
    error.details.forEach((msg) => {
      errorsArray.push(msg.message);
    });
    response.json(errorsArray);
  }
};
module.exports = resetPasswordValidation;
