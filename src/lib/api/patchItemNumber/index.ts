import { getRequestWithToken } from "../default";

type sizeType = {
  inventories: [
    {
      item_size_id: number;
      amount: number;
    }
  ];
};
export const patchItemNumberRequest = async(token:string, sell_id:number, data:sizeType) => {
    try{
        const req = await getRequestWithToken(token).patch(`/sells/inventory/${sell_id}`, data);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}