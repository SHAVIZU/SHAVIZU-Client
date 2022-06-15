import { getRequest } from "./../default/index";

export const getShopProducts = async (
  id: number | string,
  brand: string | undefined,
  category: string | undefined,
  size: string | undefined
) => {
  try {
    const request = getRequest();
    const req = await request.get(
      "/shop/items?shop_id=" +
        id +
        `${brand === "" ? "" : `&brand=${brand}`}` +
        `${category === "" ? "" : `&category=${category}`}` +
        `${size === "" ? "" : `&size=${size}`}`
    );
    return req;
  } catch (err: any) {
    return Promise.reject(err);
  }
};
