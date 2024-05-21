const userModel = require("../../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../../emails/userEmail");

const register = async (request, response) => {
  const { name, email, password, age } = request.body;
  const user = await userModel.findOne({ email });

  if (user) {
    return response.json({ status: "false", message: "This User Email Is Already Exist" });
  } else {
    bcrypt.hash(password, 4, async (err, hash) => {
      if (err) {
        console.log(err);
        return response.json({ status: "false", message: err.message });
      } else {
        // Store hash in your password DB.
        const newUser = await userModel.create({
          name,
          email,
          password: hash,
          age,
        });

        let token = jwt.sign({ email }, process.env.JWT_SECRET_KEY);

        sendEmail({
          email,
          token,
          message: `Hello ${name} Welcome to In Our Saraha Application`,
        });

        console.log(newUser);
        return response.json({ status: "true", message: "You Are Registered Successfully" });
      }
    });
  }
};

module.exports = register;
