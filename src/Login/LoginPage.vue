<template>
  <div class="container-wrap">
    <div class="grid">
      <div class="col-5 left-content hidden-sm-down">
          <div v-if="$route.meta.routePath == 'login'" class="login">          
          <RightContent  />
        </div>

        <div v-if="$route.meta.routePath == 'forgot'" class="login">          
          <ForgetPasswordContent  />
        </div>

                <div v-if="$route.meta.routePath == 'reset'" class="login">          
          <ResetPasswordContent  />
        </div>
      </div>
      <div class="col-7 right-content" >
         <LeftContent />
      </div>
    </div>
  </div>
</template>

<script>
import RightContent from "./RightContent.vue";
import LeftContent from "./LeftContent.vue";
import ResetPasswordContent from './ResetPasswordContent.vue';
import ForgetPasswordContent from './ForgetPasswordContent.vue'

export default {
  name: 'LoginPage',
  components: { RightContent, LeftContent, ForgetPasswordContent , ResetPasswordContent},
  data() {
    return {
      currentRoute: 'login'
    }
  },
  methods: {
    emitRoutePathFunct(e) {
this.currentRoute = e;
console.log(e , 'runnnnnn')
    }
  },


};
</script>

<style scoped>
.container-wrap {
  width: 100vw !important;
  height: 100vh !important;
}
.grid {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: white;
}
.left-content {
  margin: 0 !important;
  padding: 0 !important;
}
.right-content {
        padding: 0 !important;
  margin: auto !important;
}
.login {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: max-content;
}
.signup-text {
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  color: #212121;
}
.signup {
  color: #357dea;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  cursor: pointer;
}
@media (max-width: 575px) {
  .hidden-xs-down {
    display: none !important;
  }
}
@media (min-width: 576px) {
  .hidden-sm-up {
    display: none !important;
  }
}
@media (max-width: 767px) {
  .hidden-sm-down {
    display: none !important;
  }
}
@media (min-width: 768px) {
  .hidden-md-up {
    display: none !important;
  }
}
@media (max-width: 991px) {
  .hidden-md-down {
    display: none !important;
  }
}
@media (min-width: 992px) {
  .hidden-lg-up {
    display: none !important;
  }
}
@media (max-width: 1199px) {
  .hidden-lg-down {
    display: none !important;
  }
}
@media (min-width: 1200px) {
  .hidden-xl-up {
    display: none !important;
  }
}
.hidden-xl-down {
  display: none !important;
}
</style>
