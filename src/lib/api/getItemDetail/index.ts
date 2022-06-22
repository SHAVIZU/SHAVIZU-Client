import { getRequestWithToken } from "../default";

export const getItemDetailRequest = async(token:string, sell_id:number) => {
    try{
        const req = await getRequestWithToken(token).get(`/sells/details/${sell_id}`);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}