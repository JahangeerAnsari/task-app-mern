const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log("-------- authorization ");
  console.log(authorization);
  if (!authorization) {
    return res.status(400).json({ error: "you must be logged in" });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      return res.status(400).json({ error: "you must be logged in" });
    }
    const { _id } = payload;
    User.findById(_id).then((data) => {
      if (data) {
        req.user = data;
        console.log("\n\n user data by token :  ")
        console.log(JSON.stringify(data))
        next();
      } else {
        return res.status(400).json({ error: "Token is not valid" });
      }
    });
  });
};
