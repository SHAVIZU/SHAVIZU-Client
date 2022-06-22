import { getRequestWithToken } from "../default";

export const postImgRequest = async(token:string, data:FormData) => {
    try{
         const request = getRequestWithToken(token);
        const req = await request.post(`/shops/image`,data);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}