import axios from "axios";
import { getSession } from "next-auth/react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(async (request) => {
  const session = await getSession();

  if (session) {
    request.headers.Authorization = `Bearer ${session.accessToken}`;
  }

  return request;
});

export const api = axiosInstance;
