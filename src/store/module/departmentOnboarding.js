import { postApi } from "@/services/commonService"
import { API } from "@/services/apiConstant"
export default {

    state : {
        department : []
    },
    mutations : {
        resetState(state){
            state.department = []
          },
    },
    actions : {
       async createDapartment (_,payload) {
           try{
            const result = await postApi(API.DEPARTMENT.CREATE ,payload)
            console.log("result:",result);
           }
           catch(err){
            console.log(err);
           }
            
        }
    }

}