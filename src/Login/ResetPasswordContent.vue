<template>
  <div class="ParentClass">
        <div class="flex justify-content-center mt-4">
          <div class="header fontFamily-Regular">Reset Password</div>
        </div>

        <div class="flex justify-content-center mt-4">
          <div class="sub-header fontFamily-Regular">Administration Panel</div>
        </div>
        
        <div class="flex justify-content-center mt-4">
          <div class="justify-content-center">
              <div class="col InputLabel ml-2 fontFamily-Regular">New Password</div>
              <input type="password" class="tag InputTextValue fontFamily-systemui  ml-2" placeholder="Min.8 Characters"/> 
          
              <div class="col InputLabel ml-2 fontFamily-Regular mt-4">Confirm Password</div>
              <input type="password" class="tag InputTextValue fontFamily-systemui  ml-2" placeholder="Min.8 Characters"/> 
          
          
          </div>


        </div>

        <div class="flex justify-content-center mt-4" >
          <ButtonComponent label="Reset password" class="login-btn  login" type="button" @click="setOptionActive()"/>
        </div>

  </div>
</template>

<script>
// import Checkbox from "primevue/checkbox";
// import Password from "primevue/password";
// import Divider from "primevue/divider";
export default {
  name: "RightContent",
  data: () => ({
    geoLocationApikey: "ff26231c91f84d77be77d2d2dad5a7b1",
    mismatchError: "",
    checked: false,
    details: {
      password: "",
      // email: "",
      userId: "",
    },
    submitted: false,
  }),

  methods: {
    setOptionActive() {
      this.$router.push("/landing");

    },
  },
  mounted() {

  },
  components: {
    // Checkbox,
    // Divider
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";

.ParentClass {
  margin-top: 12%;
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
  color: #9BA2B2;
  font-weight: 500;
}

.InputLabel {
  font-size: 13px;
    font-weight: 600;
    opacity: .8;
}

.login-btn {
  font-weight: 600;
  letter-spacing: .9px;
}

.forgot-pass {
  color: #A155B9;
  font-size: 13px;
  // font-family: Lato;
  font-weight: 600;
}

::v-deep .p-checkbox .p-checkbox-box.p-highlight {
    border-color: #F765A3;
    background: #F765A3;
    box-shadow: #F765A3;
}
::v-deep .p-checkbox .p-checkbox-box.p-highlight.p-focus  {
    border-color: #F765A3;
    background: #F765A3;
    box-shadow: #F765A3;
}

.p-button {
  width: 21.188rem;
  height: 3rem;
  background-color: #F765A3;
  border: 1px solid #F765A3;
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
  margin-left: 21%;
  margin-right: 15%;
  height: 2rem;
  color: #000000;
  font-size: 12px !important;
  font-weight: 600;
  background-color: #ffffff;
  border-radius: 50px;
  border: 1px solid #E3E3E3;
  width: 20rem;
}

.tag {
  border: 2px solid #E3E3E3;
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


.marginright{
margin-right: 7px;
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
    color: #9BA2B2;
    margin-right: 140px;
}

.copyright {
  margin-right: 125px;
  font-size: 13px;
}
</style>
