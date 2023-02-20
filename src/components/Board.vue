<template>
  <div>
    <div class="btn">
      <ButtonComponent label="+ Employee Onboarding" type="primary" />
    </div>
    <div class="flex mt-2 justify-content-center">
      <div class="Employee">
        <!-- <EmployeeCard/> -->
        <StopWatch
          v-for="(data, index) in employeeData"
          :datas="data"
          :key="index"
        />
        <div>
          <div></div>
          <!-- <div>
      
        <h1>vue-timer-hook </h1>
        <p>Timer Demo</p>
        <div>
            <span>{{timer.days}}</span>:<span>{{timer.hours}}</span>:<span>{{timer.minutes}}</span>:<span>{{timer.seconds}}</span>
        </div>
        <p>{{timer.isRunning ? 'Running' : 'Not running'}}</p>
        <button @click="timer.start()">Start</button>
        <button @click="timer.pause()">Pause</button>
        <button @click="timer.resume()">Resume</button>
        <button @click="restartFive()">Restart</button>
    </div> -->
        </div>
        <div
          class="change-option addemp option-line fontFamily-Regular"
          @click="addEmployee()"
        >
          + Add Employee
        </div>
        <div class="bttn-Style">
          <Button
            class="cancel-btn fontFamily-Regular"
            label="Back"
            @click="setOptionActive()"
          />
          <!-- <Button class="cancel-btn fontFamily-Regular" label="Cancel" />
          <ButtonComponent
            label="submit"
            type="primary"
            class="submitbtn"
            @click="saveButtons()"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import "primeicons/primeicons.css";
import Button from "primevue/button";
import { defineComponent } from "vue";
import { useStopwatch } from "vue-timer-hook";
import { useTimer } from "vue-timer-hook";
import { watchEffect, onMounted } from "vue";
import StopWatch from "./StopWatch.vue";
export default defineComponent({
  setup() {},
  name: "BoardComponent",
  props: {
    datas: {
      type: Object,
    },
  },
  data() {
    const autoStart = true;
    const time = new Date();

    const floorTimerStop = [
      { floorTimerStop1: useStopwatch(autoStart) },
      { floorTimerStop2: useStopwatch(autoStart) },
    ];
    time.setSeconds(time.getSeconds() + 800); // 10 minutes timer
    const timer = useTimer(time);
    const restartFive = () => {
      // Restarts to 5 minutes timer
      const time = new Date();
      time.setSeconds(time.getSeconds() + 300);
      timer.restart(time);
    };
    onMounted(() => {
      watchEffect(async () => {
        if (timer.isExpired.value) {
          console.warn("IsExpired");
        }
      });
    });
    return {
      timer,
      restartFive,
      floorTimerStop,
      employeInformations: {},
      times: {},
      startTimer: false,
      endTimer: false,
      employeeData: [],
      addData: [
        {
          id: "PROP003",
          name: " Mark Williams (operator)",
          time: "09:30:00",
          timer: "00:00:00",
          floortime: "01:30:22",
          wctime: "01:10:33",
        },
        {
          id: "PROP004",
          name: " Mark Williams (operator)",
          time: "09:30:00",
          timer: "00:00:00",
          floortime: "01:30:22",
          wctime: "01:10:33",
        },
        {
          id: "PROP005",
          name: " Mark Williams (operator)",
          time: "09:30:00",
          timer: "00:00:00",
          floortime: "01:30:22",
          wctime: "01:10:33",
        },
        {
          id: "PROP006",
          name: " Mark Williams (operator)",
          time: "09:30:00",
          timer: "00:00:00",
          floortime: "01:30:22",
          wctime: "01:10:33",
        },
      ],
    };
  },
  components: {
    Button,
    StopWatch,
  },

  methods: {
    ...mapActions(["getEmployeeData"]),
    setOptionActive() {
      if (this.$route.path == "/workCenter/BoardComponent") {
        this.$router.push("/workCenter/onboarding");
      } else {
        this.$router.push("/supervisor/onboardingWork");
      }
    },

    dataChanger(currentValue) {
      //     var mind = currentValue % (60 * 60);
      //  var minutes = Math.floor(mind / 60);
      // var secd = mind % 60;
      // var seconds = Math.ceil(secd);
      this.floorTimer = useStopwatch(currentValue * 60);
      return useStopwatch(currentValue * 60);
    },
    addEmployee() {
      this.$router.push("/workCenter/onboarding");
    },
    saveButtons() {
      if (this.$route.path == "/workCenter/BoardComponent") {
        this.$router.push("/workCenter/orders");
      } else {
        this.$router.push("/supervisor/dashboardWork");
      }
    },
  },
  computed: {
    ...mapState({
      employee: (state) => state.employee.employeeDetails,
      workCenterId: (state) => state.workCenter.workCenterId,
      filteredData: (state) => state.workCenter.filteredData,
      employeeDatas: (state) => state.workCenter.employeeDatas,
    }),
    id: {
      get() {
        return this.$store.state.id;
      },
    },
    name: {
      get() {
        return this.$store.state.name;
      },
    },
    time: {
      get() {
        return this.$store.state.time;
      },
    },
    timers: {
      get() {
        return this.$store.state.timer;
      },
    },
    floortime: {
      get() {
        return this.$store.state.floortime;
      },
    },
    wctime: {
      get() {
        return this.$store.state.wctime;
      },
    },
  },

  watch: {
    employeeDatas: function (value) {
      this.employeeData = JSON.parse(JSON.stringify(value));
    },
  },
  async created() {
    // let id = this.workCenterId;
    await this.getEmployeeData(localStorage.getItem("workId"));

    this.employeeDatas.map((list) => {
      this.floorTimer = useStopwatch(list.floorTime * 60);
    });
  },
});
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";
.Employee {
  width: 1047px;
  height: max-content;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: 35px;
}

