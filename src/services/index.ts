import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_MRKM_API_URL,
  headers: {
    Authorization: localStorage.getItem("token")
      ? "Bearer " + localStorage.getItem("token")
      : "",
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;