const jwt = require("jsonwebtoken");
const userModel = require("../../models/user.model");
const userAutherization = async (request, response, next) => {
  const token = request.header("token");
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
    if (err) {
      return response.json(err);
    } else {
      const user = await userModel.findOne({ _id: decoded.userId });
      if (!user) {
        return response.json({ message: "This User Not Found" });
      } else {
        next();
      }
    }
  });
};
module.exports = userAutherization;
