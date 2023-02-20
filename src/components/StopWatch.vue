<template>
  <div>
    <div class="row m-5">
      <div class="flex details">
        <div>
          <div class="nameid">
            <img src="@/assets/Markwilliams.png" />
            <div class="Name fontFamily-Regular">
              {{ this.datas.employeeId.name }}
            </div>
            <div class="id fontFamily-Regular">
              {{ this.datas.employeeId.employeeId }}
            </div>
          </div>
          <div class="time">
            <i class="pi pi-clock font-black" style="font-size: 1.3rem"></i>
            <sapn class="intime">Intime</sapn>
            <div class="timeprops timeMargin font-black fontFamily-Regular">
              {{ timeFormatter(this.datas.inTime) }} AM
            </div>
          </div>
          <div class="Ttime fontFamily-Regular">
            {{}}
            <span class="timeHead">Total Time</span>
            <div class="timeprops font-black fontFamily-Regular">
              <!-- {{ dataChanger(this.datas.floorTime) }} -->
              <!-- {{ floorTimerStop[index]}} -->
              Floor<span class="totalTime"
                ><span>{{ floorTimer.days }}</span
                >:<span>{{ floorTimer.hours }}</span
                >:<span>{{ floorTimer.minutes }}</span
                >:<span>{{ floorTimer.seconds }}</span></span
              >
            </div>
          </div>
          <div class="wctime fontFamily-Regular">
            <span class="timeHeads">Total Time</span>
          </div>
          <div class="wctimer font-black fontFamily-Regular">
            WC<span class="totalTime">
              <span>{{ workCenterTimer.days }}</span
              >:<span>{{ workCenterTimer.hours }}</span
              >:<span>{{ workCenterTimer.minutes }}</span
              >:<span>{{ workCenterTimer.seconds }}</span></span
            >
          </div>
        </div>
      </div>

      <div class="flex mt-6">
        <div
          v-if="
            this.datas.status == 'Pause' ||
            this.datas.status == 'End' ||
            this.datas.status == ''
          "
        >
          <div
            v-if="!this.datas.startTimer && !this.datas.endTimer"
            class="field fontFamily-Regular col-4"
          >
            Actual Start
            <div></div>

            <input type="text" class="tag inputField" />
            <span class="actualTime"
              ><span>{{ actualTime.days }}</span
              >:<span>{{ actualTime.hours }}</span
              >:<span>{{ actualTime.minutes }}</span
              >:<span>{{ actualTime.seconds }}</span></span
            >
            <div class="flex">
              <ButtonComponent
                label="Start"
                @click="startTimerButton(this.datas.workCenterTime)"
                type="yellow"
                class="chosentwo cursor-pointer fontFamily-Regular button_time"
              />
            </div>
          </div>
        </div>
        <div>
          <div
            v-if="
              (this.datas.startTimer && !this.datas.endTimer) ||
              this.datas.status == 'Start'
            "
            class="field fontFamily-Regular col-4"
          >
            Pause / End
            <div></div>
            <span>{{ Time.days }}</span
            >:<span>{{ Time.hours }}</span
            >:<span>{{ Time.minutes }}</span
            >:<span>{{ Time.seconds }}</span>
            <div class="flex">
              <ButtonComponent
                label="Pause"
                type="yellow"
                @click="PauseTimerButton()"
                class="chosentwo pause cursor-pointer fontFamily-Regular"
              />
              <ButtonComponent
                @click="endTimerButton(index)"
                label="End"
                type="pink"
                class="chosentwo end cursor-pointer fontFamily-Regular"
              />
            </div>
          </div>
        </div>
        <!-- <div
              v-if="!this.datas.startTimer && this.datas.endTimer"
              class="field fontFamily-Regular col-4"
            >
              Ended
              <div></div>
            
              <div class="flex" @click="stopwatch.reset()">
                <ButtonComponent
                  label="Start"
                  type="yellow"
                  class="chosentwo cursor-pointer fontFamily-Regular"
                />
              </div>
            </div> -->
      </div>
      <!-- {{ this.datas }} -->
    </div>
  </div>
</template>
   <script>
import { mapActions } from "vuex";
// import { defineComponent } from "vue";
import { useStopwatch } from "vue-timer-hook";
// import Button from "primevue/button";
import moment from "moment";
export default {
  components: {},
  name: "stopWatch",
  props: ["datas"],
  setup() {
    const autoStart = false;
    const floorTimer = useStopwatch(autoStart);
    const stopwatch = useStopwatch(autoStart);
    const workCenterTimer = useStopwatch(autoStart);
    const actualTime = useStopwatch(autoStart);
    const realTime = useStopwatch(autoStart);
    return {
      stopwatch,
      workCenterTimer,
      realTime,
      floorTimer,
      actualTime,
      startTimer: false,
      endTimer: false,
      OpenStart: [],
    };
  },
  created() {
    this.stopwatch.pause();
    this.floorTimer = useStopwatch(this.datas.floorTime * 60);
    this.workCenterTimer = useStopwatch(this.datas.workCenterTime * 60);
    this.actualTime = useStopwatch(this.datas.hoursWorked * 60);
    this.stopwatch = useStopwatch(this.datas.hoursWorked * 60);
    this.Time = useStopwatch(this.datas.hoursWorked * 60);
    this.OpenStart = this.datas;
  },

  methods: {
    ...mapActions(["updateEmployeeStart", "getEmployeeData"]),
    timeFormatter(date) {
      return moment(String(date)).format("hh:mm");
    },
    async startTimerButton() {
      this.OpenStart["startTimer"] = true;
      this.stopwatch.start();
      this.workCenterTimer.start();
      this.actualTime.start();
      this.Time.start();

      let payload = {
        _id: this.OpenStart["_id"],
        status: "Start",
      };
      await this.updateEmployeeStart(payload);
      await this.getEmployeeData(localStorage.getItem("workId"));
    },
    async PauseTimerButton() {
      this.OpenStart["startTimer"] = false;
      this.stopwatch.pause();
      this.actualTime.pause();
      this.Time.pause();
      this.Time.pause();
      let payload = {
        _id: this.OpenStart["_id"],
        status: "Pause",
      };
      await this.updateEmployeeStart(payload);
      await this.getEmployeeData(localStorage.getItem("workId"));
    },

    async endTimerButton() {
      let payload = {
        _id: this.OpenStart["_id"],

        status: "End",
      };
      await this.updateEmployeeStart(payload);
      this.OpenStart["startTimer"] = false;
      this.actualTime.pause();
      this.stopwatch.pause();
      this.Time.pause();
      await this.getEmployeeData(localStorage.getItem("workId"));
    },
  },
  mounted() {
    this.stopwatch.pause();
    if (
      this.datas.status == "Pause" ||
      this.datas.status == "End" ||
      this.datas.status == ""
    ) {
      this.workCenterTimer.pause();
    } else if (this.datas.status == "Start") {
      this.workCenterTimer.start();
    }

    this.floorTimer.start();
    this.actualTime.pause();
    this.realTime.start();
  },

  //     watch:{
  // 'employeeDatas':function (value){
  //    this.employeeData = JSON.parse(JSON.stringify(value))
  // }
  //   },
};
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
.actualTime {
  position: relative;
  bottom: 35px;
  right: -11px;
}
.button_time {
  position: relative;
  bottom: 26px;
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
  margin-left: 84px !important;
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