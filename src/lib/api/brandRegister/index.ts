import { getRequestWithToken } from "../default";

export const brandRegisterRequest = async(token:string, name:string) => {
    try{
        const data = {
            name: name
        }
        const req = await getRequestWithToken(token).post(`/brands?keyword=${name}`, data);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}