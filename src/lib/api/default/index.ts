import axios from "axios";

axios.defaults.baseURL = "http://15.164.162.72/";
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
      withCredentials: true,
    },
    responseType: type,
    withCredentials: true,
  });

  return request;
};
