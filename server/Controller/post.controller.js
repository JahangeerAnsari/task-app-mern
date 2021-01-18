const { findOneAndDelete } = require("../Models/post.model");
const {
  saveUserPost,
  getPostsByUserId,
  findAndUpdatePostById,findOneAndDeleteById, findAllPosts
} = require("../Services/post.service");
exports.createPost = async (req, res) => {
  // save the post
  const savedPost = await saveUserPost(req.body, req.user._id);
  if (savedPost.status === 400) {
    return res.status(savedPost.status).json(savedPost);
  }
  res.status(savedPost.status).json({
    message: "Post has been created",
    post: savedPost.data,
  });
};

// get users post by user id

exports.findPostsByUserId = async (req, res) => {
  const { id } = req.body;
  const result = await getPostsByUserId(id);
  return res.status(result.status).json(result);
};

// update the post

exports.updatePostById = async (req, res) => {
  // we have to check the post and then updated the post
  const id = req.params.id;

  const result = await findAndUpdatePostById(id, req.body);

  return res.status(result.status).json(result);
};

//delete the post 

exports.deletePostById = async (req,res) =>{
  const id = req.params.id;
  const result = await findOneAndDeleteById(id);
  return res.status(result.status).json(result);
}

exports.getAllPosts = async (req, res) => {
  const result = await findAllPosts();
  return res.status(result.status).json(result)
}
