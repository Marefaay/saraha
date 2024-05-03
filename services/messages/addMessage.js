const messageModel = require("../../models/message.model");
// const jwt = require("jsonwebtoken");
const addMessage = async (request, response) => {
  const { message, userId } = request.body;
//   jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
//     if (err) {
//       return response.json({ message: err });
//     } else {
     
//     }
//   });
  await messageModel.insertMany({ message, userId });
  return response.json({ message: "Messge Sended Succefully" });
};
module.exports = addMessage;
