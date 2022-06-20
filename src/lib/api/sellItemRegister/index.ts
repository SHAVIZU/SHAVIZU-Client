import { getRequestWithToken } from "../default";

export const sellItemRegisterRequest = async(token:string, item_id:number, data:any) => {
    try{
        const request = getRequestWithToken(token);
        const req = await request.post(`/sells?item_id=${item_id}`, data);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}