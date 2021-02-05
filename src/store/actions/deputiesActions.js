import { deputiesConstants } from "../constants/deputiesConstants";
import http from "../../services/http";
import messages from "../../services/messages";

export const getDeputies = () => async (dispatch) => {
  try {
    const result = await http.get("/deputies/mydeputies");
    const deputies = result.data.data;
    dispatch({
      type: deputiesConstants.GET_DEPUTIES_SUCCESS,
      payload: deputies,
    });
  } catch (error) {
    messages.error(error);
    dispatch({
      type: deputiesConstants.GET_DEPUTIES_FAIL,
    });
  }
};

export const getDeputy = (id) => async (dispatch) => {
  try {
    const result = await http.get(`/deputies/${id}`);
    const deputy = result.data.data;
    dispatch({
      type: deputiesConstants.GET_DEPUTY_SUCCESS,
      payload: deputy,
    });
  } catch (error) {
    messages.error(error);
    dispatch({
      type: deputiesConstants.GET_DEPUTY_FAIL,
    });
  }
};

export const addDeputy = async (dep) => {
  try {
    const result = await http.post(`/deputies`, dep);
    const deputy = result.data.data;
    messages.success("added");
    return deputy;
  } catch (error) {
    messages.error(error);
  }
};

export const EditDeputy = (dep) => async (dispatch) => {
  try {
    const result = await http.put(`/deputies/${dep._id}`, dep);
    const deputy = result.data.data;
    dispatch({
      type: deputiesConstants.EDIT_DEPUTY_SUCCESS,
      payload: deputy,
    });
    messages.success("Edited Successfully");
  } catch (error) {
    messages.error(error);
    dispatch({
      type: deputiesConstants.EDIT_DEPUTY_FAIL,
    });
  }
};

export const deleteDeputy = (id) => async (dispatch) => {
  try {
    await http.delete(`/deputies/${id}`);
    dispatch({
      type: deputiesConstants.DELETE_DEPUTY_SUCCESS,
      payload: id,
    });
    messages.success("Deleted Successfully");
  } catch (error) {
    messages.error(error);
    dispatch({
      type: deputiesConstants.DELETE_DEPUTY_FAIL,
    });
  }
};
