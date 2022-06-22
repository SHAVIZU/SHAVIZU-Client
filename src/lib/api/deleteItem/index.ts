import { getRequestWithToken } from "../default";

export const deleteItemRequest = async(token:string, sell_id:number) => {
    try{
        const req = await getRequestWithToken(token).delete(`/sells/${sell_id}`);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}