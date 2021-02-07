import { combineReducers } from "redux";
import layout from "./reducers/layoutReducer";
import auth from "./reducers/authReducer";
import references from "./reducers/referencesReducer";
import deputies from "./reducers/deputiesReducer";
import delegates from "./reducers/delegatesReducer";
import agencyUsers from "./reducers/agencyUsersReducer";

const rootReducer = combineReducers({
  layout,
  auth,
  references,
  deputies,
  delegates,
  agencyUsers,
});

export default rootReducer;
