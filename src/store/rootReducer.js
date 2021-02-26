import { combineReducers } from "redux";
import layout from "./reducers/layoutReducer";
import auth from "./reducers/authReducer";
import references from "./reducers/referencesReducer";
import deputies from "./reducers/deputiesReducer";
import delegates from "./reducers/delegatesReducer";
import agencyUsers from "./reducers/agencyUsersReducer";
import clients from "./reducers/clientsReducer";
import wallet from "./reducers/walletReducer";

const rootReducer = combineReducers({
  layout,
  auth,
  references,
  deputies,
  delegates,
  agencyUsers,
  clients,
  wallet,
});

export default rootReducer;
