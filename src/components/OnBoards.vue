<template>
  <div>
    <div
      v-if="
        this.$route.path ==
        '/supervisor/onboardingWork/supervisorBoardComponent/supervisorOnboardComponent'
      "
      class="btn"
    >
      <div class="header">
        Department : DHNLK3456
        <span class="headedingSpan">(Assemblt Shop)</span>
      </div>
      <ButtonComponent label="+ Employee Onboarding" type="primary" />
    </div>
    <div v-else class="btnn">
      <ButtonComponent label="+ Employee Onboarding" type="primary" />
    </div>

    <div class="flex justify-content-center mt-2">
      <div class="thirdboard">
        <div class="flex justify-content-left mt-8">
          <div class="col col-5 mt-4">
            <div class="col flex">
              <div class="detailstwo">
                <div class="nameone">
                  <!-- <Avatar /> -->
                  <img src="@/assets/Hawkins.png" />
                  <div class="Name fontFamily-Regular">{{ name }}</div>
                  <div class="id fontFamily-Regular">{{ id }}</div>
                  <div class="timeone">
                    <i
                      class="pi pi-clock font-black"
                      style="font-size: 1 rem"
                    ></i>
                    <span class="margnleft-12">Intime</span>
                    <div class="timeprops font-black fontFamily-Regular">
                      {{ time }}
                    </div>
                    <div class="Ttimeone fontFamily-Regular">
                      <span class="totaltime">Total time</span> <br /><i
                        class="mt-2 ml-2 fltime font-black fontFamily-Regular"
                      >
                        {{ floortime }}
                      </i>
                    </div>
                    <div class="wctimeone fontFamily-Regular">
                      <span class="totaltime">Total time</span><br /><i
                        class="mt-2 ml-2 fltime"
                      >
                        {{ wctime }}
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col flex">
            <div class="boxsecond">
              <div class="datastore">
                <!-- <Avatar /> -->
                <img src="@/assets/Watson.png" />
                <div class="Namee fontFamily-Regular">{{ name }}</div>
                <div class="Id fontFamily-Regular">{{ id }}</div>
                <div class="timecalc">
                  <i class="pi pi-clock" style="font-size: 1 rem"></i>
                  <span class="margnleft-12">Intime</span>
                  <div class="timeprop fontFamily-Regular">{{ time }}</div>
                  <div class="Ttimeonee fontFamily-Regular">
                    <span class="totaltime">Total time</span> <br /><i
                      class="mt-2 ml-2 fltime fontFamily-Regular"
                    >
                      {{ floortime }}
                    </i>
                  </div>
                  <div class="wctimeonee fontFamily-Regular">
                    <span class="totaltime">Total time</span> <br /><i
                      class="mt-2 ml-2 fltime fontFamily-Regular"
                    >
                      {{ floortime }}
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col flex">
              <div class="thirdbox">
                <div class="datastore">
                  <!-- <Avatar /> -->
                  <img src="@/assets/Howard.png" />
                  <div class="Name fontFamily-Regular">{{ name }}</div>
                  <div class="id fontFamily-Regular">{{ id }}</div>
                  <div class="timeone">
                    <i class="pi pi-clock" style="font-size: 1 rem"></i>
                    <span class="margnleft-12">Intime</span>
                    <div class="timeprops fontFamily-Regular">{{ time }}</div>
                    <div class="Ttimeone fontFamily-Regular">
                      <span class="totaltime">Total time</span> <br /><i
                        class="mt-2 ml-2 fltime fontFamily-Regular"
                      >
                        {{ floortime }}
                      </i>
                    </div>
                    <div class="wctimeone fontFamily-Regular">
                      <span class="totaltime">Total time</span><br /><i
                        class="mt-2 ml-2 fltime fontFamily-Regular"
                      >
                        {{ floortime }}
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col flex">
              <div class="fourthbox">
                <div class="datastoreone">
                  <!-- <Avatar /> -->
                  <img src="@/assets/Fox.png" />
                  <div class="Nameone fontFamily-Regular">{{ name }}</div>
                  <div class="Idone fontFamily-Regular">{{ id }}</div>
                  <div class="timecalcc">
                    <i class="pi pi-clock" style="font-size: 1 rem"></i>
                    <span class="margnleft-12">Intime</span>
                    <div class="timepropss fontFamily-Regular">{{ time }}</div>
                    <div class="Ttimeones fontFamily-Regular">
                      <span class="totaltime">Total time</span> <br /><i
                        class="mt-2 ml-2 fltime fontFamily-Regular"
                      >
                        {{ floortime }}
                      </i>
                    </div>
                    <div class="wctimeones fontFamily-Regular">
                      <span class="totaltime">Total time</span><br /><i
                        class="mt-2 ml-2 fltime fontFamily-Regular"
                      >
                        {{ floortime }}
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col flex">
              <div class="fifthbox">
                <div class="datastoretwo">
                  <!-- <Avatar /> -->
                  <img src="@/assets/Markwilliams.png" />
                  <div class="Name fontFamily-Regular">{{ name }}</div>
                  <div class="id fontFamily-Regular">{{ id }}</div>
                  <div class="timeone">
                    <i class="pi pi-clock" style="font-size: 1 rem"></i>
                    <span class="margnleft-12">Intime</span>
                    <div class="timeprops fontFamily-Regular">{{ time }}</div>
                    <div class="Ttimeone fontFamily-Regular">
                      <span class="totaltime">Total time</span><br /><i
                        class="mt-2 ml-2 fltime fontFamily-Regular"
                      >
                        {{ floortime }}
                      </i>
                    </div>
                    <div class="wctimeone fontFamily-Regular">
                      <span class="totaltime">Total time</span> <br /><i
                        class="mt-2 ml-2 fltime fontFamily-Regular"
                      >
                        {{ floortime }}
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col flex second-Style">
          <Button class="cancel-btn mr-3" label="Cancel" />
          <ButtonComponent label="Save" type="primary" @click="gotoNext()" />
        </div>
        <div class="change-option option-line fontFamily-Regular">
          + Add Employee
        </div>
        <div class="col flex">
          <div class="extrafield fontFamily-Regular">
            Pause / End <br />
            <input type="number" class="type-one" />
            <div class="button flex">
              <ButtonComponent
                label="Pause"
                type="yellow"
                class="pause-btn mr-2 borderradius fontFamily-Regular"
              />
              <ButtonComponent
                label="End"
                type="pink"
                class="end-btn borderradius fontFamily-Regular"
              />
            </div>
          </div>
        </div>
        <div class="col flex">
          <div class="extrafield-two fontFamily-Regular">
            Pause / End <br />
            <input type="number" class="type-one" />
            <div class="button flex">
              <ButtonComponent
                label="Pause"
                type="yellow"
                class="pause-btn borderradius mr-2 fontFamily-Regular"
              />
              <ButtonComponent
                label="End"
                type="pink"
                class="end-btn borderradius"
              />
              <!-- <button class="chosenthree cursor-pointer">Start</button> -->
            </div>
          </div>
        </div>
        <div class="col flex">
          <div class="extrafield-three fontFamily-Regular">
            Pause / End <br />
            <input type="number" class="type-one" />
            <div class="button flex">
              <ButtonComponent
                label="Pause"
                type="yellow"
                class="pause-btn borderradius mr-2 fontFamily-Regular"
              />
              <ButtonComponent
                label="End"
                type="pink"
                class="end-btn borderradius"
              />
              <!-- <button class="chosenthree cursor-pointer">Start</button> -->
            </div>
          </div>
        </div>
        <div class="col flex">
          <div class="extrafield-four fontFamily-Regular">
            Ended <br />
            <input type="number" class="type" />
            <div class="flex">
              <button
                class="
                  chosenthree
                  cursor-pointer
                  borderradius
                  fontFamily-Regular
                "
              >
                Start
              </button>
            </div>
          </div>
        </div>
        <div class="col flex">
          <div class="extrafield-five fontFamily-Regular">
            Actual Start234 <br />
            <input type="number" class="type" />
            <div class="flex">
              <button
                class="
                  chosenthree
                  cursor-pointer
                  borderradius
                  fontFamily-Regular
                "
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defineComponent from "./StopWatch.vue";
import "primeicons/primeicons.css";
// import Avatar from "../components/Avatar.vue";
import Button from "primevue/button";

