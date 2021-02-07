import { agencyUsersConstants } from "../constants/agencyUsersConstants";

const initialState = {
  agencyUsers: [],
  agencyUser: { name: "", phoneNumber: "" },
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case agencyUsersConstants.GET_AGENCY_USERS_SUCCESS:
      return { ...state, agencyUsers: action.payload, loading: false };

    case agencyUsersConstants.GET_AGENCY_USER_SUCCESS:
      return { ...state, agencyUser: action.payload };

    case agencyUsersConstants.ADD_AGENCY_USER_SUCCESS:
      return state;
    case agencyUsersConstants.EDIT_AGENCY_USER_SUCCESS:
      const index = state.agencyUsers.findIndex(
        (r) => r._id === action.payload._id
      );
      const updatedDeputies = [...state.agencyUsers];
      updatedDeputies.splice(index, 1, action.payload);
      return {
        ...state,
        agencyUsers: updatedDeputies,
      };

    case agencyUsersConstants.DELETE_AGENCY_USER_SUCCESS:
      return {
        ...state,
        agencyUsers: state.agencyUsers.filter((r) => r._id !== action.payload),
      };

    case agencyUsersConstants.GET_AGENCY_USERS_FAIL:
      return state;

    case agencyUsersConstants.GET_AGENCY_USER_FAIL:
      return state;

    case agencyUsersConstants.ADD_AGENCY_USER_FAIL:
      return state;

    case agencyUsersConstants.EDIT_AGENCY_USER_FAIL:
      return state;

    case agencyUsersConstants.DELETE_AGENCY_USER_FAIL:
      return state;

    default:
      return state;
  }
};
