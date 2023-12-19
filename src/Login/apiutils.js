import axios from "axios";
import Signup from "../Signup/Signup";

const instance =axios.create({
    baseURL:"http://localhost:4000",
    withCredentials:true
})

const ENDPOINTS={
    LOGIN:"/user/login",
    SIGNUP:"/user/signup",
    ADD_FRIEND:"/user/addFriend",
    REMOVE_FRIEND:"/user/removeFriend",
    LOGOUT:"/user/logout"
}

export const loginApi=(payload)=>{
   return instance.post(ENDPOINTS.LOGIN, payload);
}

export const loginWithcookieApi=(payload)=>{
    return instance.get(ENDPOINTS.LOGIN);
}
 
export const addFriendApi=(payload)=>{
    return instance.patch(ENDPOINTS.ADD_FRIEND,payload);
}

export const removeFriendApi=(payload)=>{
    return instance.patch(ENDPOINTS.REMOVE_FRIEND,payload);
}
 
export const signupApi=(payload)=>{
    return instance.post(ENDPOINTS.SIGNUP, payload);
}
 
 