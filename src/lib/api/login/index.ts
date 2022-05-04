import { request } from "../default";

export const loginRequest = async(user_id:string, password:string) => {
    try{
        const data = {
            user_id:user_id,
            password:password
        };
        const req = await request.post('auth', data);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}