<template>
  <div>
    <HeaderComponent />
      <LandingPage />
  </div>
</template>

<script>
import HeaderComponent from "./Header.vue";
import LandingPage from "./LandingPage.vue";

export default {
  setup() {},
  components: {
    HeaderComponent,
    LandingPage,
  },
  name: "LandingIndex",
};
</script>