<template>
  <div>
    <div class="flex justify-content-center">
      <div class="user-details">
        <div class="flex justify-content-center mt-2">
          <div class="header fontFamily-Regular">Logins</div>
        </div>
        <div class="flex justify-content-center mt-3">
          <div class="sub-header fontFamily-Regular">Administration Panel</div>
        </div>
        <div class="flex signin-google justify-content-center ml-8 mt-4">
           <img src="@/assets/google.svg" />
           <span class="margin-top fontFamily-Regular">Sign in with Google</span>
        </div>
        <div class="flex justify-content-center mt-4">
          <Divider align="center">
            <span class="divider">OR</span>
          </Divider>
        </div>
        <div class="flex justify-content-center">
          <div class="col col-9">
            <div class="col flex">
              <div class="col ml-2 fontFamily-Regular">E-mail Id</div>
            </div>
            <div class="col flex">          
              <InputText type="email" class=" tag fontFamily-systemui  ml-2"  placeholder="Mail@website.com" />
                </div>
            <div class="col flex">
              <div class="col ml-2 fontFamily-Regula">Password</div>
            </div>
            <div class="col flex">
              <InputText  type="password" class=" tag fontFamily-systemui  ml-2"  placeholder="Min.8 Characters" />
            </div>
            <div class="col flex">
              <div class="col ml-2">
                <Checkbox inputId="city1" name="city" value="Chicago" v-model="cities" class="check" />
            <label for="city1" class="fontFamily-Regular marginLeft-9">Remember Me</label>
              </div>
              <div class="col forgot-pass fontFamily-Regular ml-6">Forgot Password?</div>
            </div>
          </div>
        </div>
        <div class="flex justify-content-center marginright" >
          <Button label="Login" class="login-btn login" @click="setOptionActive()"/>
        </div>
        <div class="flex justify-content-left mt-3 ml-8" >
          <span class="registration ml-3 mt-2 fontFamily-Regular">Not registered yet?<span class="acct-create"> Create an Account</span></span>
        </div>
        <div class="flex justify-content-center mt-3 ml-10 copyright">
          <i class="pi"></i>
          <span class="icon fontFamily-Regular">©2020 workspace OS All Rights Reserved</span>
        </div>
      </div>
      <div class="image">
      <img  class="imageHeight" src="@/assets/login.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Divider from "primevue/divider";
import Checkbox from "primevue/checkbox";
import 'primeicons/primeicons.css';
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
// import TextField from "../../components/TextField.vue";

export default {
  setup() {},
  name: "loginAccountComponent",
  components: {
    Divider,
    // TextField,
    Checkbox,
    InputText,
    Button
  },
  data () {
    return {
      cities: [],
    }
  },
  methods: {
    setOptionActive() {
      this.$router.push("/login/loginAccountComponent/loginForgotComponent");
    },
  }
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
  border: 2px solid #f5f4f4;
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
.marginright{
  margin-right: 15px;
}
.imageHeight{
  height: 100vh;
  width: 100%;
}
.image{
  width: 852px;
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
}

.tag {
  border: 2px solid #E3E3E3;
  width: 21.188rem;
  height: 3rem;
  border-radius: 50px;
  margin-left: -5.125rem;
  opacity: 0.7;
}

.col {
  color: #536172;
  font-size: 13px;
  // font-family: Lato;
  font-weight: 600;
}

.forgot-pass {
  color: #459A9F;
  font-size: 13px;
  // font-family: Lato;
  font-weight: 600;
}

::v-deep .p-checkbox .p-checkbox-box.p-highlight.check {
    border-color: #459A9F;
    background: #459A9F;
    box-shadow: #459A9F;
}
::v-deep .p-checkbox .p-checkbox-box.p-highlight.p-focus  {
    border-color: #459A9F;
    background: #459A9F;
    box-shadow: #459A9F;
}

// ::v-deep.p-checkbox:not(.p-checkbox-disabled).p-checkbox-box.p-highlight:hover {
//   border-color: #F765A3;
//   background: #F765A3;
//   color: #ffffff;
// }

// ::v-deep.p-checkbox:not(.p-checkbox-disabled).p-checkbox-box.p-focus {
//   box-shadow: #F765A3;
// }

.login-btn {
  width: 21.188rem;
  height: 3rem;
  background-color: #F765A3;
  border: 1px solid #F765A3;
  border-radius: 50px;
  font-weight: 600;
  letter-spacing: .9px;
}

.icon {
  color: #9BA2B2;
  font-size: 11px;
  // font-family: Lato;
  font-weight: 600;
  margin-left: -8.563rem;
}
.margin-top{
  margin-top: 10px;
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

.input {
  left: 20px;
  position: relative;
  // font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3%;
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
  margin-right: 150px;
}
</style>
