import AxiosInstance from "../Axios";
import { authActionTypes } from "./action-types";
export const registerUserAction = (user) => {
  return async (dispatch) => {
    //each dispatch() handled by the corresponding reducers
    dispatch({
      type: authActionTypes.REGISTER_REQUEST,
    });
    const res = await AxiosInstance.post("/register", user);

    if (res.status === 201) {
      dispatch({
        type: authActionTypes.REGISTER_SUCCESS,
        payload: {
          // user: res.data.user,
          message: res.data.message,
        },
      });
    } else {
      //failed case
    }
  };
};

export const signInUserAction = (user) => {
  return async (dispatch) => {
    // req the user
    dispatch({
      type: authActionTypes.SIGNIN_REQUEST,
    });
    const res = await AxiosInstance.post("/login", user);
    if (res.status === 200) {
      console.log("--- user details ----")
      console.log(res.data.user)
      dispatch({
        type: authActionTypes.SIGNIN_SUCCESS,
        payload: {
          user: res.data.user,
          token: res.data.token,
          message: res.data.message,
        },
      });
    } else {
      // fail
    }
  };
};
