const jwt = require("jsonwebtoken");
const userAuthentication = async (request, response, next) => {
  const token = request.header("token");
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
    if (err) {
      return response.json({ message: err });
    } else {
    }
    request.id = decoded.userId;
    next();
  });
};
module.exports = userAuthentication;
