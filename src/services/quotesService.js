import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiURL + "/quotes";

export function getQuotes() {
  return http.get(apiEndPoint);
}

export function savequote(quote) {
  //console.log("quote items ", quote);

  return http.post(apiEndPoint, quote);
}

export function getQuoteDetail(id) {
  return http.get(apiEndPoint + "/" + id);
}
