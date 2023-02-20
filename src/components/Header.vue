<template>
  <div class="header-layout flex align-items-center justify-content-between">
    <!-- <div @click="openSideNav()" class="toggleButton">
      <img class=" toggle" src="@/assets/icons/toggle.png" />
    </div> -->
    <div class="flex">
      <div @click="openSideNav()" class="toggleButton">
        <img class="toggle" src="@/assets/icons/toggle.png" />
      </div>
      <img
        class="logo cursor-pointer"
        src="@/assets/logo.svg"
        @click="navigate"
      />
    </div>
    <div
      class="
        col col-8
        flex
        justify-content-around
        align-items-center
        cursor-pointer
        fontFamily-Regular
      "
    >
      <div v-for="item in items" :key="item">
        <div
          :class="item.isActive ? 'header-option-active' : ''"
          @click="setOptionActive(item, item.title)"
        >
          {{ item.title }}
          <span v-if="item.dropdown"
            ><img
              src="@/assets/dropdown.png"
              @click="dropDownShow()"
              class="image-down ml-2 mb-1"
          /></span>
        </div>
        <div
          v-if="item.dropdown"
          :class="showDropdown ? 'newDropdown' : 'hideDropdown'"
        >
          <div class="active-supervisor" @click="setOption()">
            Completed Orders
          </div>
          <div class="color-black mt-2" @click="showDropdown = false">
            Open Orders
          </div>
        </div>
      </div>
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
  setup() {},
  prop: ["visibleLeft"],
  name: "HeaderComponent",
  components: {},
  data() {
    return {
      showDropdown: false,
      items: [
        {
          title: "Dashboard",
          isActive: false,
          path: "dashboard",
        },
        {
          title: "Onboarding",
          isActive: true,
          path: "onboarding",
        },
        {
          dropdown: ["content"],
          title: "Orders",
          isActive: false,
          path: "orders",
        },
        {
          title: "Consumable Request ",
          isActive: false,
          path: "consumableRequest",
        },
        {
          title: "Maintenance Request",
          isActive: false,
          path: "maintenanceRequest",
        },
      ],
    };
  },
  methods: {
    setOptionActive(item, title) {
      this.$router.push("/workCenter/" + item.path);
      this.items.map((obj) => {
        obj.isActive = false;
      });
      item.isActive = true;
      if (title === "Orders") {
        // this.showDropdown = !this.showDropdown;
      }
    },
    dropDownShow() {
      this.showDropdown = !this.showDropdown;
    },
    setOption() {
      this.showDropdown = false;
      this.$router.push("/workCenter/orders/CompletionComponent");
    },
    navigate() {
      this.$router.push("/landing");
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
.header-option-active {
  color: #eb7100;
}

.newDropdown {
  display: block;
  position: absolute;
  width: 194px;
  background-color: white;
  box-shadow: 3px 0px 5px 0px;
  padding: 18px;
  top: 77px;
  border-radius: 7px;
}
.hideDropdown {
  display: none;
}

.color-black {
  color: #000;
  font-size: 13px;
  font-family: "OpenSans-Regular";
  line-height: 15px;
  margin-top: 11px;
  cursor: pointer;
}
</style>
