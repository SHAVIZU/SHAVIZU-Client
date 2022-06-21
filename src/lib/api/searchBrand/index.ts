import { getRequestWithToken } from "../default";

export const searchBrandRequest = async(token:string, name:string) => {
    try{
        const req = await getRequestWithToken(token).get(`/brands?keyword=${name}`);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}