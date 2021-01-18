import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import postReducer from "./post.reducer"

const rootReducer = combineReducers({
  auth: authReducer,
  post : postReducer
  
});

export default rootReducer;
