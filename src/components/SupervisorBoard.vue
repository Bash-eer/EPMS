<template>
  <div>
    <div class="supervisor-btn mt-5">
      <!-- <ButtonComponent label="+ Supervisor Onboarding" type="primary" @click="createSupervisor()" /> -->
      <Dropdown
        v-model="selectedType"
        :options="onboardingType"
        optionLabel="name"
        placeholder="Employee"
      />
    </div>
    <div class="header-content mt-5 ml-5 fontFamily-Regular">
      Department<span class="ml-2 fontFamily-Regular">:</span
      ><span class="ml-2 fontFamily-Regular">DHNKL3456</span
      ><span class="sub-header ml-2">(Assembly Shop)</span
      ><span class="deleted-badge pl-2 pr-2 pt-1 ml-2 fontsize">4</span>
    </div>
    <div class="btn">
      <ButtonComponent
        v-if="!selectedType || selectedType.name == 'Employee'"
        label="+ Employee Onboarding"
        type="primary"
        @click="createEmployee()"
      />
      <ButtonComponent
        v-else
        label="+ Supervisor Onboarding"
        type="primary"
        @click="createEmployee()"
      />
    </div>
    <div class="flex mt-2 justify-content-center">
      <div class="Employee">
        <div class="avatar">
          <!-- <Avatar
            :size="size"
            shape="circle"
            :icon="icon ? 'pi pi-user' : ''"
            :image="image"
          /> -->
          <img src="@/assets/Avataricon.svg" />
        </div>
        <div
          v-if="!selectedType || selectedType.name == 'Employee'"
          class="flex justify-content-left mt-4"
        >
          <div class="col col-5 mt-4">
            <div class="grid-Style">
              <div class="col">
                <span class="fontfam">Serial Number</span>
                <InputText type="text" class="field" value="01" />
              </div>
              <div class="col fontfam">
                <span class="fontfam">Employee Number</span>
                <InputText
                  type="text"
                  class="field-tag"
                  v-model="createEmp.employeeId"
                />
              </div>

              <div class="col">
                <span class="fontfam">Employee Name</span>
                <InputText
                  type="text"
                  class="field-tag"
                  v-model="createEmp.name"
                />
              </div>
              <div class="col">
                <span class="fontfam">EmployeeContractType</span>
                <Dropdown
                  style="width: 100%; height: 47px"
                  :options="EmployeType"
                  optionLabel="name"
                  v-model="createEmp.employeeContractType"
                />
              </div>
              <div></div>
            </div>

            <div class="change-option mt-2 ml-6" @click="setOption()">
              + Add Employee
            </div>
            <div class="btn-Style">
              <Button class="cancel-btn mr-3" label="Cancel" />
              <ButtonComponent
                label="submit"
                type="primary"
                class="submitbtn"
                @click="submitNewEmployee()"
              />
            </div>
          </div>
        </div>
        <div v-else class="flex justify-content-left mt-4">
          <div class="col col-5 mt-4">
            <div class="col flex">
              <div class="col">
                <span class="fontfam">Serial Number</span>
                <InputText type="text" class="field" value="01" />
              </div>
              <div class="col fontfam">
                <span class="fontfam">Supervisor Number</span>
                <InputText
                  type="text"
                  class="field-tag"
                  v-model="createEmp.employeeId"
                />
              </div>
              <div class="col">
                <span class="fontfam">Supervisor Name</span>
                <InputText
                  type="text"
                  class="field-tag"
                  v-model="createEmp.name"
                />
              </div>
              <div class="col fontfam">
                <span class="fontfam">Password</span>
                <Password
                  v-model="createEmp.password"
                  :feedback="false"
                  toggleMask
                />
              </div>
            </div>
            <div class="change-option mt-2 ml-6" @click="setOption()">
              + Add supervisor
            </div>
            <div class="btn-Style">
              <Button class="cancel-btn mr-3" label="Cancel" />
              <ButtonComponent
                label="submit"
                type="primary"
                class="submitbtn"
                @click="submitNewEmployee()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "primeicons/primeicons.css";
