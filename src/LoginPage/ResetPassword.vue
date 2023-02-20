<template>
  <div>
    <div class="flex justify-content-center">
      <div class="user-details">
        <div class="flex justify-content-left mt-4 margin-left">
          <span class="pi pi-chevron-left"></span>
        </div>
        <div class="flex justify-content-center mt-8">
          <div class="header fontFamily-Regular">Reset Password</div>
        </div>
        <div class="flex justify-content-center mt-4">
          <div class="sub-header fontFamily-Regular">Administration Panel</div>
        </div>
        <div class="flex justify-content-center mt-4">
          <div class="col col-9">
            <div class="col flex">
              <div class="col ml-2 fontFamily-Regular">New Password</div>
            </div>
              <div class="col flex">
                <!-- <input type="text" class="tag fontFamily-systemui ml-2" placeholder="Mail@website.com"/>  -->
                <InputText type="email" class=" tag fontFamily-systemui  ml-2"  placeholder="Mail@website.com" />
            </div>
             <div class="col flex mt-4">
              <div class="col ml-2 fontFamily-Regular">Confirm Password</div>
             </div>
             <div class="col flex">
                <!-- <input type="text" class="tag fontFamily-systemui ml-2" placeholder="Min.8 Characters"/> -->
                <InputText  type="password" class=" tag fontFamily-systemui  ml-2"  placeholder="Min.8 Characters" />
             </div>
            </div>
        </div>
        <div class="flex justify-content-center mt-7" >
          <Button label="Reset Password" class="login-btn marginright" @click="setOptionActive()"/>
        </div>
        <div class="flex justify-content-center  copyright">
          <i class="pi"></i>
          <span class="mt-4 icon marginright">©2020 workspace OS All Rights Reserved</span>
        </div>
      </div>
      <div class="img">
      <img class="imageHeight" src="@/assets/login.png" />
      </div>
    </div>
  </div>
</template>

<script>
import 'primeicons/primeicons.css';
import Button from "primevue/button";
import InputText from 'primevue/inputtext';

export default {
  setup() {},
  name: "ResetAccountComponent",
  components: {
    Button,
    InputText
  },
  data () {
    return {
      cities: [],
    }
  },
  methods: {
    setOptionActive (){
        this.$router.push ('/landing')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";

.user-details {
  width: 43.78rem;
  // height: 57.813rem;
  background: #ffffff;
  border: 2px solid #f5f4f4;
  // border-radius: 10px;
  font-family: OpenSans-Light !important;
  color: #0b1354;
  font-weight: 600;
}
.marginright{
  margin-right: 72px;
}

.header {
  color: #536172;
  font-size: 28px;
  // font-family: Lato;
  font-weight: 900;
}

.sub-header {
  color: #9BA2B2;
  font-size: 16px;
  // font-family: Lato;
  font-weight: 500;
}
.margin-left{
  margin-left: 25px;
}

.tag {
  border: 2px solid #E3E3E3;
  width: 21.188rem;
  height: 3rem;
  border-radius: 50px;
  margin-left: -7.5rem;
  opacity: 0.7;
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

.login-btn {
  width: 21.188rem;
  height: 3rem;
  background-color: #F765A3;
  border: 1px solid #F765A3;
  border-radius: 50px;
  font-family: inherit;
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

.img {
  width: 852px;
}
.imageHeight{
  height: 100vh;
  width: 100%;
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
  margin-right: 125px;
}

</style>
