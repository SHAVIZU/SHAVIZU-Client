import { getRequest } from "./../default/index";

export const getSearchProduct = async (
  topic: string,
  inputValue: string,
  category: string | undefined
) => {
  try {
    const request = getRequest();
    const req = await request.get(
      "/search/item?" +
        `${topic === "style_code" ? `style_code=${inputValue}` : ""}` +
        `${topic === "name" ? `name=${inputValue}` : ""}` +
        `${topic === "brand" ? `brand=${inputValue}` : ""}` +
        `${category === "" ? "" : `categoty=${category}`}`
    );
    return req;
  } catch (err: any) {
    return Promise.reject(err);
  }
};
