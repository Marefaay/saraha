const mongoose = require("mongoose");
//mongoose schema

const userSchema = new mongoose.Schema(
  {
    name: String,
    password: String,
    email: String,
    age: Number,
    profilePhoto: {
      type: Object,
      default: {
        url: "https://th.bing.com/th/id/R.152c34a899b6bf22d4da6c91b74403dd?rik=ELN9t4jt5Z7dhA&pid=ImgRaw&r=0",
        publicId: null,
      },
    },
    emailConfirm: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
///User Model
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
