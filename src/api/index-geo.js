import axios from "axios";

const apiURL = import.meta.env.VITE_API_GEO;

const api = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
