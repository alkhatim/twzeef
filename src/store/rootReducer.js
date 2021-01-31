import { combineReducers } from "redux";
import layout from "./reducers/layoutReducer";
import auth from "./reducers/authReducer";

const rootReducer = combineReducers({
  layout,
  auth,
});

export default rootReducer;
