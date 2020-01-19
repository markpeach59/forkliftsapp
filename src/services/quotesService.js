import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiURL + "/quotes";

export function getQuotes() {
  return http.get(apiEndPoint);
}

export function savequote(model, price) {
  return http.post(apiEndPoint, { model, price });
}

export function getQuoteDetail(id) {
  return http.get(apiEndPoint + "/" + id);
}
