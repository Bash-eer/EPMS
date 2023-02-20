<template>
  <div>
    <div class="header-content mt-5 ml-5 fontFamily-Regular">
      <div class="header">
        <!-- <departmentHeader :items="headerList" /> -->
        <div class="flex-content">
          <div
            v-for="(item, idx) in headerList"
            :key="idx"
            :class="item.name === activeTab ? 'active' : ''"
            @click="switchTab(item.name)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="btn">
        <ButtonComponent
          label="+ Add "
          type="primary"
          @click="addDepartment()"
        />
      </div>
    </div>
    <div class="flex mt-4 justify-content-center">
      <div class="Employee">
        <div v-if="activeTab == 'Department'">
          <div v-if="!departmentAdding">
            <dataTable
              :tableColumns="departmentColumns"
              :tableData="depDetails"
              :activeTab="activeTab"
              tabName="Department"
              :dialogOpen = "addDepartment"
            />
          </div>
          <div v-else>
            <newDepartment @departmentForms="getDepartmentFormData" />
          </div>
        </div>
        <div v-else-if="activeTab == 'Department Head'">
          <div v-if="!departmentAdding">
            <dataTable
              :tableColumns="departmentHeadcolums"
              :activeTab="activeTab"
              tabName="DepartmentHead"
              :dialogOpen = "addDepartment"
            />
          </div>
          <div v-else>
            <departmentHead
              @departmentHeadForms="updateDepartmentData"
              :departmentId="departmentId"
            />
          </div>
        </div>
        <div v-else-if="activeTab == 'Work Center'">
          <div v-if="!departmentAdding">
            <dataTable
              :tableColumns="workCentercolums"
              :activeTab="activeTab"
              tabName="WorkCenter"
              :dialogOpen = "addDepartment"
            />
          </div>
          <div v-else>
            <departmentWorkCenter
              @workCenterForms="workCenterFormsData"
              :departmentId="departmentId"
            />
          </div>
        </div>
        <div v-else-if="activeTab == 'Supervisor'">
          <div v-if="!departmentAdding">
            <dataTable
              :tableColumns="supervisorColums"
              :activeTab="activeTab"
              tabName="Supervisor"
            />
          </div>
          <div v-else>
            <supervisorCreate
              @setEmpType="updateEmpType"
              :departmentIds="departmentId"
              tabName="Supervisor"
              :employeeType="supervisorDetails"
            />
          </div>
        </div>
        <div v-else>
          <div v-if="!departmentAdding">
            <dataTable :tableColumns="employeeColums" tabName="Employer" />
          </div>
          <div v-else>
            <supervisorCreate
              @setEmpType="updateEmpType"
              :departmentIds="departmentId"
              tabName="Employee"
              :employeeType="employerDetails"
              :activeTab="activeTab"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="departmentAdding" class="btn-Style">
      <button class="cancel-btn mr-3" @click="cancel()">Cancel</button>
      <ButtonComponent
        label="submit"
        type="primary"
        class="submitbtn"
        @click="submitNewDepartment()"
      />
    </div>
  </div>
</template>

<script>
// import departmentHeader from "./CommonComponents/departmentHeader.vue";
import "primeicons/primeicons.css";
import dataTable from "./CommonComponents/dataTable.vue";
// import Button from "primevue/button";
import newDepartment from "./CommonComponents/addDepartment.vue";
import departmentHead from "./CommonComponents/departmentHead.vue";
import departmentWorkCenter from "./CommonComponents/departmentWorkCenter.vue";
import supervisorCreate from "./CommonComponents/supervisorCreate.vue";
import { mapActions } from "vuex";

