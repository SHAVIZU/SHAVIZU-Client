import { request } from "../default/index";

export const signupRequest = async (
  user_id: string,
  password: string,
  name: string,
  registration_number:string,
  boss_name: string,
  opening_date: string,
) => {
  try {
    const data = {
      name: name,
      user_id: user_id,
      password: password,
      registration_number:registration_number,
      boss_name:boss_name,
      opening_date:opening_date
    };
    const req = await request.post("shops", data);
    return req;
  } catch (error: any) {
    return Promise.reject(error);
  }
};