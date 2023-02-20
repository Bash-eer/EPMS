import { getApi,postApi,putApi,deleteApi } from "@/services/commonService"
import { API } from "@/services/apiConstant"

export default {
    state: {
      departmentDetails:null,
      getAllDepartmentHead : null,
      serialNumbers : null,
      addNewDep : null,
      allDepartmentWorkCenter : [],
      empTypeData: [],
      getDepartmentHeadDetails : null,
      updateDepartment:null,
      updateDepartmentSubmit:false,
      updateWorkCenter:null,
      updateWorkCenteSubmit:false,
    },
    mutations: {
        resetState(state){
            state.departmentDetails =null,
            state.addNewDep = null,
            state.allDepartmentWorkCenter = []
            state.empTypeData = [],
            state.getDepartmentHeadDetails = null,
            state.getAllDepartmentHead = null
          },
          setDepartmentHeadDetails(state,name){
             state.getDepartmentHeadDetails = name
          },
        setAlldepartment(state,value){
           state.departmentDetails = value
        }, 
        setAlldepartmentHead(state,value){
            state.getAllDepartmentHead = value
        },
        setSerialNum(state,value){
           const data = value.map((data,index)=>{
              return index+1
           })
           state.serialNumbers = data
        },
        setAddNewDep(state,value){
            state.addNewDep = value
        },
        setAllWorkCenter(state,value){
          state.allDepartmentWorkCenter = value
        },
        setEmployeeType(state,value){
          console.log("setEmployeeType",value);
          state.empTypeData = value
        }

    },
    actions : {
        async getAllDepartment({commit}) {
            try{
             const result = await getApi(API.DEPARTMENT.CREATE)
             commit("setAlldepartment",result.data)
             commit("setSerialNum",result.data)
            }
            catch(err){
             console.log(err);
            }  
         },
         async getAllDepartmentHead({commit}) {
          try{
           const result = await getApi(API.DEPARTMENT.DEPARTMENTHEAD_CREATE)
           commit("setAlldepartmentHead",result.data)
          }
          catch(err){
           console.log(err);
          }  
       },

        async createNewDepartment({commit},payload){
          try{
            const result = await postApi(API.DEPARTMENT.CREATE,payload)
            commit("setAddNewDep",result)
          }
          catch(err){
            console.log("error",err)
          }
        },
        async deleteDepartmentData (_,id) {
          await deleteApi(API.DEPARTMENT.CREATE+`?id=${id}`)
      },
      async deleteWorkCenter (_,id) {
        await deleteApi(API.DEPARTMENT.WORKCENTER+`?id=${id}`)
    },
    async deleteSupervisor (_,id) {
      await deleteApi(API.DEPARTMENT.SUPRVISOR_DELETE+`?id=${id}`)
  },
    
    async deleteDepartmentHeadData(_,payload){
      try{
         const result = await putApi(API.DEPARTMENT.DEPARTMENT_DELETE,payload)
         console.log(result);
      }
      catch(err){
       console.log("error:",err);
      }
    },
        async getAllDepartmentWorkCenter({commit}){
          try{
             const result = await getApi(API.DEPARTMENT.WORKCENTER)
             const data = result.data
             commit("setAllWorkCenter",data)
          }
          catch(err){
            console.log("error:",err)
          }
        },
         async getEmployeeType({commit},employeeType){
            try{
              const result = await getApi(API.EMPLOYEE.CREATE+`?employeeType=${employeeType}`)
              commit("setEmployeeType",result.data)
            }
            catch(err){
              console.log("error:",err);
            }
         },
         async createNewDepartmentHead(_,payload){
           try{
              const result = await postApi(API.DEPARTMENT.DEPARTMENTHEAD_CREATE, payload)
              console.log(result);
           }
           catch(err){
            console.log("error:",err);
           }
         },
         async updateNewDepartmentHead(_,payload){
          try{
             const result = await putApi(API.DEPARTMENT.CREATE,payload)
             console.log(result);
          }
          catch(err){
           console.log("error:",err);
          }
        },
         async createNewWorkCenter(_,payload){
            try{
             const result = await postApi(API.DEPARTMENT.WORKCENTER, payload)
             console.log(result);
            }
            catch(err){
              console.log("error:",err)
            }
         },
         async updateNewWorkCenter(_,payload){
          try{
           const result = await putApi(API.DEPARTMENT.WORKCENTER, payload)
           console.log(result);
          }
          catch(err){
            console.log("error:",err)
          }
       },
        async getDepartmentHead({commit},id){
            try{
              const res = await getApi(API.EMPLOYEE.CREATE+`?department=${id}`)
              commit("setDepartmentHeadDetails",res.data)
            }
            catch(err){
            console.log("error",err);
            }
        },
        async updateEmployeetype(_,payload){
             try{
                const res = await  putApi(API.DEPARTMENT.EMPLOYEETYPE , payload)
                console.log(res);
             }
             catch(err) {
               console.log("err",err)
             }
        }
    }
}