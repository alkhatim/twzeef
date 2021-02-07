import { agencyUsersConstants } from "../constants/agencyUsersConstants";
import http from "../../services/http";
import messages from "../../services/messages";

export const postAgencyUser = async (user) => {
  try {
    const result = await http.post("/auth/registeragencyusers", user);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getAgencyUsers = () => async (dispatch) => {
  try {
    const result = await http.get("/auth/agencyusers");
    const agencyUsers = result.data.data;
    dispatch({
      type: agencyUsersConstants.GET_AGENCY_USERS_SUCCESS,
      payload: agencyUsers,
    });
  } catch (error) {
    messages.error(error);
    dispatch({
      type: agencyUsersConstants.GET_AGENCY_USERS_FAIL,
    });
  }
};

export const deleteAgencyUser = async (id) => {
  try {
    const result = await http.delete("/auth/agencyuser/" + id);
    if (result) {
      messages.success("تم الحذف");
    }
  } catch (error) {
    messages.error(error);
  }
};

export const getAgencyUser = async (id) => {
  try {
    const result = await http.get("/auth/agencyuser/" + id);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const updateAgencyUser = async (id, user) => {
  try {
    const result = await http.put("/auth/agencyuser/" + id, user);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const changePassword = async (id, body) => {
  try {
    const result = await http.post(
      "/auth/agencyusers/changepassword" + id,
      body
    );
    if (result) {
      messages.success("تم تغيير كلمةالمرور");
    }
  } catch (error) {
    messages.error(error);
  }
};
