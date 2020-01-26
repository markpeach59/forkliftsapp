import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiURL + "/dealers";

export function getDealers() {
  return http.get(apiEndPoint);
}

export function registerDealer(dealername, dealermarkup) {
  return http.post(apiEndPoint, { dealername, dealermarkup });
}
