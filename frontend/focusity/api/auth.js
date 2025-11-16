import api from "./api";
import { TokenService } from "./TokenService";
import axios from "axios";

export async function login(username, password) {
  //const res = await api.post("/auth/login", { username, password });
  const res = axios.post("http://192.168.1.12:8080/auth/login", { username, password })


  await TokenService.saveTokens({
    accessToken: res.data.accessToken,
    refreshToken: res.data.refreshToken,
  });

  return res.data.user;
}
