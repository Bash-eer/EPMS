<template>
  <div>
    <div class="col flex col-8 mt-3" v-if="this.BreakDownDatas == undefined">
      <div class="input-data">
        Breakdown Start Date & Time
        <div v-if="this.startTimer">
          <input type="text" class="input-fieldfive" disabled />
        </div>
        <div v-if="!this.startTimer">
          <input
            type="text"
            class="input-fieldfive"
            value="00 :00: 00"
            disabled
          />
          <div class="flex">
            <button
              type="yellow"
              :key="renderkey"
              class="start-btn cursor-pointer"
              @click="startTimerButton()"
            >
              start
            </button>
          </div>
        </div>
        <span class="stopTimer" v-if="this.startTimer">
          <span>{{ BreakTimer.days }}</span
          >:<span>{{ BreakTimer.hours }}</span
          >:<span>{{ BreakTimer.minutes }}</span
          >:<span>{{ BreakTimer.seconds }}</span>
        </span>
      </div>

      <div class="input-data mar-45" v-if="this.startTimer">
        Breakdown End Date & Time
        <input type="text" class="input-fieldfive" />
        <div class="flex">
          <ButtonComponent
            label="End"
            class="end-btn cursor-pointer"
            @click="EndTimer()"
          />
        </div>
        <span class="stopTimer">
          <span>{{ stopwatch.days }}</span
          >:<span>{{ stopwatch.hours }}</span
          >:<span>{{ stopwatch.minutes }}</span
          >:<span>{{ stopwatch.seconds }}</span>
        </span>
      </div>
    </div>
    <div class="col flex col-8 mt-3" v-if="this.BreakDownDatas != undefined">
      <div class="col-8">
        <div>
          <div class="col flex">
            <div class="input-data" v-if="BreakDownDatas.status == 'End'">
              Breakdown Start Date & Time
              <div v-if="this.startTimer">
                <input type="text" class="input-fieldfive" disabled />
              </div>
              <div v-if="!this.startTimer">
                <input type="text" class="input-fieldfive" disabled />
                <span class="stopTimer">
                  <span>{{ BreakTimer.days }}</span
                  >:<span>{{ BreakTimer.hours }}</span
                  >:<span>{{ BreakTimer.minutes }}</span
                  >:<span>{{ BreakTimer.seconds }}</span></span
                >
                <div class="flex">
                  <button
                    type="yellow"
                    :key="renderkey"
                    class="start-btn-now cursor-pointer"
                    @click="submitStartData(BreakDownDatas.totalHours)"
                  >
                    start
                  </button>
                </div>
              </div>
              <span class="stopTimer" v-if="this.startTimer">
                <span>{{ stopwatch.days }}</span
                >:<span>{{ stopwatch.hours }}</span
                >:<span>{{ stopwatch.minutes }}</span
                >:<span>{{ stopwatch.seconds }}</span>
              </span>
            </div>
            <div>
              <div class="input-data" v-if="this.startTimer">
                Breakdown End Date & Time
                <input type="text" class="input-fieldfive" />
                <div class="flex">
                  <ButtonComponent
                    label="End"
                    class="end-btn cursor-pointer"
                    @click="submitEndData()"
                  />
                </div>
                <span class="stopTimer">
                  <span>{{ stopwatch.days }}</span
                  >:<span>{{ stopwatch.hours }}</span
                  >:<span>{{ stopwatch.minutes }}</span
                  >:<span>{{ stopwatch.seconds }}</span>
                </span>
              </div>
            </div>
            <div v-if="BreakDownDatas.status == 'Start'">
              <div class="input-data">
                Breakdown End Date & Time
                <input type="text" class="input-fieldfive" />
                <div class="flex">
                  <ButtonComponent
                    label="End"
                    class="end-btn cursor-pointer"
                    @click="submitEndData()"
                  />
                </div>
                <span class="stopTimer">
                  <span>{{ stopwatch.days }}</span
                  >:<span>{{ stopwatch.hours }}</span
                  >:<span>{{ stopwatch.minutes }}</span
                  >:<span>{{ stopwatch.seconds }}</span>
                </span>
              </div>
            </div>
            <div class="input-data">
              Hours Used
              <input type="text" class="input-fieldsix" v-model="hoursUsed" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <button class="back-btn cursor-pointer" @click="clickBack()">Back</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { useStopwatch } from "vue-timer-hook";
