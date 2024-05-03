const messageModel = require("../../models/message.model");

const deleteMessage = async (request, response) => {
  const { id } = request.params;
  const message = await messageModel.findOne({ _id: id });
  if (message) {
    const message = await messageModel.deleteOne({ _id: id });
    console.log(message);
    return response.json({ message: "Message Delted Succefully" });
  } else {
    return response.json({ message: "No Message To Delte" });
  }
};
module.exports = deleteMessage;