export default {
  setup() {},
  name: "supervisorBoardComponent",
  components: {
    // departmentHeader,
    // Button,
    dataTable,
    newDepartment,
    departmentHead,
    departmentWorkCenter,
    supervisorCreate,
  },
  data: () => ({
    supervisorDetails: [
      {
        name: "",
      },
    ],
    employerDetails: [
      {
        name: "",
      },
    ],
    departmentAdding: false,
    departmentId: [
      { name: "IBLFDF123" },
      { name: "IBLFDF321" },
      { name: "IBLFDF153" },
      { name: "IBLFDF956" },
    ],
    headerList: [
      { name: "Department" },
      { name: "Department Head" },
      { name: "Work Center" },
      { name: "Supervisor" },
      { name: "Employer" },
    ],
    departmentColumns: [
      { field: "", header: "S_No" },
      { field: "DepartmentID", header: "Department ID" },
      { field: "departmentName", header: "Department Name" },
      { field: "Description", header: "Description" },
      { field: "createdBy", header: "created By" },
      { field: "createdAt", header: "created On" },
      { field: "", header: "Actions" },
    ],
    departmentHeadcolums: [
      { field: "", header: "S_No" },
      { field: "DepartmentID", header: "Department ID" },
      { field: "DepartmentHead", header: "Department Head" },
      { field: "createdBy", header: "created By" },
      { field: "createdOn", header: "created On" },
      { field: "", header: "Actions" },
    ],
    workCentercolums: [
      { field: "", header: "S_No" },
      { field: "departmentName", header: "Department Code" },
      { field: "Description", header: "Department Description" },
      { field: "WC Code", header: "WC Code" },
      { field: "WC Description", header: "WC Description" },
      { field: "createdBy", header: "created By" },
      { field: "createdOn", header: "created On" },
      { field: "", header: "Actions" },
    ],
    supervisorColums: [
      { field: "", header: "S_No" },
      { field: "departmentName", header: "Department Code" },
      { field: "Supervisor Name", header: "Supervisor Name" },
      { field: "createdBy", header: "created By" },
      { field: "createdOn", header: "created On" },
      { field: "", header: "Actions" },
    ],
    employeeColums: [
      { field: "", header: "S_No" },
      { field: "departmentName", header: "Department Code" },
      { field: "Employee Name", header: "Employee Name" },
      { field: "createdBy", header: "created By" },
      { field: "createdOn", header: "created On" },
      { field: "", header: "Actions" },
    ],
    activeTab: "Department",
    departmentFormData: null,
    departmentHeadData: null,
    workCenterFormData: null,
    employeeData: null,
  }),
  methods: {
    ...mapActions([
      "createNewDepartment",
      "createNewWorkCenter",
      "createNewDepartmentHead",
      "updateEmployeetype",
      "updateNewDepartmentHead",
      "updateNewWorkCenter"
    ]),
    switchTab(tabName) {
      this.departmentAdding = false;
      this.activeTab = tabName;
      console.log(this.activeTab,"this.activeTab",tabName)
    },
    addDepartment() {
      this.departmentAdding = true;
    },
    cancel() {
      this.departmentAdding = false;
    },
    async submitNewDepartment() {
      // console.log("submit:",this.departmentFormData);
      if (this.activeTab === "Department") {
        console.log(this.$store.state.department.updateDepartmentSubmit)
        if(this.$store.state.department.updateDepartmentSubmit == false){
          console.log("post")
          await this.createNewDepartment(this.departmentFormData);
        }
        else if(this.$store.state.department.updateDepartmentSubmit == true){
          console.log("update")
         await this.updateNewDepartmentHead(this.departmentFormData)
        }
        
      } else if (this.activeTab === "Department Head") {
        console.log(this.departmentFormData,"this.departmentFormData")
        if (!this.departmentFormData.departmentHead) {
          this.departmentFormData["departmentHead"] = [];
        }
        await this.createNewDepartmentHead(this.departmentFormData);
      } else if (this.activeTab === "Work Center") {
        if(this.$store.state.department.updateWorkCenteSubmit == false){
          await this.createNewWorkCenter(this.departmentFormData);
        }
        else if (this.$store.state.department.updateWorkCenteSubmit == true){
       await this.updateNewWorkCenter(this.departmentFormData)
        }
        
      } else {
        await this.updateEmployeetype(this.employeeData);
      }
      this.departmentAdding = false;
    },
    getDepartmentFormData(value) {
      this.departmentFormData = { ...value };
    },
    updateDepartmentData(value) {
      this.departmentFormData = { ...value };
    },
    updateEmpType(value) {
      this.employeeData = value;
    },
    workCenterFormsData(value) {
      this.departmentFormData = value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";
.cancel-btn {
  border: 1px solid black;
}
.flex-content {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #b5bdc4;
  cursor: pointer;
}
.active {
  color: #0b1354;
  border-bottom: 4px solid #ff8c22;
}
.btn {
  margin-top: -2rem;
  margin-left: 54rem;
}

.Employee {
  width: 65.438rem;
  //   height: 20rem;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: 2.188rem;
  padding: 10px;
}
.btn-Style {
  display: flex;
  justify-content: end;
  //   margin-right: -35.625rem;
  margin-top: 3.5rem;
}

.header-content {
  font-size: 16px;
  // font-family: Montserrat;
  color: #0b1354;
  font-weight: 600;
}

.sub-header {
  font-size: 13px;
  // font-family: Montserrat;
  opacity: 0.7;
  color: #536172;
  font-weight: 600;
}

.header {
  width: 60%;
}
::v-deep .p-datatable .p-datatable-tbody > tr {
  background: none;
}
</style>
