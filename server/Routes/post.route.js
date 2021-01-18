const app = require("express");
const {
  createPost,
  findPostsByUserId,
  updatePostById,
  deletePostById,
  getAllPosts,
} = require("../Controller/post.controller");
const requiredSignin = require("../middleWareAuth/requiredSignin");
const route = app.Router();

route.post("/posts/createpost", requiredSignin, createPost);

route.get("/posts/getAllPosts", getAllPosts);

route.get("/user/:id/posts", findPostsByUserId);

route.delete("/posts/deletepostbyid/:id", deletePostById);

route.put("/post/:id/updatepost", updatePostById);

module.exports = route;
