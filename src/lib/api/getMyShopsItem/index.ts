import { getRequestWithToken } from "../default";

export const getMyShopsItem = async(token:string) => {
    try{
        const req = await getRequestWithToken(token).get(`/sells`);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}