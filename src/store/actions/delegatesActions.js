import { delegatesConstants } from "../constants/delegatesConstants";
import http from "../../services/http";
import messages from "../../services/messages";

export const getDelegate = async (id) => {
  try {
    const result = await http.get(`/delegates/${id}`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const updateDelegate = async (delegate) => {
  try {
    const result = await http.put(`/delegates/${delegate._id}`, delegate);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const addDelegate = async (delegate) => {
  try {
    const result = await http.post("/delegates", delegate);
    return result.data.data._id;
  } catch (error) {
    messages.error(error);
  }
};

export const getDelegates = () => async (dispatch) => {
  try {
    const result = await http.get("/delegates/my-delegates");
    const delegates = result.data.data;
    dispatch({
      type: delegatesConstants.GET_DELEGATES_SUCCESS,
      payload: delegates,
    });
  } catch (error) {
    messages.error(error);
    dispatch({
      type: delegatesConstants.GET_DELEGATES_FAIL,
    });
  }
};
