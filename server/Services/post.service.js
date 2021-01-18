const Post = require("../Models/post.model");
exports.findPostByTitleAndText = (text, title) => {
  return Post.find({
    $and: [
      {
        text: text,
      },
      {
        title: title,
      },
    ],
  })
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

exports.saveUserPost = (body, userId) => {
  return Post({ ...body, postedBy: userId })
    .save()
    .then((data) => {
      console.log(data);
      return {
        status: 201,
        data: data,
      };
    })
    .catch((err) => {
      console.log(err);
      return {
        status: 400,
        error: err,
      };
    });
};

//post get

exports.getPostsByUserId = (id) => {
  return Post.find({ postedBy: id })
    .then((data) => {
      console.log(data);
      return {
        status: 200,
        messsage: "data fetched!",
        data,
      };
    })
    .catch((err) => {
      console.log(err);
      return {
        status: 400,
        error: err,
      };
    });
};

// update the post

exports.findAndUpdatePostById = (id, body) => {
  return Post.findOneAndUpdate({ _id: id }, body)
    .then((data) => {
      return {
        status: 200,
        data: "post has been updated",
        post: data
      };
    })
    .catch((err) => {
      return {
        status: 400,
        error: err,
      };
    });
};

// delete the posts
exports.findOneAndDeleteById = (id) => {
  return Post.findOneAndDelete({ _id: id })
    .then((data) => {
      return {
        status: 200,
        message: "post has been delete",
      };
    })
    .catch((err) => {
      console.log(err);
      return {
        status: 400,
        error: err,
      };
    });
};

exports.findAllPosts = () => {
  return Post.find()
    .then((data) => {
      return {
        status: 200,
        message: "Posts fetched!",
        posts: data,
      };
    })
    .catch((err) => {
      console.log(err);
      return {
        status: 400,
        error: err,
      };
    });
};
