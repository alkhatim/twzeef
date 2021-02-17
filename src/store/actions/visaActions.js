import http from "../../services/http";
import messages from "../../services/messages";

export const getVisa = async (visaId) => {
  try {
    const result = await http.get(`/visas/${visaId}`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const postVisa = async (visa) => {
  try {
    const result = await http.post("/visas", visa);
    return result.data.data._id;
  } catch (error) {
    messages.error(error);
  }
};

export const updateVisa = async (visa) => {
  try {
    const result = await http.put(`/visas/${visa._id}`, visa);
    return result.data.data._id;
  } catch (error) {
    messages.error(error);
  }
};

export const deleteVisa = async (id) => {
  try {
    const result = await http.delete(`/visas/${id}`);
    if (result) {
      messages.success("تم مسح التأشيرة");
    }
  } catch (error) {
    messages.error(error);
  }
};

export const addJob = async (visaId, job) => {
  try {
    const result = await http.put(`/visas/${visaId}/addjobs`, job);
    return result.data.data.jobs.slice(-1)[0];
  } catch (error) {
    messages.error(error);
  }
};

export const removeJob = async (visaId, job) => {
  try {
    const result = await http.delete(`/visas/${visaId}/${job._id}/remove`);
    if (result) {
      messages.success("تم مسح الوظيفة");
    }
  } catch (error) {
    messages.error(error);
  }
};

export const getVisaTypes = async (id) => {
  try {
    const result = await http.get(`/visatypes/${id}/country`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getAllVisaTypes = async () => {
  try {
    const result = await http.get("/visatypes");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getJobLists = async () => {
  try {
    const result = await http.get(`/joblist?limit=5000`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getVisas = async () => {
  try {
    const result = await http.get("/visas/myagencyvisas");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};
