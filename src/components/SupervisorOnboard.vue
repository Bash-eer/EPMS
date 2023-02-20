<template>
  <div>
            <div class="header-content mt-8 ml-5">Department<span class="ml-2">:</span><span class="ml-2">DHNKL3456</span><span class="sub-header ml-2">(Assembly Shop)</span><span class="deleted-badge pl-2 pr-2 pt-1 ml-2">4</span></div>
    <div class="btn">
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
                  <div class="Name">{{ name }}</div>
                  <div class="id">{{ id }}</div>
                  <div class="timeone">
                    <i class="pi pi-clock" style="font-size: 1 rem"></i>Intime
                    <div class="timeprops">{{ time }}</div>
                    <div class="Ttimeone">
                      Total time <br /><i class="mt-2 ml-2 fltime">
                        {{ floortime }}
                      </i>
                    </div>
                    <div class="wctimeone">
                      Total time <br /><i class="mt-2 ml-2 fltime">
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
                <div class="Namee">{{ name }}</div>
                <div class="Id">{{ id }}</div>
                <div class="timecalc">
                  <i class="pi pi-clock" style="font-size: 1 rem"></i>Intime
                  <div class="timeprop">{{ time }}</div>
                  <div class="Ttimeonee">
                    Total time <br /><i class="mt-2 ml-2 fltime">
                      {{ floortime }}
                    </i>
                  </div>
                  <div class="wctimeonee">
                    Total time <br /><i class="mt-2 ml-2 fltime">
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
                  <div class="Name">{{ name }}</div>
                  <div class="id">{{ id }}</div>
                  <div class="timeone">
                    <i class="pi pi-clock" style="font-size: 1 rem"></i>Intime
                    <div class="timeprops">{{ time }}</div>
                    <div class="Ttimeone">
                      Total time <br /><i class="mt-2 ml-2 fltime">
                        {{ floortime }}
                      </i>
                    </div>
                    <div class="wctimeone">
                      Total time <br /><i class="mt-2 ml-2 fltime">
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
                  <div class="Nameone">{{ name }}</div>
                  <div class="Idone">{{ id }}</div>
                  <div class="timecalcc">
                    <i class="pi pi-clock" style="font-size: 1 rem"></i>Intime
                    <div class="timepropss">{{ time }}</div>
                    <div class="Ttimeones">
                      Total time <br /><i class="mt-2 ml-2 fltime">
                        {{ floortime }}
                      </i>
                    </div>
                    <div class="wctimeones">
                      Total time <br /><i class="mt-2 ml-2 fltime">
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
          <ButtonComponent label="Save" type="primary" @click="setOptionActive()"/>
        </div>
        <div class="change-option option-line">+ Add Employee</div>
        <div class="col flex">
          <div class="extrafield">
            Pause / End <br />
            <input type="number" class="type-one" />
            <div class="button flex">
              <ButtonComponent
                label="Pause"
                type="yellow"
                class="pause-btn mr-2"
              />
              <ButtonComponent label="End" type="pink" class="end-btn" />
              <!-- <button class="chosenthree cursor-pointer">Start</button> -->
            </div>
          </div>
        </div>
        <div class="col flex">
          <div class="extrafield-two">
            Pause / End <br />
            <input type="number" class="type-one" />
            <div class="button flex">
              <ButtonComponent
                label="Pause"
                type="yellow"
                class="pause-btn mr-2"
              />
              <ButtonComponent label="End" type="pink" class="end-btn" />
              <!-- <button class="chosenthree cursor-pointer">Start</button> -->
            </div>
          </div>
        </div>
        <div class="col flex">
          <div class="extrafield-three">
            Pause / End <br />
            <input type="number" class="type-one" />
            <div class="button flex">
              <ButtonComponent
                label="Pause"
                type="yellow"
                class="pause-btn mr-2"
              />
              <ButtonComponent label="End" type="pink" class="end-btn" />
              <!-- <button class="chosenthree cursor-pointer">Start</button> -->
            </div>
          </div>
        </div>
        <div class="col flex">
          <div class="extrafield-four">
            Ended <br />
            <input type="number" class="type" />
            <div class="flex">
              <button class="chosenthree cursor-pointer">Start</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "primeicons/primeicons.css";
// import Avatar from "../components/Avatar.vue";
import Button from "primevue/button";

