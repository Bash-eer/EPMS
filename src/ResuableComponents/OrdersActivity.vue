<template>
  <div class="col-8">
    <div>
      <div class="col flex">
        <div class="input-data">
          <label>Activity{{ activityData.activityNumber }}</label
          ><br />
          <input type="text" class="input-fieldfour" v-model="activityfield" />
        </div>

        <div
          class="input-data"
          v-if="activityData.status == 'End' || activityData.status == ''"
        >
          Actual Start

          <div
            v-if="
              this.activityData.startTimer || activityData.status == 'Start'
            "
          >
            <input type="text" class="input-fieldfive" disabled />
          </div>
          <div>
            <div v-if="!this.activityData.startTimer">
              <input type="text" class="input-fieldfive" disabled />
              <span class="stopTimer">
                <span>{{ Time.days }}</span
                >:<span>{{ Time.hours }}</span
                >:<span>{{ Time.minutes }}</span
                >:<span>{{ Time.seconds }}</span>
              </span>
              <div class="flex">
                <button
                  type="yellow"
                  :key="renderkey"
                  class="start-btn cursor-pointer button-type"
                  @click="
                    startTimerButton(activityData.hoursUsed, activityData._id)
                  "
                >
                  start
                </button>
              </div>
            </div>
          </div>
          <div>
            <span
              class="stopTimer"
              v-if="
                this.activityData.startTimer || activityData.status == 'Start'
              "
            >
              <span>{{ stopwatch.days }}</span
              >:<span>{{ stopwatch.hours }}</span
              >:<span>{{ stopwatch.minutes }}</span
              >:<span>{{ stopwatch.seconds }}</span>
            </span>
          </div>
        </div>
        <div>
          <div
            class="input-data"
            v-if="activityData.startTimer || activityData.status == 'Start'"
          >
            Actual End
            <input type="text" class="input-fieldfive" />
            <div class="flex">
              <ButtonComponent
                label="End"
                class="end-btn cursor-pointer"
                @click="EndTimer(activityData._id)"
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
</template>
<script>
import { useStopwatch } from "vue-timer-hook";
import { mapActions } from "vuex";
export default {
  props: ["activityData"],
  data() {
    const autoStart = false;
    const stopwatch = useStopwatch(autoStart);
    const Time = useStopwatch(autoStart);
    const activityTime = useStopwatch(autoStart);
    return {
      stopwatch,
      activityTime,
      Time,
      activityfield: "",
      OpenStart: [],
      renderkey: 10,
      hoursUsed: 0,
    };
  },
  mounted() {
    if (this.activityData.status == "End" || this.activityData.status == "") {
      this.stopwatch = useStopwatch(this.activityData.hoursUsed * 60);
      this.stopwatch.pause();

      this.Time = useStopwatch(this.activityData.hoursUsed * 60);
    } else if (this.activityData.status == "Start") {
      this.stopwatch.start();

      this.stopwatch = useStopwatch(this.activityData.hoursUsed * 60);
      this.Time = useStopwatch(this.activityData.hoursUsed * 60);
    }
    this.Time.pause();
  },
  created() {
    this.activityTime.pause();
    console.log(this.Start, "this.Startthis.Startthis.Start");
  },

  methods: {
    ...mapActions(["updateOperationOrderStart", "getActivityStopWatch"]),
    async startTimerButton(currentValue, id) {
      console.log(this.OpenStart, "this.OpenStart");
      this.OpenStart["startTimer"] = true;
      this.stopwatch = useStopwatch(currentValue * 60);
      this.stopwatch.start();

      let payload = {
        _id: id,
        status: "Start",
      };
      await this.updateOperationOrderStart(payload);
      this.Time.start();
    },
    async EndTimer(id) {
      this.OpenStart["startTimer"] = false;
      this.stopwatch.pause();
      this.Time.pause();
      // this.activityTime.reset();
      let payload = {
        _id: id,
        status: "End",
      };
      await this.updateOperationOrderStart(payload);
      this.getActivityStopWatch();
    },
  },

  watch: {
    activityData: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.OpenStart = newValue;
        this.activityfield = newValue.activityName;
        this.hoursUsed = (newValue.hoursUsed / 60).toFixed(1);
        this.activityTime = useStopwatch(newValue.hoursUsed * 60);
      },
    },
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
  margin-left: 25px;
  color: #bf360c;
}

.input-data {
  color: #7a7a7a;
  font-weight: 600;
  font-family: "OpenSans-Regular";
  font-size: 14px;
  line-height: 30px;
  margin-left: 7px;
  margin: 40px;
  margin-bottom: -50px;
}

.input-field {
  width: 11.3125rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-style: Montserrat;
  border-radius: 3px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}

.input-fieldfour {
  width: 11.5625rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-style: Montserrat;
  border-radius: 3px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}
.button-type {
  position: relative;
  bottom: 29px;
}
.input-fieldfive {
  width: 15.1875rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-style: Montserrat;
  border-radius: 3px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}

.input-fieldsix {
  width: 8.4375rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-style: Montserrat;
  border-radius: 3px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}

.input-fieldseven {
  width: 8.4375rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-style: Montserrat;
  border-radius: 3px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}

.start-btn {
  background-color: #2fc10b;
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 10.688rem;
  margin-top: -2.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 5px;
  width: 4.25rem;
  font-family: "OpenSans-Light";
  font-weight: 600;
  height: 2.5rem;
}

.end-btn {
  background-color: #ff4e43;
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 10.688rem;
  margin-top: -2.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 4px;
  width: 4.25rem;
  height: 2.5rem;
}
.stopTimer {
  position: relative;
  bottom: 38px;
  left: 17px;
}
</style>