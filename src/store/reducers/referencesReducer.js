import { referencesConstants } from "../constants/referencesConstants";

const initialState = {
  references: [],
  reference: { name: "", email: "", phoneNumber: "" },
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case referencesConstants.GET_REFERENCES_SUCCESS:
      return { ...state, references: action.payload, loading: false };

    case referencesConstants.GET_REFERENCE_SUCCESS:
      return { ...state, reference: action.payload };

    case referencesConstants.ADD_REFERENCE_SUCCESS:
      return state;
    case referencesConstants.EDIT_REFERENCE_SUCCESS:
      const index = state.references.findIndex(
        (r) => r._id === action.payload._id
      );
      const updatedReferences = [...state.references];
      updatedReferences.splice(index, 1, action.payload);
      return {
        ...state,
        references: updatedReferences,
      };

    case referencesConstants.DELETE_REFERENCE_SUCCESS:
      return {
        ...state,
        references: state.references.filter((r) => r._id !== action.payload),
      };

    case referencesConstants.GET_REFERENCES_FAIL:
      return state;

    case referencesConstants.GET_REFERENCE_FAIL:
      return state;

    case referencesConstants.ADD_REFERENCE_FAIL:
      return state;

    case referencesConstants.EDIT_REFERENCE_FAIL:
      return state;

    case referencesConstants.DELETE_REFERENCE_FAIL:
      return state;

    default:
      return state;
  }
};
