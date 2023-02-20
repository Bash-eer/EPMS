<template>
  <div>
    <div>
    <div style="width: 55%; float:left">
      Regular Use Material 
      <div class="  gridRegular mt-2" v-for="(datas,index) in this.regularData" :key="index">
            
            <input type="text" class="input-field" v-model="datas.material_number" />
            <span class="ml-4"><input type="text" class="input-field" v-model="datas.material_description"/></span>
    </div>
</div></div>

<div style="width: 80%; float:right ; position: relative;
    left: 161px;">
  
</div>
  <div>
    
  
   
    
         
       
  </div>
  </div>
</template>
<script>
import {mapState, mapActions } from "vuex";

import Button from "primevue/button";
import "primeicons/primeicons.css";
  export default {
    props: ["setOptionActive"],
    components: {
     Button,
     RegularUse
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      regularData: (state) => state.order.regularData,
    }),
  },
  methods:{
    ...mapActions([
      "getRegularUseData",
    ]),
  },
  created(){
  this.getRegularUseData(localStorage.getItem("workId"))
  }
  
  }

</script>


<style lang="scss" scoped>
@import "@/style/global.scss";

.order-data {
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  width: 69.125rem;
  height: 37.5rem;
}
.view {
  width: 69.125rem;
  height: 8.8125rem;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
}

::v-deep.p-toolbar {
  background-color: #6381e39e;
  width: 67.25rem;
  height: 10.3125rem;
  border-radius: 10px;
}
.gridRegular {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.view {
  width: 69.125rem;
  height: 8.8125rem;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
}

::v-deep.pi-building {
  margin-left: 1.563rem;
  color: #bf360c;
}

.schedule-data {
  font-family: 'OpenSans-Regular';
  line-height: 33px;
  letter-spacing: 1px;
  font-weight: 500;
  color: #ffffff;
  font-size: 12px;
  line-height: 14px;
  margin-left: -12.375rem;
}

.order {
  font-family: 'OpenSans-Regular';
  color: #0f0f0f;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 1px;
  font-weight: 500;
}

.operation {
  font-family: 'OpenSans-Regular';
  color: #ffffff;
  font-size: 12px;
  line-height: 14px;
  margin-left: 13rem;
  letter-spacing: 1px;
  font-weight: 500;
}

// .t-end {
//   margin-right: 8.75rem;
// }

::v-deep.p-datatable {
  width: 67.25rem;
}
::v-deep .p-datatable .p-column-header-content {
  font-size: 14px;
}
::v-deep.p-datatable .p-datatable-thead > tr > th {
  text-align: left;
  padding: 1rem 1rem;
  border: 2px solid #fcfcfc;
  border-width: 0 0 1px 0;
  border-radius: 10px;
  font-weight: 600;
  // font-family: Lato;
  font-family: 'OpenSans-Regular';
  color: #536172;
  transition: box-shadow 0.2s;
  font-size: 13px;
}

::v-deep.p-datatable .p-datatable-tbody > tr > td {
  text-align: left;
  border: 2px solid #fcfcfc;
  border-width: 1px 0 1px 0;
  background: #f5f4f4;
  // padding: 0.5rem 0.5rem;
  // font-family: Lato;
  font-family: 'OpenSans-Regular';
  font-weight: 600;
  color: #536172;
  font-size: 13px;
  font-weight: 400;
  border-radius: 4px;
}

.input-data {
  color: #7a7a7a;
  font-family: 'OpenSans-Regular';
  font-size: 14px;
  line-height: 28px;
}

.input-field {
  width: 11.563rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  color: black;
    font-weight: 600;
    font-size: 15px;
}


.transfer-btn {
  background-color: #ffffff;
  color: #555555;
  padding: 8px 9px;
  font-size: 14px;
  border: 1px solid #555555;
  border-radius: 4px;
}

.p-button {
  height: 2.5rem;
  width: 5.563rem;
}

.second-data {
  margin-left: -9.375rem;
}

.given-details {
  font-family: Montserrat;
  font-size: 14px;
  color: #212121;
  font-weight: 700;
}
</style>