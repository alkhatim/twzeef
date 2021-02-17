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

export const getDelegates = async () => {
  try {
    const result = await http.get("/delegates/my-delegates");
    const delegates = result.data.data;
    return delegates;
  } catch (error) {
    messages.error(error);
  }
};
