import axios from "axios";

const token =
  localStorage.getItem("token") || localStorage.getItem("tempToken");

const http = axios.create({
  headers: { Authorization: `Bearer ${token}` },
});

const defaultHeader = () => {
  http.interceptors.request.use(
    function (config) {
      const token =
        localStorage.getItem("token") || localStorage.getItem("tempToken");
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    function (error) {
      throw error;
    }
  );
};

http.interceptors.response.use(null, (error) => {
  if (
    error.request.responseType === "blob" &&
    error.message === "Network Error"
  ) {
    return;
  }
  console.log(error);
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("خطأ في الاتصال الرجاء المحاولة لاحقا", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
    });
  }
  return Promise.reject(error);
});

export default {
  defaultHeader,
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
};
