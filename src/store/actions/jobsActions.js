import http from "../../services/http";
import messages from "../../services/messages";

export const getAllJobsAction = async () => {
  try {
    const result = await http.get(`/jobs/my-jobs`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getOpenJobsAction = async () => {
  try {
    const result = await http.get(`/jobs/open`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClosedJobsAction = async () => {
  try {
    const result = await http.get(`/jobs/closed`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getArchivedJobsAction = async () => {
  try {
    const result = await http.get(`/jobs/archived`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getJobsWithApplicantsAction = async () => {
  try {
    const result = await http.get(`/jobs/with-applicants`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getCountryJobsAction = async (countryID) => {
  try {
    const result = await http.get("/jobs/country/" + countryID);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getCategoryJobsAction = async (categoryID) => {
  try {
    const result = await http.get("/jobs/category/" + categoryID);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getHasApplicantsJobsAction = async () => {
  try {
    const result = await http.get("/jobs/with-applicants");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};
