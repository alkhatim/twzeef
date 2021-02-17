import { deputiesConstants } from "../constants/deputiesConstants";
import http from "../../services/http";
import messages from "../../services/messages";

export const getDeputies = async () => {
  try {
    const result = await http.get("/deputies/mydeputies");
    const deputies = result.data.data;
    return deputies;
  } catch (error) {
    messages.error(error);
  }
};

export const getDeputy = async (id) => {
  try {
    const result = await http.get(`/deputies/${id}`);
    const deputy = result.data.data;
    return deputy;
  } catch (error) {
    messages.error(error);
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

export const EditDeputy = async (dep) => {
  try {
    const result = await http.put(`/deputies/${dep._id}`, dep);
    const deputy = result.data.data;
    messages.success("Edited Successfully");
    return deputy;
  } catch (error) {
    messages.error(error);
  }
};

export const deleteDeputy = async (id) => {
  try {
    await http.delete(`/deputies/${id}`);
    messages.success("Deleted Successfully");
  } catch (error) {
    messages.error(error);
  }
};
