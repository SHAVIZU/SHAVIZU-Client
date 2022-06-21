import { getRequestWithToken } from "../default";

type dataType = {
    style_code:string;
    brand_id?: number;
    name: string;
    category: string;
    image_url:string;
    unit: {
        min:number|null;
        max:number|null;
        size:number|null;
    }
    is_free:boolean;
}
export const newProductRegisterRequest = async(token:string, data:dataType) => {
    try{
         const request = getRequestWithToken(token);
        const req = await request.post('/items', data);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}