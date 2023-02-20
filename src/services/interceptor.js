import axios from "axios";
import API from "@/api";

const config = {
      baseURL : API.BASEURL
}
const httpInstance = axios.create(config);

//bearer Authorization
httpInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export {httpInstance};