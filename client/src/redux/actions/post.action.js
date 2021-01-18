import AxiosInstance from "../Axios";
import { postActionTypes } from "./action-types";

export const createNewPostAction = (post) => {
  // tchwe do dispatch action
  return async (dispatch) => {
    dispatch({
      type: postActionTypes.CREATE_POST_REQUEST,
    });

    const result = await AxiosInstance.post("/posts/createpost", post);
    if (result.status === 201) {
      dispatch({
        type: postActionTypes.CREATE_POST_SUCCESS,
        payload: {
          message: result.data.message,
          post: result.data.post,
        },
      });
    } else {
      //failed case
    }
  };
};

export const getAllPosts = () => {
  return async (dispatch) => {
    dispatch({
      type: postActionTypes.GET_POSTS_REQUEST,
    });

    const res = await AxiosInstance.get("/posts/getAllPosts");
    console.log(res);
    if (res.status === 200) {
      const { posts, message } = res.data;
      dispatch({
        type: postActionTypes.GET_POSTS_SUCCESS,
        payload: {
          posts: posts,
          message: message,
        },
      });
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    dispatch({
      type: postActionTypes.DELETE_POST_REQUEST,
    });

    const result = await AxiosInstance.delete(`/posts/deletepostbyid/${id}`);

    if (result.status === 200) {
      const { message } = result.data;
      dispatch({
        type: postActionTypes.DELETE_POST_SUCCESS,
        payload: {
          message: message,
          _id: id,
        },
      });
    }
  };
};

export const updatePostById = (post) => {
  // return
  return async (dispatch) => {
    dispatch({
      type: postActionTypes.UPDATE_POST_REQUEST,
    });

    const result = await AxiosInstance.put(
      `/post/${post._id}/updatepost`,
      post
    );
    if (result.status === 200) {
      const { message } = result.data;

      dispatch({
        type: postActionTypes.UPDATE_POST_SUCCESS,
        payload: {
          message: message,
          post: post,
        },
      });
    }
  };
};