export default {
  props: ["clickBack"],

  data() {
    const autoStart = false;
    const stopwatch = useStopwatch(autoStart);
    const BreakTimer = useStopwatch(autoStart);
    return {
      stopwatch,
      BreakTimer,
      startTimer: false,
      breakdatas: [],
      hoursUsed: 0,
    };
  },
  computed: {
    ...mapState({
      BreakDownDatas: (state) => state.order.BreakDownDatas,
    }),
  },
  watch: {
    BreakDownDatas: function () {
      this.hoursUsed = (this.BreakDownDatas.totalHours / 60).toFixed(1);
      this.BreakTimer = useStopwatch(this.BreakDownDatas.totalHours * 60);
      this.stopwatch = useStopwatch(this.BreakDownDatas.totalHours * 60);
      this.BreakTimer.pause();
    },
  },
  methods: {
    ...mapActions([
      "getBreakDownDatas",
      "breakStartSubmit",
      "updateBreakDownDatas",
    ]),
    startTimerButton() {
      this.startTimer = true;
      this.stopwatch.start();
      let data = {
        orderId: localStorage.getItem("OrderId"),
        workCenterId:localStorage.getItem("workId")
      };
      this.breakStartSubmit(data);
    },
    submitStartData(currentValue) {
      this.startTimer = true;
      this.stopwatch = useStopwatch(currentValue * 60);
      this.stopwatch.start();
      this.BreakTimer.start();
      let data = {
        orderId: localStorage.getItem("OrderId"),
        status: "Start",
      };
      this.updateBreakDownDatas(data);
    },
    submitEndData() {
      this.startTimer = false;
      this.stopwatch.pause();
      let data = {
        orderId: localStorage.getItem("OrderId"),
        status: "End",
      };
      this.updateBreakDownDatas(data);
      this.getBreakDownDatas(localStorage.getItem("OrderId"));
    },
    EndTimer() {
      this.startTimer = false;
      this.stopwatch.reset();
      this.BreakTimer.pause();
    },
  },
  mounted() {
    this.BreakTimer.pause();
    // this.BreakTimer = useStopwatch(this.BreakDownDatas.hoursUsed*60)
  },
  created() {
    // this.hoursUsed=this.BreakDownDatas.hoursUsed || null;
    //  this.BreakTimer = useStopwatch(9*60)

    this.getBreakDownDatas(localStorage.getItem("OrderId"));
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";

::v-deep.p-toolbar {
  background-color: #6381e39e;
  width: 66.25rem;
  height: 10.375rem;
  border-radius: 10px;
}

::v-deep.pi-building {
  margin-left: 1.563rem;
  color: #bf360c;
}

.start-btn-now[data-v-bfdc62ea] {
  background-color: #2fc10b;
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 10rem;
  margin-top: -4.65rem;
  border: 2px solid #e6e6e6;
  border-radius: 5px;
  width: 4.25rem;
  height: 2.5rem;
}

.input-field {
  width: 11.313rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
}
.stopTimer {
  position: relative;
  bottom: 38px;
  left: 17px;
}
.input-fieldfour {
  width: 15.5rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  font-family: "OpenSans-Regular";
  font-weight: 600;
  font-size: 15px;
}

.input-fieldfive {
  width: 14.938rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  font-family: "OpenSans-Regular";
  font-weight: 600;
  font-size: 15px;
}

.input-fieldsix {
  width: 8.438rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  font-family: "OpenSans-Regular";
  font-weight: 600;
  font-size: 15px;
}

.start-btn {
  background-color: #2fc10b;
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 11rem;
  margin-top: -2.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 5px;
  width: 4.25rem;
  height: 2.5rem;
}

.end-btn {
  background-color: #ff4e43;
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 10.875rem;
  margin-top: -2.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 5px;
  width: 3.813rem;
  height: 2.5rem;
}

.back-btn {
  background-color: #ff8c22;
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 62.188rem;
  margin-top: -3.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 6px;
  width: 69px;
  height: 2.5rem;
}
.input-data {
  color: #7a7a7a;
  font-weight: 600;
  font-family: "OpenSans-Regular";
  font-size: 14px;
  line-height: 30px;
  margin-left: 7px;
  margin: 48px;
}
.mar-45 {
  margin: 45px;
}
</style>
