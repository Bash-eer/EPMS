import axios from "axios";
import API from "@/api";

export default {
    state: {
       token: null
    },

    mutations : {
        resetState(state){
          state.token = null
        },
        setToken(state,value) {
           state.token = value
        }
    },
    actions : {
    
     login({commit},payload) {
             return new Promise((resolve,reject)=> {
                   return axios.post(`${API.BASEURL}auth/login`, payload )
                    .then(({data})=>{
                        localStorage.setItem('token', data.token)
                        commit("setToken",data.token)
                        resolve(data)
                     })
                     .catch((err)=>{
                        console.log("err:",err)
                        reject(err)
                     })
             })
        }
    }

}