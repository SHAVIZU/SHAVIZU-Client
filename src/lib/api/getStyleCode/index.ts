import { getRequestWithToken } from "../default";

export const getStyleCodeRequest = async(token:string, id:string) => {
    try{
         const request = getRequestWithToken(token);
        const req = await request.get(`/items?style_code=${id}`);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}