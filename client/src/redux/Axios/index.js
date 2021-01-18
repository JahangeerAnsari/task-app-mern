import axios from "axios";
import { api } from "./urlConfig";
  
const AxiosInstance = axios.create({
  baseURL: api,
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
export default AxiosInstance;
