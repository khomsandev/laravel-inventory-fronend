import axios from "axios";

const authService = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  },
});

export default authService;