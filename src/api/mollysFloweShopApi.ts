import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const mollysFloweShopApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

mollysFloweShopApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
