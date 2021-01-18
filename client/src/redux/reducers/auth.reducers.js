import { authActionTypes } from "../actions/action-types";

const initialState = {
  user: null,
  loading: false,
  message: "",
  error: "",
  token: null
};

const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case authActionTypes.REGISTER_REQUEST:
      state = {
        ...state,
        loading: true,
        message: "registeration is in process...",
      };
      break;



    case authActionTypes.REGISTER_SUCCESS:
     
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        user: action.payload.user,
      };
      break;

    case authActionTypes.SIGNIN_REQUEST:
      state = {
        ...state,
        loading: true,
        message: "login  is in process...",
      };
      break;
    case authActionTypes.SIGNIN_SUCCESS:
      const { token, user, message } = action.payload;
      console.log(token, user, message)
      console.log("------> saving data in localstorage....")
      localStorage.setItem('token', token);
      localStorage.setItem('user', user)
      state = {
        ...state,
        loading: false,
        message: message,
        user: user,
        token: token,
      };
      break;
    default:
      break;
  }
  return state;
};

export default authReducer;
