const mongoose = require("mongoose");
//Message Schema
const messageSchema = new mongoose.Schema(
  {
    message: String,
    userId: {
      type: mongoose.Types.ObjectId
    },
  },
  { timestamps: true }
);
//Message Model
const messageModel = mongoose.model("Message", messageSchema);
module.exports = messageModel;
