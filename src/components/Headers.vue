<template>
  <div class="header-layout flex align-items-center justify-content-between">
    <!-- <div @click="openSideNav()" class="toggleButton">
      <img class=" toggle" src="@/assets/icons/toggle.png" />
    </div> -->
    <div class="flex">
      <div @click="openSideNav()" class="toggleButton">
        <!-- {{visibleLeft}} -->
        <img class="toggle" src="@/assets/icons/toggle.png" />
      </div>
      <img class="logo" src="@/assets/logo.svg" />
    </div>
    <div
      class="col col-8 flex justify-content-around align-items-center cursor-pointer fontFamily-Regular"
    >
      <div v-for="item in items" :key="item">
        <div
          :class="item.isActive ? 'header-option-active' : ''"
          @click="setOptionActive(item, item.title)"
        >
          {{ item.title }}
          <span v-if="item.dropdown"></span>
        </div>
      </div>
    </div>
    <div v-if="this.$route.path != path " class="flex align-items-center" @click="clickSettings()">
      <span Class="dropdown ml-2 marginTop">
        <div class="images">
          <img src="@/assets/Gearicon.svg" />
          <img src="@/assets/dropdown.png" class="image-down drop ml-2 mb-1" />
        </div>
        <div :class="showDropdown ? 'newDropdown' : 'hideDropdown'">
          <div v-for="(values, index) in dropdownValues" :key="index">
            <div
              :class="
                values.disabled ? 'active-supervisor' : 'inactive-supervisor'
              "
              @click="setOption(values, index)"
            >
              {{ values.value }}
            </div>
          </div>
        </div>
      </span>
    </div>
    <div class="col col-2 flex align-items-center">
      <img class="ml-5" src="@/assets/signin.svg" />
      <span class="ml-2 sign-in">ASSQO1</span>
      <img class="ml-3" src="@/assets/vertical-dot.png" />
    </div>
  </div>
</template>

<script>
import "primeicons/primeicons.css";

export default {
  props: ["visibleLeft"],
  setup() {},
  name: "HeaderComponentWork",
  components: {},
  data() {
    return {
      path:"/supervisor/onboardingWork/supervisorBoardComponent/supervisorOnboardComponent/supervisorDepartmentComponent",
      dropdownValues: [
        { value: "Supervisor Mapping", disabled: false },
        { value: "Work Center Mapping", disabled: false },
      ],
      showDropdown: false,
      items: [
        {
          title: "Dashboard",
          isActive: false,
          path: "dashboardWork",
        },
        {
          title: "Onboarding",
          isActive: true,
          path: "onboardingWork",
        },
        {
          title: "Department",
          isActive: false,
          path: "departmentDashboard",
        },
        {
          title: "Orders",
          isActive: false,
          path: "orderWork",
        },
        {
          title: "Consumable Request ",
          isActive: false,
          path: "consumableRequestWork",
        },
        {
          title: "Maintenance Request",
          isActive: false,
          path: "maintenanceRequestWork",
        },
        // {
        //   dropdown: ["content"],
        //   title: " ",
        //   isActive: false,
        //   path: "",
        // },
      ],
    };
  },
  methods: {
    setOptionActive(item, title) {
      this.$router.push("/supervisor/" + item.path);
      this.items.map((obj) => {
        obj.isActive = false;
      });
      item.isActive = true;
      if (title === "orders") {
        this.showDropdown = !this.showDropdown;
      }
    },
    clickSettings() {
      this.showDropdown = !this.showDropdown;
    },
    setOption(data) {
      if (data.value === "Work Center Mapping") {
        console.log(true);
        this.$router.push(
          "/supervisor/onboardingWork/supervisorBoardComponent/supervisorOnboardComponent/supervisorDepartmentComponent"
        );
        data.disabled = true;
        this.dropdownValues[0].disabled = false;
      }
      if (data.value === "Supervisor Mapping") {
        // this.$router.push(
        //   "/supervisor/onboardingWork/supervisorBoardComponent"
        // );
        data.disabled = true;
        this.dropdownValues[1].disabled = false;
      }
      // this.$router.push("/workCenter/orders/CompletionComponent");
      // this.$router.push("/supervisor/onboardingWork/supervisorBoardComponent");
    },
    openSideNav() {
      this.$emit("updateSideNav", !this.visibleLeft);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";
.header-layout {
  height: 106px;
  border-bottom: 1px solid #f2f1f6;
  color: #171721;
  font-weight: 600;
  // font-size: 18px;
  .sign-in {
    font-size: $small-medium;
    font-weight: 700;
    color: $color-text;
  }
}
.header-option-active {
  color: #eb7100;
}
.marginTop {
  margin-top: 7px;
}

.newDropdown {
  display: block;
  position: absolute;
  width: 194px;
  background-color: white;
  box-shadow: 3px 0px 5px 0px;
  padding: 18px;
  top: 84%;
  border-radius: 7px;
  right: 12%;
}
.hideDropdown {
  display: none;
}

.active-supervisor {
  color: #eb7100;
  font-size: 13px;
  font-family: "OpenSans-Regular";
  line-height: 15px;
  margin-top: 11px;
  cursor: pointer;
}
.inactive-supervisor {
  color: #000;
  font-size: 13px;
  font-family: "OpenSans-Regular";
  line-height: 15px;
  margin-top: 11px;
  cursor: pointer;
}
.images {
  display: flex;
  position: relative;
}
.drop {
  width: 8px;
  height: 7px;
  position: absolute;
  top: 38%;
  left: 90%;
}
</style>
