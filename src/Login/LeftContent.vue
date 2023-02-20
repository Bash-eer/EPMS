<template>
 <div class="login-leftcontent"></div>
</template>

<script>
export default {
 data(){
    return{}
    }
}
</script>

<style lang="scss">

.login-leftcontent{
    background-image: url('@/assets/login.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    margin: 0 !important;
    padding: 0 !important;
    position: relative !important;
    overflow: hidden !important;
}

 .position-bottom {
    position: absolute;
    bottom: 10px !important;
    color: white !important;
    // background: red;
}
.leftcontent-content-wrap {
    text-align: left !important;
}

</style>