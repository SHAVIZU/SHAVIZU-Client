import { getRequestWithToken } from "../default";
export const deleteUserRequest = async (token:string) => {
    try{
        const request = getRequestWithToken(token);
        const req = await request.delete('/shops');
        return req;
    }
    catch(err:any){
        return Promise.reject(err);
    }
}