import { getRequestWithToken } from "../default";

export const getItemInfoRequest = async(token:string, item_id:number) => {
    try{
        const request = getRequestWithToken(token);
        const req = await request.get(`/items/details/${item_id}`);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}