.btn {
  margin-top: 2rem;
  margin-left: 54rem;
}

.details {
  width: 430px;
  height: 153px;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  position: relative;
}

.nameid {
  margin-left: 14px;
  margin-top: 19px;
  font-size: 12px;
  color: #9da7b5;
  font-family: "OpenSans-Regular";
}
.addemp {
  margin-left: 32px;
}
.pi-clock {
  position: absolute;
  top: 18%;
  right: 30%;
}
.intime {
  position: relative;
  left: 12%;
}

.time {
  font-size: 12px;
  color: #9da7b5;
  margin-left: 296px;
  margin-top: -38px;
  font-family: "OpenSans-Regular";
}
// .timeMargin{
//   margin-left: 25px !important;
// }

.Ttime {
  font-size: 12px;
  color: #9da7b5;
  margin-top: 33px;
  margin-left: 9px;
  font-weight: 400;
  line-height: 14.4px;
  width: 134px;
  height: 49px;
  background: #d9d9d9;
  border: 2px solid #f5f4f4;
  border-radius: 6px;
  padding: 5px;
  // padding: 8px;
  /* font-family: Montserrat; */
}
.timeHead {
  padding: 7px;
  margin: 2px;
  font-weight: 600;
  font-family: system-ui;
}
.timeHeads {
  padding: 2px;
  margin: 2px;
  font-weight: 600;
  font-family: system-ui;
}

.wctime {
  font-size: 12px;
  color: #9da7b5;
  margin-top: -49px;
  margin-left: 173px;
  font-weight: 400;
  line-height: 14.4px;
  width: 134px;
  height: 49px;
  background: #d9d9d9;
  border: 2px solid #f5f4f4;
  border-radius: 6px;
  padding: 5px;
  /* font-family: Montserrat; */
}

.field {
  margin-left: 490px;
  margin-top: -176px;
  font-size: 14px;
  color: #7a7a7a;
  line-height: 25px;
  font-weight: 600;
  /* font-family: Montserrat; */
}

.tag {
  width: 246px;
  height: 47px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}
.tags {
  width: 270px;
  height: 47px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  color: black;
  font-weight: 600;
  font-size: 14px;
  /* font-family: Montserrat; */
}

.bttn-Style {
  display: flex;
  justify-content: end;
  margin-bottom: 22px;
}
.totalTime {
  margin-left: 6px;
}
.color {
  background-color: orange !important;
  color: white !important;
  border: none !important;
  margin-right: 10px;
}
.submitbtn {
  margin-right: 10px;
}

.chosentwo {
  margin-left: 175px;
  margin-top: -44px;
  background-color: rgb(55, 235, 55);
  color: #f5f4f4;
  padding: 8px 9px;
  border: 2px solid #e6e6e6;
  border-radius: 5px;
  width: 68px;
  height: 40px;
  font-weight: 500 !important ;
}
.pause {
  margin-left: 123px !important;
  background-color: #f6c000 !important;
  border: 1px solid #ffffff !important;
  font-weight: 500 !important;
}
.end {
  margin-left: 6px !important;
  background-color: #ff7070 !important;
  border: 1px solid #ffffff !important;
  font-weight: 500 !important;
}

.Name {
  margin-top: -50px;
  margin-left: 63px;
  color: #0b1354;
  font-size: 15px;
  line-height: 19.4px;
  font-weight: 600;
}
.font-black {
  font-weight: 600;
  color: black;
}

.id {
  font-size: 12px;
  color: #9da7b5;
  line-height: 14.4px;
  margin-left: 63px;
  font-weight: 600;
}

.timeprops {
  font-size: 15px;
  color: #0b1354;
  line-height: 19.4px;
  margin-left: 10px;
}
.cancel-btn {
  background-color: #ffffff;
  color: #555555;
  padding: 8px 18px;
  font-size: 14px;
  border: 1px solid #555555;
  border-radius: 4px;
  height: 40px;
  margin-right: 10px;
}

::v-deep.wctimer {
  margin-left: 186px;
  margin-top: -26px;
  font-size: 16px;
  color: #0b1354;
  line-height: 19.4px;
}

.time-props {
  margin-top: 20px;
  font-size: 16px;
  color: #0b1354;
  line-height: 19.4px;
}
</style>
