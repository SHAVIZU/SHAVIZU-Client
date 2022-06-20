import { getRequest } from "../../default/index";

export const getShopSizes = async (
  id: number | string,
  category: string[]
) => {
  try {
    const request = getRequest();
    // /shop/sizes?shop_id=1&category=['top', 'bottom']
    const req = await request.get(
      "/shop/sizes?shop_id=" + id + "&category" + category
    );
    return req;
  } catch (err: any) {
    return Promise.reject(err);
  }
};
