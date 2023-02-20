<template>
  <div class="header-layout flex align-items-center justify-content-between">
    <div><img src="@/assets/logo.svg" /></div>
    <div class="flex align-items-center">
      <img src="@/assets/signin.svg" />
      <span class="ml-2 sign-in">Sign-In</span>
      <img class="ml-3" src="@/assets/vertical-dot.png" />
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  name: "HeaderComponent",
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";
.header-layout {
  height: 106px;
  border-bottom: 1px solid #f2f1f6;
  .sign-in {
    font-size: $small-medium;
    font-weight: 700;
    color: $color-text;
  }
}
</style>