export default {
  setup() {},
  name: "supervisorOnboardComponent",
  components: {
    // Avatar,
    Button,
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
  methods: {
    setOptionActive() {
      this.$router.push("/supervisor/onboardingWork/supervisorBoardComponent/supervisorOnboardComponent/supervisorDepartmentComponent");
    },
  },
};
</script>

<style scoped>
.thirdboard {
  width: 1047px;
  height: 1000px;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: 35px;
}

.btn {
  margin-top: -2rem;
  margin-left: 54rem;
}

.detailstwo {
  width: 413px;
  height: 153px;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: 37px;
  margin-top: -80px;
}

.nameone {
  margin-left: 20px;
  margin-top: 6px;
  color: #9da7b5;
  font-size: 12px;
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
}

.thirdbox {
  width: 367px;
  height: 153px;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: -371px;
  margin-top: 321px;
}

.fourthbox {
  width: 367px;
  height: 153px;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: -675px;
  margin-top: 512px;
}

.fifthbox {
  width: 367px;
  height: 153px;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: -781px;
  margin-top: 705px;
}

.timeone {
  margin-left: 265px;
  margin-top: -35px;
  color: #9da7b5;
  font-family: Montserrat;
  font-size: 12px;
}

.timecalc {
  margin-left: 265px;
  margin-top: -35px;
  color: #9da7b5;
  font-family: Montserrat;
  font-size: 12px;
}

.timecalcc {
  margin-left: 265px;
  margin-top: -35px;
  color: #9da7b5;
  font-family: Montserrat;
  font-size: 12px;
}

.Ttimeone {
  font-size: 12px;
  color: #9da7b5;
  margin-top: 32px;
  margin-left: -263px;
  width: 134px;
  height: 49px;
  font-family: Montserrat;
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
  font-family: Montserrat;
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
  font-family: Montserrat;
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
  font-family: Montserrat;
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
  font-family: Montserrat;
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
  font-family: Montserrat;
  background: #d9d9d9;
  border: 2px solid #f5f4f4;
  border-radius: 6px;
}

.extrafield {
  margin-left: 490px;
  margin-top: -752px;
  font-size: 14px;
  color: #7a7a7a;
  font-family: Montserrat;
  line-height: 30px;
}

.extrafield-two {
  margin-left: 490px;
  margin-top: -582px;
  font-size: 14px;
  color: #7a7a7a;
  font-family: Montserrat;
  line-height: 30px;
}

.extrafield-three {
  margin-left: 490px;
  margin-top: -407px;
  font-size: 14px;
  color: #7a7a7a;
  font-family: Montserrat;
  line-height: 30px;
}

.extrafield-four {
  margin-left: 490px;
  margin-top: -240px;
  font-size: 14px;
  color: #7a7a7a;
  font-family: Montserrat;
  line-height: 30px;
}

.type {
  width: 246px;
  height: 48px;
  border: 2px solid #e6e6e6;
  border-radius: 2px;
  font-family: Montserrat;
}
.type-one {
  width: 328px;
  height: 48px;
  border: 2px solid #e6e6e6;
  border-radius: 2px;
  font-family: Montserrat;
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
}

.Name {
  margin-top: -51px;
  margin-left: 50px;
  color: #0b1354;
  font-size: 16px;
  line-height: 19.4px;
  font-family: Montserrat;
}

.Namee {
  margin-top: -51px;
  margin-left: 50px;
  color: #0b1354;
  font-size: 16px;
  line-height: 19.4px;
  font-family: Montserrat;
}

.Nameone {
  margin-top: -51px;
  margin-left: 50px;
  color: #0b1354;
  font-size: 16px;
  line-height: 19.4px;
  font-family: Montserrat;
}

.id {
  font-size: 12px;
  color: #9da7b5;
  line-height: 14.4px;
  margin-left: 51px;
  font-family: Montserrat;
}

.Id {
  font-size: 12px;
  color: #9da7b5;
  line-height: 14.4px;
  margin-left: 51px;
  font-family: Montserrat;
}

.Idone {
  font-size: 12px;
  color: #9da7b5;
  line-height: 14.4px;
  margin-left: 51px;
  font-family: Montserrat;
}

.timeprops {
  font-size: 16px;
  color: #0b1354;
  line-height: 19.4px;
  margin-left: 10px;
  font-family: Montserrat;
}

.timepropss {
  font-size: 16px;
  color: #0b1354;
  line-height: 19.4px;
  margin-left: 10px;
  font-family: Montserrat;
}

.timeprop {
  font-size: 16px;
  color: #0b1354;
  line-height: 19.4px;
  margin-left: 10px;
  font-family: Montserrat;
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

.option-line {
  font-family: Montserrat;
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
}

.header-content {
  font-size: 16px;
  font-family: Montserrat;
  color: #0B1354;
  font-weight: 600;
}

.sub-header {
  font-size: 13px;
  font-family: Montserrat;
  color: #536172;
  font-weight: 600;
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
</style>
