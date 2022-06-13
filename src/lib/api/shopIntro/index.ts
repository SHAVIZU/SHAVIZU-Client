import { getRequest } from "./../default/index";
import { shopType } from "../../types/shopIntro";

export const getShopDetail = async (id: number | string) => {
  try {
    const request = getRequest();
    const req: shopType = await request.get("/shop?shop_id=" + id);
    return req;
  } catch (err: any) {
    return Promise.reject(err);
  }
};
