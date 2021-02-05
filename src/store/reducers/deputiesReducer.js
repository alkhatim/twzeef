import { deputiesConstants } from "../constants/deputiesConstants";

const initialState = {
  selectedRow: null,
  columns: [
    { title: "الوكيل", field: "name", editable: "never" },
    { title: "البريد الالكتروني", field: "email", editable: "never" },
    { title: "المالك", field: "ownerName", editable: "never" },
    { title: "هاتف المالك", field: "ownerPhone", editable: "never" },
    { title: "المدير", field: "CEOName", editable: "never" },
    { title: "هاتف المدير", field: "CEOPhone", editable: "never" },
    { title: "المسؤول", field: "coordinatorName", editable: "never" },
    { title: "هاتف المسؤول", field: "coordinatorPhone", editable: "never" },
    { title: "النوع", field: "deputyType", editable: "never" },
    { title: "هامش الربح", field: "profitAmount", editable: "never" },
    { title: "العملة", field: "profitCurrency", editable: "never" },
    { title: "الموقع", field: "location", editable: "never" },
    { title: "ملاحظات", field: "notes", editable: "never" },
  ],
  deputies: [],
  deputy: { name: "", phoneNumber: "" },
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case deputiesConstants.GET_DEPUTIES_SUCCESS:
      return { ...state, deputies: action.payload, loading: false };

    case deputiesConstants.GET_DEPUTY_SUCCESS:
      return { ...state, deputy: action.payload };

    case deputiesConstants.ADD_DEPUTY_SUCCESS:
      return state;
    case deputiesConstants.EDIT_DEPUTY_SUCCESS:
      const index = state.deputies.findIndex(
        (r) => r._id === action.payload._id
      );
      const updatedDeputies = [...state.deputies];
      updatedDeputies.splice(index, 1, action.payload);
      return {
        ...state,
        deputies: updatedDeputies,
      };

    case deputiesConstants.DELETE_DEPUTY_SUCCESS:
      return {
        ...state,
        deputies: state.deputies.filter((r) => r._id !== action.payload),
      };

    case deputiesConstants.GET_DEPUTIES_FAIL:
      return state;

    case deputiesConstants.GET_DEPUTY_FAIL:
      return state;

    case deputiesConstants.ADD_DEPUTY_FAIL:
      return state;

    case deputiesConstants.EDIT_DEPUTY_FAIL:
      return state;

    case deputiesConstants.DELETE_DEPUTY_FAIL:
      return state;

    default:
      return state;
  }
};
