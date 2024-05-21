const joi = require("joi");

const schema = joi.object({
  email: joi
    .string()
    .required()
    .email({ minDomainSegments: 1, tlds: { allow: ["com"] } }),

  password: joi
    .string()
    .required()
    //at least 8 char ==>1u==>1L==>1 special
    .pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .min(8),

  //8char 1u 1l 1num 1speical
  repeat_password: joi.ref("password"),
});
const userLoginValidation = async (request, response, next) => {
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
module.exports = userLoginValidation;
