<template>
    <div  class="flex addDep  mt-2">
     <div class="">
       <div class="col">
         <div class="input-align">
           <span class="fontfam">Department ID</span>
           <Dropdown v-model="selectedType" :options="allDepartment"   @change="onChangeInputs('_id')" optionLabel="departmentId" placeholder="Select Department ID" />
         </div>
         <div v-for="(dep,idx) in departmentHead" class="input-align  fontfam" :key="idx">
           <span class="fontfam">{{ dep.head }}</span>
           <Dropdown v-model="dep.name" :options="DepartmentHead"   @change="onChangeInputs('departmentHead',$event)" :filter="true" optionLabel="name" placeholder="Select Department Head"/>
         </div>
         <div class="input-align  fontfam" >         
         </div> 
         <div class="add-department mt-3" @click="addDepartmentHead()">
            + Add Department Head
         </div>
       </div>
     </div>
   </div>
</template>

<script>
import "primeicons/primeicons.css";
// import InputText from 'primevue/inputtext';
import Dropdown from "primevue/dropdown";
// import MultiSelect from 'primevue/multiselect';
import {mapState,mapActions } from "vuex";
import {debounce} from "lodash";

export default {
    props:["departmentId"],
components: {
  //  InputText,
  // MultiSelect,
   Dropdown
},
data : () => ({
    selectedType:null,
    DepartmentHead: null,
    filterHeadData:[],
    departmentHeadData:[{
      _id:"",
      departmentHead:null
    }],
    departmentHead:[
        {head : "Department Head", name: ""}
    ],
}),
computed: {
    ...mapState({
      allDepartment: (state) => state.department.departmentDetails,
      departmentHeadName : (state) => state.department.getDepartmentHeadDetails
    }),
  },
mounted(){
    this.departmentHead = [
        {head : "Department Head", name : ""}
    ]
    // this.Departmenthead = this.allDepartment[0].departmentHead
    // console.log("mount:",this.Departmenthead);

},
methods:{
  ...mapActions([
       "getDepartmentHead"
  ]),
    addDepartmentHead(){  
      let len =this.departmentHead.length
      if(len >=2) return
      if(len ===1) this.departmentHead[0].head = "Department Head 1"
      this.departmentHead.push({
        head :`Department Head ${++len}`,
        name : ""
      })
    },
    onChangeInputs:debounce(async function(field,dep){
      if(field === "_id"){
        const id = this.selectedType?._id
        await this.getDepartmentHead(this.selectedType.departmentId)
        this.DepartmentHead = [...this.departmentHeadName]
      // this.DepartmentHead= this.allDepartment.filter(item => item._id === id && item.departmentHead)
      //              .map(item => item.departmentHead).flat(1)
      //              console.log("filterdata:",this.DepartmentHead);

        this.departmentHeadData[field] = id
      }
      else {
        const id = dep.value._id
        this.filterHeadData.push(id)
        // this.filterHeadData.forEach(item =>  a.push(item._id))
        this.departmentHeadData[field] = [...this.filterHeadData]
      }
           
     this.departmentHeadData = {...this.departmentHeadData}
     this.$emit("departmentHeadForms",this.departmentHeadData)
    },500)
}

}
</script>

<style scoped>
.add-department{
    font-family: system-ui;
    color: #ff8c22;
    cursor: pointer;
    font-weight: 600;
}
.input-align{
display: flex;
flex-direction: column;
padding-top: 20px;
width:37%
}
.addDep{
flex-direction: column;
}
.fontfam {
font-family: system-ui;
font-size: 15px;
}
.field-tag {
width: 23.375rem;
height: 3rem;
border: 1px solid #e6e6e6;
border-radius: 3px;
color: black;
font-weight: 600;
font-size: 14px;
}
</style>