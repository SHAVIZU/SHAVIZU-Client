import { request } from "../default";
export const changepwRequest = async (id:string, reg_num: string, pw: string)=> {
    try{
        const data = {
            user_id: id,
            registration_number: reg_num,
            new_password: pw,
        }
        const req = await request.patch('/shops/password', data);
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}