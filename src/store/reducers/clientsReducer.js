import { clientsConstants } from "../constants/clientsConstants";

const initialState = {
  clients: [],
  client: { name: "", phoneNumber: "" },
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case clientsConstants.GET_CLIENTS_SUCCESS:
      return { ...state, clients: action.payload, loading: false };

    case clientsConstants.GET_CLIENT_SUCCESS:
      return { ...state, client: action.payload };

    case clientsConstants.ADD_CLIENT_SUCCESS:
      return state;
    case clientsConstants.EDIT_CLIENT_SUCCESS:
      const index = state.clients.findIndex(
        (r) => r._id === action.payload._id
      );
      const updatedDeputies = [...state.clients];
      updatedDeputies.splice(index, 1, action.payload);
      return {
        ...state,
        clients: updatedDeputies,
      };

    case clientsConstants.DELETE_CLIENT_SUCCESS:
      return {
        ...state,
        clients: state.clients.filter((r) => r._id !== action.payload),
      };

    case clientsConstants.GET_CLIENTS_FAIL:
      return state;

    case clientsConstants.GET_CLIENT_FAIL:
      return state;

    case clientsConstants.ADD_CLIENT_FAIL:
      return state;

    case clientsConstants.EDIT_CLIENT_FAIL:
      return state;

    case clientsConstants.DELETE_CLIENT_FAIL:
      return state;

    default:
      return state;
  }
};
