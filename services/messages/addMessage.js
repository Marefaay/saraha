const messageModel = require("../../models/message.model");
const userModel = require("../../models/user.model");
// const jwt = require("jsonwebtoken");
const addMessage = async (request, response) => {
  const { message, email } = request.body;
  const userFound = await userModel.findOne({email});
  // console.log(userFound);

  //   jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
  //     if (err) {
  //       return response.json({ message: err });
  //     } else {

  //     }
  //   });
  await messageModel.insertMany({ message, userId:userFound._id });
  return response.json({ message: "Messge Sended Succefully" });
};
module.exports = addMessage;