export default {
  setup() {},
  name: "OnboardsComponent",
  components: {
    // Avatar,
    Button,
  },
  methods: {
    gotoNext() {
      if (
        this.$route.path ==
        "/supervisor/onboardingWork/supervisorBoardComponent/supervisorOnboardComponent"
      ) {
        this.$router.push("/supervisor/dashboardWork");
      } else {
        this.$router.push("/workCenter/dashboard");
      }
    },
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
    timer: {
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
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";
.thirdboard {
  width: 1047px;
  height: 1200px;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: 35px;
}
.btnn {
  margin-top: 2rem;
  margin-left: 54rem;
}

.btn {
  margin-top: 2rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header {
  font-family: "OpenSans-Regular";
  font-weight: 600;
  margin-left: 37px;
}
.headedingSpan {
  font-size: 13px;
  opacity: 0.7;
  color: #536172;
  font-weight: 600;
  margin-left: 5px;
}
.badge {
  border-radius: 12px;
  width: max-content;
  height: 26px;
  color: #8083a3;
  background: #e4e6e8;
  opacity: 0.6;
  border: 1px solid #e4e6e8;
}
.detailstwo {
  width: 413px;
  height: 153px;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: 37px;
  margin-top: -80px;
  position: relative;
}

.nameone {
  margin-left: 20px;
  margin-top: 6px;
  color: #9da7b5;
  font-size: 12px;
}
.pi-clock {
  font-weight: 600;
  color: black;
  position: absolute;
  right: 20%;
  top: 11%;
}
.clock {
  position: absolute;
  right: 20%;
  top: 11%;
}

.datastore {
  margin-left: 20px;
  margin-top: 6px;
  color: #9da7b5;
  font-size: 12px;
}

.datastoreone {
  margin-left: 20px;
  margin-top: 6px;
  color: #9da7b5;
  font-size: 12px;
}

.datastoretwo {
  margin-left: 20px;
  margin-top: 6px;
  color: #9da7b5;
  font-size: 12px;
}

.boxsecond {
  width: 367px;
  height: 153px;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: -390px;
  margin-top: 140px;
  position: relative;
}

.thirdbox {
  width: 367px;
  height: 153px;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: -375px;
  margin-top: 321px;
  position: relative;
}

.fourthbox {
  width: 367px;
  height: 153px;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: -581px;
  margin-top: 512px;
  position: relative;
}

.fifthbox {
  width: 367px;
  height: 153px;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: -787px;
  margin-top: 705px;
  position: relative;
}

.timeone {
  margin-left: 265px;
  margin-top: -35px;
  color: #9da7b5;
  /* font-family: Montserrat; */
  font-size: 12px;
}

.timecalc {
  margin-left: 265px;
  margin-top: -35px;
  color: #9da7b5;
  /* font-family: Montserrat; */
  font-size: 12px;
}
.totaltime {
  margin-left: 9px;
}

.timecalcc {
  margin-left: 265px;
  margin-top: -35px;
  color: #9da7b5;
  /* font-family: Montserrat; */
  font-size: 12px;
}

.Ttimeone {
  font-size: 12px;
  color: #9da7b5;
  margin-top: 32px;
  margin-left: -263px;
  width: 134px;
  height: 49px;
  /* font-family: Montserrat; */
  background: #d9d9d9;
  border: 2px solid #f5f4f4;
  border-radius: 6px;
}

.Ttimeonee {
  font-size: 12px;
  color: #9da7b5;
  margin-top: 32px;
  margin-left: -262px;
  width: 134px;
  height: 49px;
  /* font-family: Montserrat; */
  background: #d9d9d9;
  border: 2px solid #f5f4f4;
  border-radius: 6px;
}

.Ttimeones {
  font-size: 12px;
  color: #9da7b5;
  margin-top: 32px;
  margin-left: -262px;
  width: 134px;
  height: 49px;
  /* font-family: Montserrat; */
  background: #d9d9d9;
  border: 2px solid #f5f4f4;
  border-radius: 6px;
}

.wctimeone {
  font-size: 12px;
  color: #9da7b5;
  margin-top: -48px;
  margin-left: -118px;
  width: 134px;
  height: 49px;
  /* font-family: Montserrat; */
  background: #d9d9d9;
  border: 2px solid #f5f4f4;
  border-radius: 6px;
}

.wctimeonee {
  font-size: 12px;
  color: #9da7b5;
  margin-top: -48px;
  margin-left: -117px;
  width: 134px;
  height: 49px;
  /* font-family: Montserrat; */
  background: #d9d9d9;
  border: 2px solid #f5f4f4;
  border-radius: 6px;
}

.wctimeones {
  font-size: 12px;
  color: #9da7b5;
  margin-top: -48px;
  margin-left: -117px;
  width: 134px;
  height: 49px;
  /* font-family: Montserrat; */
  background: #d9d9d9;
  border: 2px solid #f5f4f4;
  border-radius: 6px;
}

.extrafield {
  margin-left: 490px;
  margin-top: -942px;
  font-size: 14px;
  color: #7a7a7a;
  /* font-family: Montserrat; */
  line-height: 30px;
  font-weight: 600;
}

.extrafield-two {
  margin-left: 490px;
  margin-top: -776px;
  font-size: 14px;
  color: #7a7a7a;
  /* font-family: Montserrat; */
  line-height: 30px;
  font-weight: 600;
}

.extrafield-three {
  margin-left: 490px;
  margin-top: -600px;
  font-size: 14px;
  color: #7a7a7a;
  /* font-family: Montserrat; */
  line-height: 30px;
  font-weight: 600;
}

.extrafield-four {
  margin-left: 490px;
  margin-top: -420px;
  font-size: 14px;
  color: #7a7a7a;
  /* font-family: Montserrat; */
  line-height: 30px;
  font-weight: 600;
}
.extrafield-five {
  margin-left: 490px;
  margin-top: -255px;
  font-size: 14px;
  color: #7a7a7a;
  /* font-family: Montserrat; */
  line-height: 30px;
  font-weight: 600;
}

.type {
  width: 246px;
  height: 48px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  /* font-family: Montserrat; */
}
.type-one {
  width: 328px;
  height: 48px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  /* font-family: Montserrat; */
}

.second-Style {
  margin-left: 829px;
  margin-top: 145px;
}

.chosenthree {
  margin-left: 175px;
  margin-top: -44px;
  background-color: rgb(55, 235, 55);
  color: #f5f4f4;
  padding: 8px 9px;
  border: 2px solid #e6e6e6;
  border-radius: 4px;
  width: 68px;
  height: 40px;
  font-weight: 600;
}

.Name {
  margin-top: -51px;
  margin-left: 53px;
  color: #0b1354;
  font-size: 16px;
  line-height: 19.4px;
  font-weight: 600;
  /* font-family: Montserrat; */
}

.Namee {
  margin-top: -51px;
  margin-left: 53px;
  color: #0b1354;
  font-size: 16px;
  line-height: 19.4px;
  font-weight: 600;
  /* font-family: Montserrat; */
}
.font-black {
  font-weight: 600;
  color: black;
}

.Nameone {
  margin-top: -51px;
  margin-left: 53px;
  color: #0b1354;
  font-size: 16px;
  line-height: 19.4px;
  font-weight: 600;
  /* font-family: Montserrat; */
}

.id {
  font-size: 12px;
  color: #9da7b5;
  line-height: 14.4px;
  margin-left: 53px;
  /* font-family: Montserrat; */
}

.Id {
  font-size: 12px;
  color: #9da7b5;
  line-height: 14.4px;
  margin-left: 53px;
  /* font-family: Montserrat; */
}

.Idone {
  font-size: 12px;
  color: #9da7b5;
  line-height: 14.4px;
  margin-left: 53px;
  /* font-family: Montserrat; */
}

.timeprops {
  font-size: 16px;
  color: #0b1354;
  line-height: 19.4px;
  margin-left: 10px;
  font-weight: 600;
  /* font-family: Montserrat; */
}

.timepropss {
  font-size: 16px;
  color: #0b1354;
  line-height: 19.4px;
  margin-left: 10px;
  font-weight: 600;
  /* font-family: Montserrat; */
}
.borderradius {
  border-radius: 4px;
}

.timeprop {
  font-size: 16px;
  color: #0b1354;
  line-height: 19.4px;
  margin-left: 10px;
  font-weight: 600;
  /* font-family: Montserrat; */
}

.change-option {
  margin-left: 60px;
  margin-top: -180px;
}

.cancel-btn {
  background-color: #ffffff;
  color: #555555;
  padding: 8px 18px;
  font-size: 14px;
  border: 1px solid #555555;
  border-radius: 4px;
}

.pause-btn {
  background-color: #f6c000;
  border: 1px solid #ffffff;
}

.end-btn {
  background-color: #ff7070;
  border: 1px solid #ffffff;
}

.button {
  margin-top: -44px;
  margin-left: 175px;
}

.fltime {
  color: #0b1354;
  /* font-family: Montserrat; */
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
}
.margnleft-12 {
  margin-left: 12px;
}
</style>
