<template>
    <!-- <Toast /> -->
  <div class="ParentClass">
    <div class="flex justify-content-center mt-2">
      <div class="header fontFamily-Regular">Login</div>
    </div>

    <div class="flex justify-content-center mt-3">
      <div class="sub-header fontFamily-Regular">Administration Panel</div>
    </div>

    <div class="flex signin-google justify-content-center mt-5">
      <img src="@/assets/google.svg" class="imagePad" />
      <span class="signInClass margin-top fontFamily-Regular"
        >Sign in with Google</span
      >
    </div>

    <div class="flex justify-content-center mt-2">
      <Divider align="center">
        <span class="divider">OR</span>
      </Divider>
    </div>

    <div class="flex justify-content-center">
      <div class="justify-content-center">
        <div class="col InputLabel ml-2 fontFamily-Regular">E-mail Id</div>
        <InputText
          type="text"
          v-model="loginPayload.employee"
          class="tag InputTextValue fontFamily-systemui ml-2"
          placeholder="Mail@website.com"  
        />
        <div class="col ml-2 InputLabel fontFamily-Regular mt-2">Password</div>
        <InputText
          type="password"
          v-model="loginPayload.password"
          class="tag InputTextValue fontFamily-systemui ml-2"
          placeholder="Min.8 Characters"
        />
        <div class="col flex">
          <div class="col ml-2">
            <!-- <Checkbox
              inputId="city1"
              name="city"
              value="Chicago"
              v-model="cities"
            /> -->
            <Checkbox inputId="binary" v-model="checked" :binary="true" />
            <label for="city1" class="fontFamily-Regular ml-2 InputLabel"
              >Remember Me</label
            >
          </div>
          <div
            class="col forgot-pass fontFamily-Regular ml-6"
            @click="setOptionActive()"
          >
            Forgot Password?
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-content-center mt-3">
      <ButtonComponent
        label="Login"
        class="login-btn login"
        type="button"
        @click="newlogin()"
      />
    </div>

    <div class="flex justify-content-left mt-3 ml-8">
      <span class="registration ml-3 mt-2 fontFamily-Regular"
        >Not registered yet?
        <span class="acct-create color-459A9F"> Create an Account</span></span
      >
    </div>

    <div class="flex justify-content-center mt-3 copyright">
      <i class="pi"></i>
      <span class="icon fontFamily-Regular marginright"
        >©2020 workspace OS All Rights Reserved</span
      >
    </div>
  </div>
</template>

<script>
import Checkbox from "primevue/checkbox";
import { mapActions } from "vuex";
// import Password from "primevue/password";
import Divider from "primevue/divider";
import InputText from 'primevue/inputtext';
// import Toast from 'primevue/toast';
export default {
  name: "RightContent",
  data: () => ({
    geoLocationApikey: "ff26231c91f84d77be77d2d2dad5a7b1",
    mismatchError: "",
    checked: false,
    loginPayload : {
       employee :"",
       password : ""
    },
    submitted: false,
  }),

  methods: {
    ...mapActions([
        "login"
    ]),
    handlechange(event,payload) {
      console.log(event);
      if(payload === 'email') {
        this.payload.email = event
        console.log(this.payload.email);
      }
    },
    setOptionActive() {
      this.$router.push("/forgot-password");
    },
   newlogin: async function() {
     await this.login(this.loginPayload).then(()=>{
      // this.$toast.add({severity:'success', summary: 'Login Successfully', detail:'Order submitted', life: 3000});
      this.$router.push("/landing")
     })
   }
  },
  components: {
    Checkbox,
    Divider,
    InputText,
    // Toast
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";

.ParentClass {
  margin-top: 9%;
  width: 100%;
}

.registration {
  color: #536172;
  margin-left: 10% !important;
  font-size: 13px !important;
  font-weight: 700;
}

.header {
  font-size: 28px;
  font-weight: 800;
  color: #536172;
}

.sub-header {
  font-size: 16px;
  color: #9ba2b2;
  font-weight: 500;
}

.InputLabel {
  font-size: 13px;
  font-weight: 600;
  opacity: 0.8;
  // font-family: system-ui !important;
}

.login-btn {
  font-weight: 600;
  letter-spacing: 0.9px;
}

.forgot-pass {
  color: #459a9f;
  font-size: 13px;
  // font-family: Lato;
  cursor: pointer;
  font-weight: 600;
}
.color-459A9F {
  color: #459a9f;
  cursor: pointer;
}

// ::v-deep .p-checkbox .p-checkbox-box.p-highlight {
//     border-color: #F765A3;
//     background: #F765A3;
//     box-shadow: #F765A3;
// }
// ::v-deep .p-checkbox .p-checkbox-box.p-highlight.p-focus  {
//     border-color: #F765A3;
//     background: #F765A3;
//     box-shadow: #F765A3;
// }

.p-button {
  width: 21.188rem;
  height: 3rem;
  background-color: #f765a3;
  border: 1px solid #f765a3;
  border-radius: 50px;
}

.InputTextValue {
  font-size: 14px !important;
  padding-left: 15px;
}

.signInClass {
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #000000;
  text-align: center;
  align-self: center;
}

.signin-google {
  margin-left: 22%;
  margin-right: 15%;
  height: 3rem;
  color: #000000;
  font-size: 12px !important;
  font-weight: 600;
  background-color: #ffffff;
  border-radius: 50px;
  border: 1px solid #e3e3e3;
  width: 22rem;
}

.tag {
  border: 2px solid #e3e3e3;
  height: 3rem;
  width: 22rem !important;
  border-radius: 50px;
  opacity: 0.7;
}

.input {
  left: 20px;
  position: relative;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3%;
}

.marginright {
  margin-right: 7px;
  font-weight: 700;
  opacity: 0.6;
}

form {
  width: 100%;
}
.input-wrap {
  text-align: left;
}

::v-deep .p-inputtext-lg .p-inputtext {
  color: #212121;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
::v-deep .input-text {
  color: #212121;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
.mismatch-error {
  font-size: 14px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
.remember-text {
  color: #212121;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  text-align: left;
}
.forgot-password-text {
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  color: #6db302;
  display: flex;
  justify-content: end;
  cursor: pointer;
}

::v-deep .p-input-icon-right > .p-inputtext {
  width: 100% !important;
}

.pi {
  font-size: 0.8rem;
  color: #9ba2b2;
  margin-right: 61px;
}

.copyright {
  margin-right: 125px;
  font-size: 13px;
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
::v-deep .p-checkbox .p-checkbox-box.p-highlight{
    border-color: #459A9F;
    background: #459A9F;
    box-shadow: #459A9F;
}
::v-deep .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover{
  border-color: #459A9F;
}
::v-deep .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover{
  border-color: #459A9F;
  background: #459A9F;
  color: #ffffff;
}
</style>
