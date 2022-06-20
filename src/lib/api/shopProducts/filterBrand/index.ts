import { getRequest } from "../../default/index";

export const getShopBrands = async (id: number | string) => {
  try {
    const request = getRequest();
    // /shop/brands?shop_id=1
    const req = await request.get("/shop/brands?shop_id=" + id);
    return req;
  } catch (err: any) {
    return Promise.reject(err);
  }
};
