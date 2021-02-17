import { referencesConstants } from "../constants/referencesConstants";
import http from "../../services/http";
import messages from "../../services/messages";

export const getReferences = async () => {
  try {
    const result = await http.get("/references/myreferences");
    const references = result.data.data;
    return references;
  } catch (error) {
    messages.error(error);
  }
};

export const getReference = async (id) => {
  try {
    const result = await http.get(`/references/${id}`);
    const reference = result.data.data;
    return reference;
  } catch (error) {
    messages.error(error);
  }
};

export const addReference = async (ref) => {
  try {
    const result = await http.post(`/references`, ref);
    messages.success("Added Successfully");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const EditReference = async (id, name, email, phone) => {
  try {
    const result = await http.put(`/references/${id}`, {
      name: name,
      email: email,
      phoneNumber: phone,
    });
    const reference = result.data.data;
    messages.success("Edited Successfully");
    return reference;
  } catch (error) {
    messages.error(error);
  }
};

export const deleteReference = async (id) => {
  try {
    await http.delete(`/references/${id}`);
    messages.success("Deleted Successfully");
  } catch (error) {
    messages.error(error);
  }
};
