import axios from "axios";
import { parseCookies } from "nookies";

const { 'genkaistore.token' : token } = parseCookies()

export const apiProduct = axios.create({
    
})