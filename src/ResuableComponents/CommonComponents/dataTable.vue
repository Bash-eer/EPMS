<template>
  <DataTable :value="departmentData">
    <Column
      v-for="col of tableColumns"
      :field="col.field"
      :header="col.header"
      :key="col.field"
    >
      <template #body="{ data, index }">
        <!-- <Toast /> -->
        <div v-if="tabName !== 'Supervisor' && tabName !== 'Employer'">
          <span v-if="col.header == 'S_No'">{{ index + 1 }}</span>
          <span v-if="col.header == 'Department ID'">{{
            data.departmentId ?? "-"
          }}</span>
          <span v-if="col.header == 'Department Head'">{{
            data.departmentHead?.name
          }}</span>
          <span v-if="col.header == 'Department Code'">{{
            data.departmentId.departmentId ?? "-"
          }}</span>
           <span v-if="col.header == 'Department Name'">{{
            data.departmentName ?? "-"
          }}</span>
          <span v-if="col.header == 'Department Description'">{{
            data.description ?? "-"
          }}</span>
          <span v-if="col.header == 'WC Code'">{{
            data.workCenterId ?? "-"
          }}</span>
          <span v-if="col.header == 'WC Description'">{{
            data.workCenterDescription ?? "-"
          }}</span>
          <span v-if="col.header == 'Description'">{{ data.description }}</span>
          <div>
            <div v-if="tabName === 'Department'">
              <span v-if="col.header == 'created By'">{{
                data.createdBy?.name ?? "-"
              }}44</span>
            </div>
            <div v-if="tabName === 'DepartmentHead'">
              <span v-if="col.header == 'created By'">{{
                data.departmentHeadCreatedBy?.name ?? "-"
              }}</span>
            </div>
            <div v-if="tabName === 'WorkCenter'">
              <span v-if="col.header == 'created By'">{{
                data.createdBy?.name ?? "-"
              }}</span>
            </div>
          </div>
          <span v-if="col.header == 'created On'">{{
            data.createdAt ? convertDate(data.createdAt) : "-"
          }}</span>
          <span v-if="col.header == 'Actions'" >
            <div class="speeddial-delay-demo" v-if="tabName === 'Department'" >
              <SpeedDialComponent :tab='this.tabName' :dialog='this.dialogOpen' :datas="data" />
            </div>
            <div class="speeddial-delay-demo" v-if="tabName === 'DepartmentHead'" >
              <SpeedDialComponent :tab='this.tabName' :dialog='this.dialogOpen' :datas="data" />
            </div>
            <div class="speeddial-delay-demo" v-if="tabName === 'WorkCenter'" >
              <SpeedDialComponent :tab='this.tabName' :dialog='this.dialogOpen' :datas="data" />
            </div>
            
          </span>
        </div>
        <div v-else>
          <span v-if="col.header == 'S_No'">{{ index + 1 }}</span>
          <span v-if="col.header == 'Department Code'">{{
           data.departmentId.length
              ? showDepartmentHeads(data.departmentId
)
              : "-"
          }}</span>
          <span v-if="col.header == 'Employee Name'">{{
            data.name ?? "-"
          }}</span>
          <span v-if="col.header == 'Supervisor Name'">{{
            data.name ?? "-"
          }}</span>
          <span v-if="col.header == 'created By'">{{
            data.createdBy?.name || "-"
          }}</span>
          <span v-if="col.header == 'created On'">{{
            data.createdAt
              ? convertDate(data.createdAt)
              : "-"
          }}</span>
           <span v-if="col.header == 'Actions'">
            <div class="speeddial-delay-demo">
              <div class="speeddial-delay-demo" v-if="tabName === 'Supervisor'" >
              <SpeedDialComponent :tab='this.tabName' :dialog='this.dialogOpen' :datas="data" />
            </div>
            <div class="speeddial-delay-demo" v-if="tabName === 'Employer'" >
              <SpeedDialComponent :tab='this.tabName' :dialog='this.dialogOpen' :datas="data" />
            </div>
              <!-- <SpeedDial
                :model="items"
                direction="up"
                :transitionDelay="80"
                radius="2"
                showIcon="pi pi-ellipsis-v"
                hideIcon="pi pi-times"
                buttonClass="p-button-outlined"
              /> -->
              </div>
            </span>
        </div>
      </template>
    </Column>
  </DataTable>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { mapActions, mapState } from "vuex";
// import SpeedDial from "primevue/speeddial";
import SpeedDialComponent  from "../CommonComponents/speedDial.vue";
// import Toast from 'primevue/toast';
export default {
  props: ["tableColumns", "tableData", "activeTab", "tabName","dialogOpen"],
  components: {
    DataTable,
    Column,
    // SpeedDial,
    SpeedDialComponent
    // Toast
  },
  computed: {
    ...mapState({
      allDepartment: (state) => state.department.departmentDetails,
      allDepartmenthead: (state) => state.department.getAllDepartmentHead,
      serialNumArr: (state) => state.department.serialNumbers,
      workCenterData: (state) => state.department.allDepartmentWorkCenter,
      employeeTypeData: (state) => state.department.empTypeData,
    }),
  },
  data: () => ({
    departmentData: null,
    serialNum: null,
    EmployeeType: null,
  }),
   mounted() {
     this.getTableDatas()
  },
  methods: {
    ...mapActions([
      "getAllDepartment",
      "getAllDepartmentWorkCenter",
      "getEmployeeType",
      "getAllDepartmentHead",
    ]),
  
   async getTableDatas(){
      switch (this.activeTab) {
      case "Department":
        await this.getAllDepartment();
        this.departmentData = [...this.allDepartment];
        break;
      case "Department Head":
        await this.getAllDepartmentHead();
        this.departmentData = [...this.allDepartmenthead];
        break;
      case "Work Center":
        await this.getAllDepartmentWorkCenter();
        this.departmentData = [...this.workCenterData];
        break;
      case "Supervisor":
        this.EmployeeType = "Supervisor";
        await this.getEmployeeType(this.EmployeeType);
        this.departmentData = [...this.employeeTypeData];
        break;
      default:
        this.EmployeeType = "Employee";
        await this.getEmployeeType(this.EmployeeType);
        this.departmentData = [...this.employeeTypeData];
    }
    },

    setDepartmentData() {},
    showDepartmentHeads(arr) {
      let data = arr.map((ele) => ele.departmentId);
      return data.toString();
    },
    convertDate(date) {
      const formatdate = new Date(date);
      const monthFormat = (formatdate.getMonth() + 1).toString().padStart(2, 0);
      // console.log(monthFormat);
      return `${formatdate.getDate()}/${monthFormat}/${formatdate.getFullYear()}`;
    },
  },
};
</script>

<style scoped>
::v-deep .p-datatable .p-datatable-tbody > tr > td{
  font-size: 14px;
}
::v-deep .p-speeddial-button.p-button.p-button-icon-only {
  width: 2rem;
  height: 2rem;
  border: none;
}
::v-deep .p-speeddial {
  position: unset;
}
::v-deep .p-button.p-button-outlined{
  color: black;
}
</style>
