<template>
  <div>
    <div class="btn">
      <ButtonComponent label="+ Employee Onboarding" type="primary" />
    </div>
    <div class="flex justify-content-center mt-2">
      <div class="thirdboard">
        <div class="flex justify-content-left mt-8">
          <div class="col col-7 mt-4">
            <div class="col flex">
              <div class="detailstwo">
                <div class="nameone">
                  <!-- <Avatar /> -->
                  <img src="@/assets/Markwilliams.png" />
                  <div class="Name fontFamily-Regular">{{ name }}</div>
                  <div class="id fontFamily-Regular">{{ id }}</div>
                </div>
                <div class="timeone">
                  <i class="pi pi-clock font-black" style="font-size: 1rem"></i>
                  <span class="intme">Intime</span>
                  <div
                    class="timeprops font-black fontFamily-Regular margin-left"
                  >
                    {{ time }}
                  </div>
                </div>
                <div class="Ttimeone fontFamily-Regular">
                  <span class="totaltime">Total time</span>
                  <div class="timeprops font-black fontFamily-Regular">
                    {{ floortime }}
                  </div>
                </div>
                <div class="wctimeone fontFamily-Regular">
                  <span class="totaltime">Total time</span>
                  <div class="wctimer timeprops font-black fontFamily-Regular">
                    {{ wctime }}
                  </div>
                </div>
                <div class="change-option col mt-7 fontFamily-Regular">
                  + Add Employee
                </div>
              </div>
            </div>
            <div class="col flex">
              <div class="extrafield fontFamily-Regular">
                Actual Start
                <input type="number" class="type" />
                <div class="flex">
                  <button class="chosenthree cursor-pointer fontFamily-Regular">
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 flex second-Style">
          <button class="mr-2 transfer-btn cursor-pointer" @click="goBack()">
            Back
          </button>
          <button class="mr-2 transfer-btn cursor-pointer">Cancel</button>
          <ButtonComponent
            label="Submit"
            type="primary"
            @click="setOptionActive()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "primeicons/primeicons.css";
// import Avatar from "../components/Avatar.vue";

export default {
  setup() {},
  name: "OnboardComponent",
  components: {
    // Avatar,
  },
  computed: {
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
  methods: {
    setOptionActive() {
      this.$router.push("/workCenter/OnboardsComponent");
    },
    goBack() {
      this.$router.push("/workCenter/onboarding");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";
.thirdboard {
  width: 1047px;
  height: 400px;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: 35px;
}

.btn {
  margin-top: 2rem;
  margin-left: 54rem;
}

.detailstwo {
  width: 25.813rem;
  height: 9.563rem;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: 2.313rem;
  margin-top: -3.75rem;
  position: relative;
}
.totaltime {
  margin-left: 9px;
}

.nameone {
  margin-left: 1.25rem;
  margin-top: 0.375rem;
  color: #9da7b5;
  font-size: 12px;
}

.timeone {
  margin-left: 16.563rem;
  margin-top: -2.188rem;
  color: #9da7b5;
  font-size: 12px;
}

.Ttimeone {
  font-size: 12px;
  color: #9da7b5;
  margin-top: 2rem;
  margin-left: 1.188rem;
  width: 8.375rem;
  height: 3.063rem;
  background: #d9d9d9;
  border: 2px solid #f5f4f4;
  border-radius: 6px;
}

.wctimeone {
  font-size: 12px;
  color: #9da7b5;
  margin-top: -3rem;
  margin-left: 10.375rem;
  width: 8.375rem;
  height: 3.063rem;
  background: #d9d9d9;
  border: 2px solid #f5f4f4;
  border-radius: 6px;
}

.extrafield {
  margin-left: 30.625rem;
  margin-top: -9.688rem;
  font-size: 14px;
  color: #7a7a7a;
  line-height: 30px;
  font-weight: 600;
}

.type {
  width: 13.375rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
}
.transfer-btn {
  background-color: #ffffff;
  color: #555555;
  padding: 8px 9px;
  font-size: 14px;
  border: 1px solid #555555;
  border-radius: 4px;
  width: 4.563rem;
  height: 2.5rem;
}

.second-Style {
  margin-left: 46.813rem;
  margin-top: 4.813rem;
}

.chosenthree {
  margin-left: 8.938rem;
  margin-top: -2.75rem;
  background-color: rgb(55, 235, 55);
  color: #f5f4f4;
  padding: 8px 9px;
  border: 2px solid #e6e6e6;
  border-radius: 4px;
  width: 4.25rem;
  height: 2.5rem;
}

.Name {
  margin-top: -3rem;
  margin-left: 3.6rem;
  color: #0b1354;
  font-size: 15px;
  line-height: 19.4px;
  font-weight: 600;
}
.pi-clock {
  position: absolute;
  top: 14%;
  right: 21%;
}
.intme {
  position: relative;
  left: 51%;
}

.id {
  font-size: 12px;
  color: #9da7b5;
  line-height: 14.4px;
  margin-left: 3.6rem;
}
.font-black {
  font-weight: 600;
  color: black;
}

.timeprops {
  font-size: 16px;
  color: #0b1354;
  line-height: 19.4px;
  margin-left: 0.625rem;
}
.margin-left {
  margin-left: 71px;
}
</style>
