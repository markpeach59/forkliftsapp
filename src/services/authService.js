import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiURL } from "../config.json";

const apiEndPoint = apiURL + "/auth";

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    //console.log(jwtDecode(jwt));
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser
};
