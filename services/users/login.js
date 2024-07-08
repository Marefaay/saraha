const userModel = require("../../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const login = async (request, response) => {
  const { email, password } = request.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return response.json({status:"false", message: ` Email('${email}') Is Not Found` });
  } else {
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      const token = jwt.sign(
        {
          userId: user._id,
          userEmail: user.email,
          userName: user.name,
          confirmation: user.emailConfirm,
        },
        `${process.env.JWT_SECRET_KEY}`
      );
     
      return response.json({
        status:"true",
            message: `Welcome ${user.name} You Are Loggend Succefully`,
            token,
          });
      // login
    } else {
      return response.json({status:"false", message: "Password Is Incorrect" });
    }
  }
};
module.exports = login;
