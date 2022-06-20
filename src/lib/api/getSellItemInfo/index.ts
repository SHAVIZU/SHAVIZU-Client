import { getRequestWithToken } from "../default";

export const getSellItemInfoRequest = async(token:string, sell_id:number) => {
    try{
        const request = getRequestWithToken(token);
        const req = await request.get(`/sells/${sell_id}`);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}