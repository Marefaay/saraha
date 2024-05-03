const messageModel = require("../../models/message.model");
const jwt = require("jsonwebtoken");
const getMessages = async (request, response) => {
  const messages = await messageModel.find(
    { userId: request.id },
    { userId: 0, _id: 0, __v: 0 }
  );
  return response.json({ message: "succes", messages });
};
module.exports = getMessages;
