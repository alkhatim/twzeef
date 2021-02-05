import { combineReducers } from "redux";
import layout from "./reducers/layoutReducer";
import auth from "./reducers/authReducer";
import references from "./reducers/referencesReducer";
import deputies from "./reducers/deputiesReducer";

const rootReducer = combineReducers({
  layout,
  auth,
  references,
  deputies,
});

export default rootReducer;
