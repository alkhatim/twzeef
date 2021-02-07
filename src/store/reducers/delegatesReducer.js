import { delegatesConstants } from "../constants/delegatesConstants";

const initialState = {
  delegates: [],
  delegate: { name: "", phoneNumber: "" },
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case delegatesConstants.GET_DELEGATES_SUCCESS:
      return { ...state, delegates: action.payload, loading: false };

    case delegatesConstants.GET_DELEGATE_SUCCESS:
      return { ...state, delegate: action.payload };

    case delegatesConstants.ADD_DELEGATE_SUCCESS:
      return state;
    case delegatesConstants.EDIT_DELEGATE_SUCCESS:
      const index = state.delegates.findIndex(
        (r) => r._id === action.payload._id
      );
      const updatedDeputies = [...state.delegates];
      updatedDeputies.splice(index, 1, action.payload);
      return {
        ...state,
        delegates: updatedDeputies,
      };

    case delegatesConstants.DELETE_DELEGATE_SUCCESS:
      return {
        ...state,
        delegates: state.delegates.filter((r) => r._id !== action.payload),
      };

    case delegatesConstants.GET_DELEGATES_FAIL:
      return state;

    case delegatesConstants.GET_DELEGATE_FAIL:
      return state;

    case delegatesConstants.ADD_DELEGATE_FAIL:
      return state;

    case delegatesConstants.EDIT_DELEGATE_FAIL:
      return state;

    case delegatesConstants.DELETE_DELEGATE_FAIL:
      return state;

    default:
      return state;
  }
};
