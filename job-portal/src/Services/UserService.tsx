import axios from "axios";
import { error } from "console";
const base_url="http://localhost:8080/users/"
const base_url2="http://localhost:8080/applicantDetails/"
const registerUser=async(user:any)=>{
    return axios.post(`${base_url}register`,user)
    .then(res=>res.data)
    .catch(error=>{throw error;})
}
const loginUser=async(login:any)=>{
    return axios.post(`${base_url}login`,login)
    .then(res=>res.data)
    .catch(error=>{throw error;})
}

const sendOtp=async(email:any)=>{
    return axios.post(`${base_url}sendOtp/${email}`)
    .then(result=>result.data)
    .catch(error=>{throw error ;});
}
const verifyOtp=async(email:any ,otp:any)=>{
    return axios.get(`${base_url}verifyOtp/${email}/${otp}`)
    .then(result=>result.data)
    .catch(error=>{throw error ;});
}
const changePass=async(email:string ,password:string)=>{
    return axios.post(`${base_url}changePass`,{email,password})
    .then(result=>result.data)
    .catch(error=>{throw error ;});
}
const applyjob=async (applicant:any)=>{
    return axios.post(`${base_url2}applyjob`,applicant)
    .then(result=>result.data)
    .catch(error=>{throw error ;});
}

export  {registerUser ,loginUser,sendOtp,verifyOtp,changePass,applyjob};