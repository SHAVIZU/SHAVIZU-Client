import { getRequest } from "./../default/index";

export const getSearchShop = async (
  maxLat: string | number,
  maxLng: string | number,
  minLat: string | number,
  minLng: string | number
) => {
  try {
    const request = getRequest();
    const productReq = await request.get(
      "/search/shop?max_lat=" +
        maxLat +
        "&max_lng=" +
        maxLng +
        "&min_lat=" +
        minLat +
        "&min_lng=" +
        minLng
    );
    return productReq;
  } catch (err: any) {
    return Promise.reject(err);
  }
};
