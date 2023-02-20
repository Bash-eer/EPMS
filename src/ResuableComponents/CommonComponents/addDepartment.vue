<template>
  <div class="flex addDep mt-2">
    <div class="">
      <div class="col">
        <div class="input-align">
          <span class="fontfam">Department Name</span>
          <InputText
            v-model="addDepartmentData.departmentName"
            @input="onChangeInputs($event.target.value,'departmentName')"
            type="text"
            class="field-tag"
            placeholder="Enter Name here"
          />
        </div>
        <div class="input-align fontfam">
          <span class="fontfam">Department Id</span>
          <InputText
            v-model="addDepartmentData.departmentId"
            @input="onChangeInputs($event.target.value,'departmentId')"
            type="text"
            class="field-tag"
            placeholder="Enter Id here"
          />
        </div>
        <div class="input-align">
          <span class="fontfam">Department Description</span>
          <Textarea
            v-model="addDepartmentData.description"
            @input="onChangeInputs($event.target.value,'description')"
            placeholder="Description about the department"
            :autoResize="true"
            rows="5"
            cols="30"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "primeicons/primeicons.css";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import {debounce} from "lodash";
import { mapState } from "vuex";
export default {
  components: {
    InputText,
    Textarea,
  },
  data() {
    return {
      addDepartmentData: {
        _id:null,
        departmentName: "",
        departmentId: "",
        description: "",
      },
    };
  },
  computed: {
    ...mapState({
      updateDepartment: (state) => state.department.updateDepartment,
    }),
  },
  watch: {
    updateDepartment: function () {
      console.log(this.updateDepartment,"updateDepartment")
      // this.tableData = this.consumableTableDatas;
    },
  },
  methods:{
    onChangeInputs:debounce(function(value,field){
    //  console.log(value,field,"values");
     this.addDepartmentData[field] =value;
     this.addDepartmentData = {...this.addDepartmentData}
     this.$emit("departmentForms",this.addDepartmentData)
    },500)
  },

  created(){
    if(this.$store.state.department.updateDepartment!=null){
      this.addDepartmentData.departmentName = this.$store.state.department.updateDepartment.departmentName
    this.addDepartmentData.departmentId = this.$store.state.department.updateDepartment.departmentId
    this.addDepartmentData.description = this.$store.state.department.updateDepartment.description
    this.addDepartmentData._id = this.$store.state.department.updateDepartment._id
    }
    
    console.log(this.$store.state.department.updateDepartment," this.$store.state.department.updateDepartment",this.updateDepartment)
  }

};
</script>

<style scoped>
.input-align {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 80%;
}
.addDep {
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
