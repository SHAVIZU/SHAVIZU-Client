import { getRequestWithToken } from "../default";

export const patchItemDiscountRequest = async(token:string, sell_id:number, discount:number) => {
    try{
        const data = {
            discount_rate: discount
        }
        const req = await getRequestWithToken(token).patch(`/sells/discount/${sell_id}`, data);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}