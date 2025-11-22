import api from "./api";
import { TokenService } from "./TokenService";
import axios from "axios";

export async function login(username, password) {
  const res = await axios.post("http://192.168.1.12:8080/auth/login", { username, password })

  await TokenService.saveTokens({
    accessToken: res.data.accessToken,
    refreshToken: res.data.refreshToken,
  });

  return res.data.user;
}

export async function register(username, email, password) {
  const res = await axios.post("http://192.168.1.12:8080/auth/register", { username, email, password })

  login(username, password)

  return res.data.user;
}