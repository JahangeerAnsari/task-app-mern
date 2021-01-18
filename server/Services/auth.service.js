const e = require("express");
const User = require("../Models/user.model");
const jwt = require("jsonwebtoken");

exports.findUserByEmail = (email) => {
  return User.findOne({ email: email })
    .then((data) => {
      console.log(data);
      return {
        status: 200,
        data: data,
      };
    })
    .catch((err) => {
      console.log(err);
    });
};

// save user
exports.saveUser = (body) => {
  return User(body)
    .save()
    .then((data) => {
      console.log(data);
      return {
        // for updation status 201
        status: 201,
        data,
      };
    })
    .catch((e) => {
      return {
        status: 400,
        error: e,
      };
    });
};

//login
exports.findbyEmailAndPasswordLoginStatus = (email, password) => {
  return User.find({
    $and: [
      {
        email: email,
      },
      {
        password: password,
      },
    ],
  })
    .then((data) => {
      if (data.length > 0) {
        const u = data[0];
        console.log("---emial" + u.email);
        const token = jwt.sign(
          { _id: u._id, email: u.email },
          process.env.SECRET_KEY
        );
        // console.log("---token--" + token);
        return {
          message: "logged in",
          user: data[0],
          status: 200,
          token,
        };
      }
      return {
        message: "Wrong credential",
        status: 200,
      };
    })
    .catch((e) => {
      return {
        message: "Error",
        error: e,
        status: 400,
      };
    });
};
