import { getRequestWithToken } from "../default";

export const newProductRegisterRequest = async(token:string) => {
    try{
        const data = {
            style_code:"xxxx12",
            brand_id:1,
            name:"xxxx12",
            category:"FOOT_WEAR",
            image_url:"xxxx12",
            unit: {
                min:230,
                max:280,
                size:5
            },
            is_free:false
        };
         const request = getRequestWithToken(token);
        const req = await request.post('/items', data);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}