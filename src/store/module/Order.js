// import axios from "axios";
import { API } from "@/services/apiConstant"
import { getApi,postApi,putApi,deleteApi} from "@/services/commonService"
export default {
    state: {
     overDueDatas : null,
     todaysdata:null,
     upcomingData:null,
     OrderComponent:null,
     activityStopWatch:null,
     BreakDownDatas:null,
     ConsumableDatas:null,
     updateData:null,
     updateBoolean:false,
     consumableTableDatas:null,
     regularData:null,
     selected:null
    },

    mutations : {
     setoverDueDatas(state,value) {
          state.overDueDatas = value;
       },
       setTodaysData(state,value) {
          state.todaysdata = value;
       },
       setupcomingData(state,value) {
          state.upcomingData = value;
       },
       setConsumableDatas(state,value){
         state.ConsumableDatas = value;
       },
       setOrderComponent(state,value) {
         state.OrderComponent = value;
      },
      setActivityStopWatch(state,value) {
         state.activityStopWatch = value;
      },
      setBreakDownDatas(state,value) {
   
         state.BreakDownDatas = value;
      },
      setRegularUseData(state,value) {
       
         state.regularData = value;
      },
    },
    actions : {
    
     async getAllOverDueData ({commit},workcenterid) {
          try{
             const result = await getApi(API.ORDER.OVERDUE+`?workCenterId=${workcenterid}`+`&dueDate=overDue`)
             const data=result.data
             commit("setoverDueDatas",data)
          }
          catch(err){
            console.log("err:",err)
          }
    },
    async getAllTodaysData ({commit},workcenterid) {
     try{
        const result = await getApi(API.ORDER.OVERDUE+`?workCenterId=${workcenterid}`+`&dueDate=today`)
        const data=result.data
       //  const arrayLength = data.length;
       //  data.splice(10,arrayLength)
        commit("setTodaysData",data)
     }
     catch(err){
       console.log("err:",err)
     }
},
async getAllupcomingData ({commit},workcenterid) {
     try{
        const result = await getApi(API.ORDER.OVERDUE+`?workCenterId=${workcenterid}`+`&dueDate=upcomming`)
        const data=result.data
        commit("setupcomingData",data)
     }
     catch(err){
       console.log("err:",err)
     }
},
submitOnOrder(_, payload) {
     
   return new Promise((resolve, reject) => {
     return postApi(API.ORDER.STARTSUBMIT, payload)
       .then(({ data }) => {
         resolve(data);
       })
       .catch((err) => {
         reject(err);
       });
   });
 },
 async updateInprogress(_,payload){
   const {id, status} = payload;

   const path = `${API.ORDER.INPROGRESS}?id=${id}`;
   const body = {
      status: status
   }
   try{
      const res = await  putApi(path,body)
      console.log(res);
   }
   catch(err) {
     console.log("err",err)

    }

},
async getOrderComponent ({commit},workcenterid) {
   try{
      const result = await getApi(API.ORDER.OVERDUE+`/${workcenterid}`)
      const data=result.data
      commit("setOrderComponent",data)
   }
   catch(err){
     console.log("err:",err)
   }
},
async getActivityStopWatch ({commit},id) {
   try{
      const result = await getApi(API.ORDER.ACTIVITY+`?orderId=${id}`)
      const data=result.data
      for(let i in data){
         data[i]["startTimer"]= false;
         data[i]["endTimer"]= false;
      }
      commit("setActivityStopWatch",data)
   }
   catch(err){
     console.log("err:",err)
   }
},
async updateOperationOrderStart(_,payload){
   try{
      const res = await  putApi(API.ONBOARD.SUBMITSTART , payload)
      console.log(res);
   }
   catch(err) {
     console.log("err",err)
   }
},
async getBreakDownDatas ({commit},id) {
   try{
      const result = await getApi(API.BREAKDOWN.GETDATAS+`/${id}`)
      const data=result.data
      commit("setBreakDownDatas",data)
   }
   catch(err){
     console.log("err:",err)
   }
},
async getConsumableDatas ({commit},id) {
   try{
      const result = await getApi(API.CONSUMABLES.GETDATAS+`?workCenterId=${id}`)
     
      const data=result.data
      for(let i in data){
         data[i].selected = false
      }
      commit("setConsumableDatas",data)
   }
   catch(err){
     console.log("err:",err)
   }
},
async getRegularUseData ({commit},id) {
   try{
      const result = await getApi(API.CONSUMABLES.GETDATAS+`?workCenterId=${id}&regularUse=true`)
      const data=result.data
      for(let i in data){
         data[i].selected = false
      }
      console.log(data,"data")
      commit("setRegularUseData",data)
   }
   catch(err){
     console.log("err:",err)
   }
},
async deleteConsumableDatas (_,id) {
    await deleteApi(API.CONSUMABLES.GETDATAS+`?id=${id}`)
},
submitConsumableDatas(_, payload) {
     
   return new Promise((resolve, reject) => {
     return postApi(API.CONSUMABLES.GETDATAS, payload)
       .then(({ data }) => {
         resolve(data);
       })
       .catch((err) => {
         reject(err);
       });
   });
 },
 updateConsumableDatas(_, payload) {
     
   return new Promise((resolve, reject) => {
     return putApi(API.CONSUMABLES.GETDATAS, payload)
       .then(({ data }) => {
         resolve(data);
       })
       .catch((err) => {
         reject(err);
       });
   });
 },
breakStartSubmit(_, payload) {
     
   return new Promise((resolve, reject) => {
     return postApi(API.BREAKDOWN.BREAKSTART, payload)
       .then(({ data }) => {
         resolve(data);
       })
       .catch((err) => {
         reject(err);
       });
   });
 },
 
 async updateBreakDownDatas(_,payload){
   try{
      const res = await  putApi(API.BREAKDOWN.GETDATAS , payload)
      console.log(res);
   }
   catch(err) {
     console.log("err",err)
   }
}
    }
   }