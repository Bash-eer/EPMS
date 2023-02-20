<template>
  <div>
    <HeaderComponentWork class="header-outer" :visibleLeft="visibleLeft"  @updateSideNav="updateSideNav"  />
      <Sidebar v-model:visible="visibleLeft">
        <LeftBar />
      </Sidebar>
    <div class="flex justify-content-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Toolbar from "primevue/toolbar";
import Sidebar from "primevue/sidebar";
import HeaderComponentWork from "../components/Header.vue";
// import SideBar from "../components/Sidebars.vue";
import LeftBar from "../components/Leftbar.vue";
export default {
  setup() {},
  data() {
    return {
      visibleLeft: false,
    };
  },
  components: {
    HeaderComponentWork,
    LeftBar,
    Sidebar,
    // Toolbar
  },
  methods: {
    // openSideNav: function () {
    //   this.visibleLeft = !this.visibleLeft;
    // },
    updateSideNav(value){
       console.log("value",value);
       this.visibleLeft = value
    }
  },
  name: "indexComponent",
};
</script>

<style lang="scss" scoped>
.header-outer {
  top: 0px;
  flex: 0 0 auto;
  display: block;
  z-index: 100;
  position: sticky;
  background: #fff;
}
.toggle {
  width: 27px;
  // position: fixed;
  //   left: 2%;
  //   top: 19%;
}

</style>
