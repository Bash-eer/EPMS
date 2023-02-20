<template>
  <div id="app">
    <LoginComponent v-if="!isRoute" />
    <router-view v-else></router-view>
  </div>
</template>

<script>
import LoginComponent from './LoginPage/index.vue'
export default {
  components: {
    LoginComponent,
  },
  data() {
    return {
      isRoute: false,
    };
  },
  watch: {
    $route() {
      if(this.$route.meta.routePath == 'login' ||
      this.$route.meta.routePath == 'forgot' ||
      this.$route.meta.routePath == 'reset'){
         this.isRoute = false;
      } else {
        this.isRoute = true
      }
    },
    
  },
  name: "App",
};
</script>

<style lang="scss">
</style>
