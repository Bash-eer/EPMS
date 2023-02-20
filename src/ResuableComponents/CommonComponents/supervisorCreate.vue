<template>
  <div class="flex addDep mt-2">
    <div class="">
      <div class="col">
        <div class="input-align">
          <span class="fontfam">Department ID</span>
          <Dropdown
            v-model="selectedType"
            :options="allDepartment"
            optionLabel="departmentId"
            placeholder="Select Department ID"
            @change="onChangeInputs('departmentId')"
          />
        </div>
        <div
          v-for="(supervisor, idx) in empDetails"
          class="input-align fontfam"
          :key="idx"
        >
          <span class="fontfam">
            {{
              tabName === "Supervisor" ? "Supervisor Name" : "Employee Name"
            }}</span
          >
          <Dropdown
          v-if="tabName === 'Supervisor'"
            v-model="supervisor.name"
            :options="employeeTypeData"
            @change="onChangeInputs('employeeId', $event)"
            :filter="true"
            optionLabel="name"
            placeholder="Select Supervisor Name"
          />
          <Dropdown
            v-else
            v-model="supervisor.name"
            :options="employeeTypeData"
            @change="onChangeInputs('employeeId', $event)"
            :filter="true"
            optionLabel="name"
            placeholder="Select Employee Name"
          />
          <!-- <InputText
            v-if="tabName === 'Supervisor'"
            type="text"
            class="field-tag"
            placeholder="Enter Supervisor Name"
            :value="supervisor.name"
          />
          <InputText
            v-else
            type="text"
            class="field-tag"
            placeholder="Enter Employee Name"
            :value="supervisor.name"
          /> -->
        </div>
        <div class="add-department mt-3" @click="addSupervisor()">
          {{
            tabName === "Supervisor"
              ? "+ Add Supervisor Name"
              : "+ Add Employer Name"
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "primeicons/primeicons.css";
// import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import {mapState } from "vuex";
import {debounce} from "lodash";

export default {
  props: ["departmentIds", "tabName", "employeeType"],
  components: {
    // InputText,
    Dropdown,
  },
  data: () => ({
    empDetails: null,
    selectedType : null,
    employeeTypeData : null,
    filteredEmpData : [],
    departmentEmployeeData:[{
      departmentId:"",
      departmentHead:null
    }],
  }),
  computed: {
    ...mapState({
      allDepartment: (state) => state.department.departmentDetails,
      empTypeData : (state)=> state.department.empTypeData
    }),
  },
  mounted() {
    this.employeeTypeData = [...this.empTypeData]
    this.empDetails = [...this.employeeType];
  },
  methods: {
    addSupervisor() {
      console.log("add", this.tabName);
      let len = this.empDetails.length;
      if (len >= 3) return;
      this.empDetails.push({
        name: "",
      });
    },
    onChangeInputs:debounce(async function(field,event){
      if(field === "departmentId"){
        const id = this.selectedType?._id
        this.departmentEmployeeData[field] = id
      } else {
        const id = event.value._id
        this.filteredEmpData.push(id)
        this.departmentEmployeeData[field] = [...this.filteredEmpData]
      }
      this.departmentEmployeeData = {...this.departmentEmployeeData}
      this.$emit("setEmpType",this.departmentEmployeeData)
    },500)
  },
};
</script>

<style scoped>
.input-align {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 37%;
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
.add-department {
  font-family: system-ui;
  color: #ff8c22;
  cursor: pointer;
  font-weight: 600;
}
</style>
