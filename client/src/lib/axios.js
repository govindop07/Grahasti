import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://grahasti-backend.onrender.com",
  withCredentials: true,
})

export default axiosInstance;
