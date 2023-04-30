import axios from "axios";
import Swal from "sweetalert2";

export const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use(
  (config) => {
    return config;
  },

  (error) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.response.data.message,
    });
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.response.data.message,
    });
    return Promise.reject(error);
  }
);

export default Axios;






