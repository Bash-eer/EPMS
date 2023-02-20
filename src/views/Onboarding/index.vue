<template>
  <div>
    <div class="btn">
      <ButtonComponent label="+ Employee Onboarding" type="primary" />
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
        <div class="flex justify-content-left mt-4">
          <div class="col col-5 mt-4">
            <div class="col flex">
              <div class="col">
                Employee ID
                <input type="text" class="field" v-model="id" />
              </div>
              <div class="col">
                Employee Name
                <input type="text" class="field-tag" v-model="name" />
              </div>
              <div class="col">
                Actual Start
                <input type="text" class="field-tag" />
                <div class="flex">
                  <button class="chosen cursor-pointer">Start</button>
                </div>
              </div>
            </div>
            <div class="col flex">
              <div class="col">
                Intime <br />
                <input type="text" class="field" v-model="time" />
              </div>
            </div>
            <div class="change-option mt-2 ml-6" @click="setOption()">
              + Add Employees
            </div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "primeicons/primeicons.css";
// import Avatar from "../../components/Avatar.vue";
import Button from "primevue/button";

export default {
  setup() {},
  name: "OnboardingComponent",
  data() {
    return {
       workerType: this.$route.params.name
    }
  },
  components: {
    // Avatar,
    Button,
  },
  methods: {
    setOptionActive() {
      if(this.$route.path == "/workCenter/onboarding"){
        console.log(true);
      this.$router.push("/workCenter/BoardComponent");
      } else {
        this.$router.push("/supervisor/onboardingWork/supervisorBoardComponent");
      }
    },
    setOption() {
      this.$router.push("/workCenter/OnboardsComponent");
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
        return this.$tsore.state.floortime;
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
    font-weight: 800;
    border-radius: 3px;
}

.field-tag {
  width: 15.375rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-family: sans-serif;
    font-weight: 800;
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
  border-radius: 7px;
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
