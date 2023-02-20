<template>
  <div>
            
    <div  class="flex justify-content-center">

      <LoginPage  />

  </div>
  </div>
</template>

<script>
// import Divider from "primevue/divider";
// import Checkbox from "primevue/checkbox";
import 'primeicons/primeicons.css';
import LoginPage from '../Login/LoginPage.vue'
// import TextField from "../../components/TextField.vue";

export default {
  setup() {},
  name: "LoginComponent",
  components: {
    LoginPage,
    // Divider,
    // TextField,
    // Checkbox,
  },
  data () {
    return {
      showContent: false,
      isRoute: true,
      cities: [],
    }
  },
  methods: {
    setOptionActive() {
      this.$router.push("/login/loginAccountComponent");
    },
  },
  watch: {
    $route() {
      if (this.$route.fullPath == "/") {
        this.isRoute = true;
      } else {
        this.isRoute = false;
      }
    },
    
  },
  created() {
    if (this.$route.fullPath == "/") {
      this.isRoute = true;
    } else {
      this.isRoute = false;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";

@media (min-width:768px) {
  form.user-details {
    margin-top: 9.375rem;
    width: 23.438rem;
  }
}


.user-details {
  width: 36.5rem;
  // height: 57.813rem;
  background: #ffffff;
  // border: 2px solid #f5f4f4;
  // border-radius: 10px;
  font-family: OpenSans-Light !important;
  color: #0b1354;
  font-weight: 600;
}

.header {
  color: #536172;
  font-size: 28px;
  font-weight: 900;
}

.sub-header {
  color: #9BA2B2;
  font-size: 16px;
  // font-family: Lato;
  font-weight: 500;
}

.signin-google {
  width: 21.188rem;
  height: 3rem;
  color: #000000;
  font-size: 16px;
  // font-family: Lato;
  font-weight: 600;
  background-color: #ffffff;
  border-radius: 50px;
  border: 1px solid #E3E3E3;
  margin-left: 5.5rem;
}

.tag {
  border: 2px solid #E3E3E3;
  width: 21.188rem;
  height: 3rem;
  border-radius: 50px;
  opacity: 0.7;
}
.imageHeight{
  height: 100vh;
  width: 100%;
}

.col {
  color: #536172;
  font-size: 13px;
  // font-family: Lato;
  font-weight: 600;
}

.forgot-pass {
  color: #A155B9;
  font-size: 13px;
  // font-family: Lato;
  font-weight: 600;
}

.p-button {
  width: 21.188rem;
  height: 3rem;
  background-color: #F765A3;
  border: 1px solid #F765A3;
}

.icon {
  color: #9BA2B2;
  font-size: 11px;
  // font-family: Lato;
  font-weight: 600;
  margin-left: -8.563rem;
}

.registration {
  color: #536172;
  font-size: 13px;
  // font-family: Lato;
  font-weight: 700;
}

.acct-create {
  color: #459A9F;
  font-size: 13px;
  // font-family: Lato;
  font-weight: 700;
}

.img {
  width: 852px;
}

.input {
  left: 20px;
  position: relative;
  // font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3%;
}
.margin-top{
  margin-top: 10px;
}
.marginright{
margin-right: 7px;
}
.login-btn {
  font-weight: 600;
  letter-spacing: .9px;
}

::-webkit-input-placeholder {
  left: 20px;
  position: relative;
  // font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3%;
}

:-moz-placeholder {
  left: 20px;
  position: relative;
  // font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3%;
}

.pi {
    font-size: 0.8rem;
    color: #9BA2B2;
    margin-right: 140px;
}

.copyright {
  margin-right: 125px;
}
</style>
