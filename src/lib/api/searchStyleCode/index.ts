import { getRequest } from "../default";

export const searchStyleCodeRequest = async(style_code:string) => {
    try{
        const req = await getRequest().post(`/product/image?style_code=${style_code}`);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}