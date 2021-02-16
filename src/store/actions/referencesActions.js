import { referencesConstants } from "../constants/referencesConstants";
import http from "../../services/http";
import messages from "../../services/messages";

export const getReferences = () => async (dispatch) => {
  try {
    const result = await http.get("/references/myreferences");
    const references = result.data.data;
    dispatch({
      type: referencesConstants.GET_REFERENCES_SUCCESS,
      payload: references,
    });
  } catch (error) {
    messages.error(error);
    dispatch({
      type: referencesConstants.GET_REFERENCES_FAIL,
    });
  }
};

export const getReferences__ = async () => {
  try {
    const result = await http.get("/references/myreferences");
    const references = result.data.data;
    return references;
  } catch (error) {
    messages.error(error);
  }
};

export const getReference = (id) => async (dispatch) => {
  try {
    const result = await http.get(`/references/${id}`);
    const reference = result.data.data;
    dispatch({
      type: referencesConstants.GET_REFERENCE_SUCCESS,
      payload: reference,
    });
  } catch (error) {
    messages.error(error);
    dispatch({
      type: referencesConstants.GET_REFERENCE_FAIL,
    });
  }
};

export const addReference = async (ref) => {
  try {
    const result = await http.post(`/references`, ref);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const EditReference = (id, name, email, phone) => async (dispatch) => {
  try {
    const result = await http.put(`/references/${id}`, {
      name: name,
      email: email,
      phoneNumber: phone,
    });
    const reference = result.data.data;
    dispatch({
      type: referencesConstants.EDIT_REFERENCE_SUCCESS,
      payload: reference,
    });
    messages.success("Edited Successfully");
  } catch (error) {
    messages.error(error);
    dispatch({
      type: referencesConstants.EDIT_REFERENCE_FAIL,
    });
  }
};

export const deleteReference = (id) => async (dispatch) => {
  try {
    await http.delete(`/references/${id}`);
    dispatch({
      type: referencesConstants.DELETE_REFERENCE_SUCCESS,
      payload: id,
    });
    messages.success("Deleted Successfully");
  } catch (error) {
    messages.error(error);
    dispatch({
      type: referencesConstants.DELETE_REFERENCE_FAIL,
    });
  }
};
