import { postActionTypes } from "../actions/action-types";

const initialState = {
  post: null,
  loading: false,
  message: "",
  error: "",
  posts: [],
};

const postReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case postActionTypes.CREATE_POST_REQUEST:
      state = {
        ...state,
        loading: true,
        message: "creating new post in process..",
      };
      break;

    // success case

    case postActionTypes.CREATE_POST_SUCCESS:
      
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        posts: [{ ...action.payload.post }, ...state.posts],
      };
      //   state.posts.push(action.payload.post);
      break;

    case postActionTypes.GET_POSTS_REQUEST:
      state = {
        ...state,
        loading: true,
        message: "fetching all the posts...",
      };
      break;
    case postActionTypes.GET_POSTS_SUCCESS:
      state = {
        ...state,
        posts: action.payload.posts,
        message: action.payload.message,
        loading: false,
      };
      break;

    case postActionTypes.DELETE_POST_REQUEST:
      state = {
        ...state,
        loading: true,
        message: "feaching the post for delete purpose",
      };
      break;
    case postActionTypes.DELETE_POST_SUCCESS:
      const _id = action.payload._id;
      //delete the object of post from the array where post _id = _id
      state.posts = state.posts.filter((p) => p._id !== _id);
      state = {
        ...state,
        message: action.payload.message,
        loading: false,
      };
      break;

    /// post update action
    case postActionTypes.UPDATE_POST_REQUEST:
      state = {
        ...state,
        loading: true,
        message: "update post request"
      };
      break;

    case postActionTypes.UPDATE_POST_SUCCESS:
      //find and update
      const post = action.payload.post;
      const newPosts = state.posts.map(p => {
        if(p._id === post._id ) {
          p.title = post.title;
          p.text = post.text
        }
        return p;
      });
      
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        posts: newPosts
      };
      break;
    default:
      
  }

  return state;
};

export default postReducer;
