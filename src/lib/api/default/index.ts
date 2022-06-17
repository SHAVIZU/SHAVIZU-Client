import axios from "axios";

axios.defaults.baseURL = "http://13.125.216.132/";
export const request = axios.create({
  timeout: 10000,
});

export const getRequestWithToken = (
  token: string,
  type: "json" | "blob" | "text" = "json"
) => {
  const request = axios.create({
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${token}`,
      CacheControl: "no-cache",
    },
    responseType: type,
  });

  return request;
};

export const getRequest = (type: "json" | "blob" | "text" = "json") => {
  const request = axios.create({
    timeout: 10000,
    headers: {},
    responseType: type,
  });

  return request;
};