import { mapState, mapActions } from "vuex";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Password from "primevue/password";

export default {
  setup() {},
  name: "supervisorBoardComponent",
  components: {
    Button,
    InputText,
    Dropdown,
    Password,
  },
  data: () => ({
    createEmp: {
      name: "",
      employeeId: "",
      employeeType: "",
      password: "",
      employeeContractType: null,
    },
    enableSupervisor: false,
    selectedType: null,
    onboardingType: [{ name: "Supervisor" }, { name: "Employee" }],
    EmployeType: [
      { name: "Company Employee" },
      { name: "Contract Employee - Hourly Wages" },
      { name: "Contract Employee - PCS" },
    ],
  }),
  computed: {
    ...mapState({
      employee: (state) => state.employee.employeeDetails,
    }),
  },
  methods: {
    ...mapActions(["createNewEmployee"]),
    // setOptionActive() {
    //   this.$router.push(
    //     "/supervisor/onboardingWork/supervisorBoardComponent/supervisorOnboardComponent/supervisorDepartmentComponent"
    //   );
    // },
    submitNewEmployee: async function () {
      if (this.selectedType === null) {
        this.createEmp["employeeType"] = "Employee";
      } else {
        this.createEmp["employeeType"] = this.selectedType.name;
      }
      let payload = {
        name: this.createEmp.name,
        employeeId: this.createEmp.employeeId,
        employeeType: this.createEmp.employeeType,
        password: this.createEmp.password,
        employeeContractType: this.createEmp.employeeContractType.name,
      };
      await this.createNewEmployee(payload);
      this.createEmp.name= "",
      this.createEmp.employeeId="",
      this.createEmp.employeeType="",
      this.createEmp.password = '',
      this.createEmp.employeeContractType.name = ''

    },
    clearData() {
      this.createEmp.name = "";
      this.createEmp.employeeId = "";
    },
    createSupervisor() {
      this.enableSupervisor = true;
    },
    createEmployee() {
      // this.enableSupervisor = false
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";
.btn {
  margin-top: -2rem;
  margin-left: 54rem;
}

.Employee {
  width: 65.438rem;
  height: 20rem;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: 2.188rem;
}
.fontfam {
  font-family: system-ui;
  font-size: 15px;
}

.field {
  width: 6.188rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}

.field-tag {
  width: 15.375rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}

.col {
  color: #7a7a7a;
  font-family: "OpenSans-Regular";
  font-size: 14px;
  line-height: 30px;
  margin-left: 0.813rem;
  margin-top: -1.25rem;
  font-weight: 600;
}

.btn-Style {
  display: flex;
  justify-content: end;
  margin-right: -35.625rem;
  margin-top: -3.5rem;
}

.chosen {
  background-color: rgb(55, 235, 55);
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 10.938rem;
  margin-top: -2.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 4px;
  width: 4.25rem;
  height: 2.5rem;
}

.avatar {
  margin-top: 0.625rem;
  margin-left: 4.188rem;
  size: 2rem;
}

.submitbtn {
  margin-top: 1.375rem;
}
.supervisor-btn {
  display: flex;
  justify-content: end;
}

.cancel-btn {
  background-color: #ffffff;
  color: #555555;
  padding: 8px 18px;
  font-size: 14px;
  border: 1px solid #555555;
  border-radius: 4px;
  height: 38px;
  margin-top: 1.313rem;
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
.grid-Style {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.deleted-badge {
  border-radius: 12px;
  width: max-content;
  height: 26px;
  color: #8083a3;
  background: #e4e6e8;
  opacity: 0.6;
  border: 1px solid #e4e6e8;
}
.fontsize {
  font-size: 10px;
  font-weight: 500;
}
::v-deep .p-dropdown {
  width: 20%;
}
</style>
