<template>
  <div>
    <div class="btn">
      <ButtonComponent
        label="+ Employee Onboarding"
        type="primary"
        @click="employeeOnboard()"
      />
    </div>
    <div
      class="flex mt-2 justify-content-center"
      v-for="(data, index) in datas"
      :key="index"
    >
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
        <div class="flex justify-content-left mt-4">
          <div class="col col-5 mt-4">
            <div class="col flex">
              <div class="col">
                Employee ID
                <Dropdown
                  class="field dropdown"
                  :options="filteredData"
                  option-label="employeeId"
                  v-model="data.employeeId"
                  @change="selectEmpId($event, index)"
                  placeholder="Select Employee ID"
                />
                <!-- <input type="text" class="field" v-model="employee.id" /> -->
              </div>
              <div class="col">
                Employee Name
                <!-- <input type="text" class="field-tag" v-model="employee.name" /> -->
                <InputText
                  type="text"
                  class="field-tag disableInput"
                  v-model="data.employeeName"
                  :disabled="true"
                />
              </div>
              <div class="col">
                Actual Start
                <InputText
                  type="text"
                  class="field-tag"
                  v-model="employee.timer"
                  disabled="true"
                />
                <div class="flex">
                  <ButtonComponent
                    label="Start"
                    @click="startTimerButton(index)"
                    type="yellow"
                    disabled="disabled"
                    class="chosen cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div class="col flex">
              <div class="col">
                Intime <br />
                <InputText
                  type="text"
                  class="field"
                  :disabled="true"
                  v-model="data.employeeIntime"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="change-option mt-2 ml-6">+ Add Employees</div>
    <div class="btn-Style">
      <Button class="cancel-btn mr-3" label="Cancel" />
      <ButtonComponent
        label="submit"
        type="primary"
        class="submitbtn"
        @click="setOptionActive()"
      />
    </div>
  </div>
</template>

<script>
import "primeicons/primeicons.css";
// import Avatar from "../../components/Avatar.vue";
import { mapState, mapActions } from "vuex";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";

export default {
  setup() {},
  name: "OnboardingComponent",
  data() {
    return {
      datas: [
        {
          employeeId: null,
          employeeName: null,
          workerType: this.$route.params.name,
          employeeIntime: null,
          filterId: null,
        },
      ],
    };
  },
  components: {
    // Avatar,
    InputText,
    Button,
    Dropdown,
  },
  async mounted() {
    this.convertDate();
    // const id = await this.workCenterId;
    // localStorage.setItem("workId",id)
    await this.getParticularWorkcenter(localStorage.getItem("workId"));
  },
  computed: {
    ...mapState({
      employee: (state) => state.employee.employeeDetails,
      workCenterId: (state) => state.workCenter.workCenterId,
      filteredData: (state) => state.workCenter.filteredData,
    }),
  },
  // watch : {
  //    "$store.state.workCenter.filteredData" : function (){

  //    }
  // },
  methods: {
    ...mapActions(["getParticularWorkcenter", "submitOnboard"]),
    setOptionActive: async function () {
      let data = {
        employeeId: this.datas.filterId,
        workCenterId: localStorage.getItem("workId"),
        inTime: new Date(),
      };

      this.submitOnboard(data);
      if (this.$route.path == "/workCenter/onboarding") {
        this.$router.push("/workCenter/BoardComponent");
        // this.$router.push("/workCenter/OnboardComponent");
      } else {
        // this.$router.push("/supervisor/onboardingWork/supervisorBoardComponent");
        this.$router.push(
          "/supervisor/onboardingWork/supervisorBoardComponent/supervisorOnboardComponent"
        );
      }
    },
    convertDate() {
      for (let i in this.datas) {
        const time = new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        this.datas[i].employeeIntime = time.slice(0, time.length - 3);

        // return this.datas[i].employeeIntime
      }
    },
    setOption() {
      this.datas.push({
        employeeId: null,
        employeeName: null,
        workerType: this.$route.params.name,
        employeeIntime: null,
      });
      this.convertDate();
      // if(this.$route.path == "/workCenter/onboarding"){
      //   this.$router.push("/workCenter/OnboardsComponent");
      // }
    },
    employeeOnboard() {
      if (this.$route.path == "/supervisor/onboardingWork") {
        this.$router.push(
          "/supervisor/onboardingWork/supervisorBoardComponent"
        );
      }
    },
    selectEmpId(event, index) {
      //  const name = event.value

      this.datas.filterId = event.value._id;

      this.datas[index].employeeName = event.value.name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";
.btn {
  margin-top: 2rem;
  margin-left: 54rem;
}

.Employee {
  width: 65.438rem;
  height: 25rem;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: 2.188rem;
}

.field {
  width: 6.188rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-family: sans-serif;
  font-weight: 600;
  border-radius: 3px;
}
.dropdown {
  width: 11.188rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-family: sans-serif;
  font-weight: 500;
  border-radius: 3px;
}

.field-tag {
  width: 15.375rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-family: sans-serif;
  font-weight: 600;
  border-radius: 3px;
}

.col {
  color: #7a7a7a;
  font-family: system-ui;
  font-weight: 600;
  font-size: 15px;
  line-height: 30px;
  margin-left: 0.813rem;
  margin-top: -1.25rem;
}

.btn-Style {
  display: flex;
  justify-content: end;
  // margin-right: -35.625rem;
  margin-top: -2.5rem;
}

.chosen {
  background-color: rgb(55, 235, 55);
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 10.938rem;
  margin-top: -2.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 7px;
  width: 4.25rem;
  height: 2.5rem;
  font-weight: 500 !important;
}

.avatar {
  margin-top: 0.625rem;
  margin-left: 4.188rem;
  size: 2rem;
}

.submitbtn {
  margin-top: 1.375rem;
}
.disableInput {
  font-weight: 600 !important;
  color: black;
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
</style>
