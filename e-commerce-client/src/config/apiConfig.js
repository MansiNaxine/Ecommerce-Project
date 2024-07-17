import axios from "axios";

const DEPLOYED='  '
const LOCALHOST='http://localhost:2323'

export const API_BASE_URL = LOCALHOST

const jwt=localStorage.getItem("jwt")


export const api=axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        "Content-Type":"application/json"

    }
})