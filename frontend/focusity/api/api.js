import axios from "axios";
import { TokenService } from "./TokenService";

const api = axios.create({
  baseURL: "http://192.168.1.12:8080",
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });

  failedQueue = [];
};

// Interceptor per aggiungere automaticamente l'access token
api.interceptors.request.use(async (config) => {
  const token = await TokenService.getAccessToken();
  console.log("AccessToken letto", token)
  if (token) config.headers.Authorization = `Bearer ${token}`;
  console.log("config", config)
  return config;
});

// Interceptor risposta: gestisce token scaduto
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log(" $$$$$$$$$$$$$$$$      RESPONSE ", response)
    // se 401 = token scaduto
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers.Authorization = "Bearer " + token;
          return api(originalRequest);
        });
      }

      isRefreshing = true;

      try {
        const refreshToken = await TokenService.getRefreshToken();
        const res = await axios.post("http://localhost:8080/auth/token", {
          refreshToken,
        });

        const newAccessToken = res.data.accessToken;

        await TokenService.saveTokens({
          accessToken: newAccessToken,
          refreshToken, // se rimane lo stesso
        });

        processQueue(null, newAccessToken);

        api.defaults.headers.Authorization = "Bearer " + newAccessToken;
        originalRequest.headers.Authorization = "Bearer " + newAccessToken;

        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);
        await TokenService.clear();
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
