const userModel = require("../../models/user.model");
const bcrypt = require("bcrypt");
const resetPassword = async (request, response) => {
  const { oldPassword, newPassword } = request.body;

  console.log(request.id);
  const user = await userModel.findOne({ _id: request.id });
  console.log(user.password);
  const match = await bcrypt.compare(oldPassword, user.password);
  console.log(match);
  if (match) {
    if (oldPassword === newPassword) {
      return response.json({status:"false",
        message: " Old Password And New Passowrd Must Be Diffreent",
      });
    }
    bcrypt.hash(newPassword, 4, async (err, hash) => {
      await userModel.findByIdAndUpdate(
        { _id: request.id },
        { password: hash }
      );
      return response.json({status:"true", message: "Password Updated Succefully" });
    });
  } else {
    return response.json({status:"false", message: "Old Password Incorrect" });
  }
};
module.exports = resetPassword;
