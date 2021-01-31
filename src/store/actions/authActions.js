import http from "../../services/http";
import messages from "../../services/messages";

export const login = (credentials) => async (dispatch) => {
  try {
    const { data } = await http.post("/auth/login", {
      userName: credentials.username,
      password: credentials.password,
    });

    if (credentials.rememberMe) localStorage.setItem("token", data.token);
    else localStorage.setItem("tempToken", data.token);

    http.defaultHeader();

    dispatch({
      type: "LOGGED_IN",
      payload: data,
    });
  } catch (error) {
    messages.error(error);
    dispatch({
      type: "LOGIN_FAILED",
    });
  }
};

export const loadUser = () => async (dispatch) => {
  localStorage.removeItem("tempToken");
  const token = localStorage.getItem("token");
  if (!token)
    dispatch({
      type: "LOGIN_FAILED",
    });
  try {
    const { data } = await http.get("/auth/my-account", {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({
      type: "LOGGED_IN",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILED",
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.clear();
  dispatch({
    type: "LOGGED_OUT",
  });
};
