const blacklist = [];
const logout = async (request, response) => {
  const token = request.header("token");

  if (!token) {
    return response.json({status:"false",message:"Access denied. No token provided."});
  }

  // Check if the token is blacklisted
  if (blacklist.includes(token)) {
    return response.json({status:"false",message:"Access denied. Token has been invalidated."});
  }

  // Add the token to the request object for further use
  request.token = token;
  blacklist.push(request.token);
  console.log(blacklist);
  response.json({status:"true",message:"Logged out successfully"});
};

module.exports = logout;
