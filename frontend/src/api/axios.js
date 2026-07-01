import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/api";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const url = error.config?.url || "";

    // Redirect only for admin APIs
    if (status === 401 && url.startsWith("/admin")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.replace("/admin/login");
    }

    return Promise.reject(error);
  }
);

export default api;