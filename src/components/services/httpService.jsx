import axios from "axios";
import logger from "./logService";

axios.interceptors.response.use(
  (success) => {
    return success;
  },
  (error) => {
    // ERROR EVENT CALLED
    const { response } = error;
    const expectedError =
      response && response.status >= 400 && response.status < 500;

    // IF ERROR EVENT UNEXPECTED
    if (!expectedError) {
      logger.log(error);
    }

    // IF ERROR EVENT EXPECTED
    return Promise.reject(error);
  }
);

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};

export default http;
