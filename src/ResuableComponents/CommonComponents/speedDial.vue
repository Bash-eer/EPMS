<template>
  <div>
    <SpeedDial :model="items" direction="right" />
  </div>
</template>

<script>
import SpeedDial from "primevue/speeddial";
import { mapActions, mapState } from "vuex";
export default {
  name: "SpeedDialComponent",
  components: {
    SpeedDial,
  },
  props: ["tab", "dialog", "datas"],
  data() {
    return {
      departmentId: null,
      items: [
        {
          label: "Add",
          icon: "pi pi-pencil",
          command: () => {
            if (this.tab == "Department") {
              this.$store.state.department.updateDepartmentSubmit = true;
              this.dialog();

              console.log(
                this.$store.state.department.updateDepartmentSubmit,
                "fe"
              );

              this.$store.state.department.updateDepartment = this.datas;

              console.log(this.tab, "presentTab");
            } else if (this.tab == "WorkCenter") {
              this.$store.state.department.updateWorkCenteSubmit = true;
              this.dialog();
              this.$store.state.department.updateWorkCenter = this.datas;
            }
          },
        },

        {
          label: "Delete",
          icon: "pi pi-trash",
          command: () => {
            if (this.tab == "Department") {
              this.deleteDepartmentData(this.datas._id),
                this.getAllDepartment();
            } else if (this.tab == "WorkCenter") {
              console.log(this.datas._id);
              this.deleteWorkCenter(this.datas._id);
              this.getAllDepartmentWorkCenter();
            } else if (this.tab == "Supervisor") {
               let EmployeeType = "Supervisor";
              this.deleteSupervisor(this.datas._id);
              this.getEmployeeType(EmployeeType);
            }

            else if (this.tab == "DepartmentHead") {
              console.log(this.datas, "this.datas");

              let s = {
                employeeId: this.datas.departmentHead._id,
                departmentId: this.datas._id,
              };
              this.deleteDepartmentHeadData(s);
              this.getAllDepartmentHead();
            }
            else if (this.tab == 'Employer'){
               let EmployeeType = "Employee";
               this.deleteSupervisor(this.datas._id);
               this.getEmployeeType(EmployeeType)
            }
          },
        },
      ],
    };
  },
  computed: {
    ...mapState({
      updateDepartmentSubmit: (state) =>
        state.department.updateDepartmentSubmit,
    }),
  },
  methods: {
    ...mapActions([
      "deleteDepartmentData",
      "getAllDepartment",
      "deleteDepartmentHeadData",
      "deleteWorkCenter",
      "deleteSupervisor",
      "getAllDepartmentHead",
      "getAllDepartmentWorkCenter",
      "getEmployeeType",
    ]),
  },
  created() {
    console.log(this.tab, "tabtab");
  },
};
</script>

<style>
</style>