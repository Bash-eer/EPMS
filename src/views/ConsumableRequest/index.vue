<template>
  <div class="order-data">
    <div class="mt-4 ml-2">
      <div class="toolbar mt-4 ml-2">
        <HeaderDescription :showIcon="false" :order="this.orderData" />
      </div>

      <div class="col col-8 flex mt-2">
        <div class="col flex">
          <ConsumeTables
            :products="products"
            :data="this.tabledatas"
            :dialogOpen="openBasic"
          />
        </div>
      </div>
      <div>
        <div style="width: 100%; float: left">
          <div class="ml-3 font-semibold text-xl">Regular Use Material</div>
          <div class="mt-3">
            <span class="ml-7">Material Number</span
            ><span style="margin-left: 210px">Material Describtion</span>
          </div>
          <div
            class="gridRegular mt-2 ml-3"
            v-for="(datas, index) in this.regularDatas"
            :key="index"
            style="display: flex"
          >
            <div class="mt-2" @click="selected(datas)">
              <Checkbox v-model="datas.selected" :binary="true" />
            </div>
            <input
              type="text"
              class="input-field ml-4"
              disabled
              v-model="datas.material_number"
            />
            <span class="ml-4"
              ><input
                type="text"
                class="input-field"
                disabled
                v-model="datas.material_description"
            /></span>
          </div>
          <div class="flex">
            <div class="col ml-3 mt-5">
              <div class="change-option" @click="setOptionActive()">
                + View More
              </div>
            </div>
            <div class="mt-5 ml-4">
              <ButtonComponent class="transfer-btn" label="Transfer" />
              <span class="ml-2">
                <ButtonComponent
                  label="Consume"
                  type="primary"
                  @click="submitConsumable"
                />
              </span>
            </div>
          </div>
        </div>
        <div>
          <!-- <div style="width: 50%; float:right">
  <div class="flex">
          <div class="col ml-3 mt-5">
            <div class="change-option" @click="setOptionActive()">+ View More</div>
          </div>
          <div class=" mt-5 ml-4" >
            <ButtonComponent class="transfer-btn" label="Transfer" />
            <span class="ml-2">
              <ButtonComponent
                label="Consume"
                type="primary"
              />
            </span>
          </div>
        
        </div>
</div> -->
        </div>
      </div>
      <!-- <div class="view col col-8 flex mt-7">
        <div class="col flex">
          <RegularUse/>
          <RequestMaterial :setOptionActive="setOptionActive" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import "primeicons/primeicons.css";
import HeaderDescription from "../../ResuableComponents/HeaderDescription.vue";
import ConsumeTables from "../../ResuableComponents/ConsumeTables.vue";
// import RequestMaterial from "../../ResuableComponents/RegularMaterial.vue";
import { mapState, mapActions } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Checkbox from "primevue/checkbox";
//import RegularUse from "../../ResuableComponents/CommonComponents/RegularUse.vue"
export default {
  setup() {},
  name: "ConsumableRequestIndex",
  components: {
    HeaderDescription,
    ConsumeTables,
    Checkbox,
    // RequestMaterial,
    // RegularUse
  },
  data() {
    return {
      v$: useVuelidate(),
      orderData: [],
      tabledatas: [],
      selectedDatas: [],
      regularDatas: [],
      details: {
        material_no: 0,
        selectedCity: null,
        material_describtion: "",
        quantity: 0,
      },
      submitted: false,
      cities: [
        { name: "Ltr", code: "NY" },
        { name: "pc", code: "RM" },
      ],
      displayBasic: false,
      position: "center",
      dialogOpen: false,
      table_id: null,
    };
  },
  validations() {
    return {
      details: {
        material_no: { required },
        selectedCity: { required },
        material_describtion: { required },
        quantity: { required },
      },
    };
  },
  computed: {
    ...mapState({
      OrderComponent: (state) => state.order.OrderComponent,
      ConsumableDatas: (state) => state.order.ConsumableDatas,
      updateData: (state) => state.order.updateData,
      updateBoolean: (state) => state.order.updateBoolean,
      regularData: (state) => state.order.regularData,
    }),
  },
  methods: {
    ...mapActions([
      "getOrderComponent",
      "getConsumableDatas",
      "submitConsumableDatas",
      "updateConsumableDatas",
      "getRegularUseData",
    ]),
    setOptionActive() {
      this.$router.push("/workCenter/ViewComponent");
    },
    openBasic() {
      this.dialogOpen = true;
    },
    opendialog() {
      this.dialogOpen = true;
      this.$store.state.order.updateBoolean = false;
      this.details.material_no = 0;
      this.details.material_describtion = "";
      this.details.quantity = 0;
      this.details.selectedCity.name = "";
    },
    closeBasic() {
      this.dialogOpen = false;
    },
    selected(data) {
      if (data.selected == true) {
        this.selectedDatas.push(data);
        this.$store.state.order.consumableTableDatas = JSON.parse(
          JSON.stringify(this.selectedDatas)
        );
      } else if (data.selected == false) {
        for (let j in this.selectedDatas) {
          if (data._id == this.selectedDatas[j]._id) {
            this.selectedDatas.splice(j, 1);
          }
        }
        this.$store.state.order.consumableTableDatas = JSON.parse(
          JSON.stringify(this.selectedDatas)
        );
      }
    },
    //   submitConsumable(){
    //     this.$store.state.order.consumableTableDatas = this.selectedDatas;

    //   },
    submitData() {
      if (this.v$.$invalid) {
        this.submitted = true;
      }
      if (!this.v$.$invalid) {
        if (this.updateBoolean == false) {
          let payload = {
            material_number: this.details.material_no,
            material_description: this.details.material_describtion,
            quantity: this.details.quantity,
            materialPrefix: this.details.selectedCity.name,
            workCenterId: localStorage.getItem("workId"),
          };
          this.submitConsumableDatas(payload);
          this.dialogOpen = false;
          this.getConsumableDatas(localStorage.getItem("workId"));
        }
        if (this.updateBoolean == true) {
          let payload = {
            material_number: this.details.material_no,
            material_description: this.details.material_describtion,
            quantity: this.details.quantity,
            materialPrefix: this.details.selectedCity.name,
            workCenterId: localStorage.getItem("workId"),
            _id: this.table_id,
          };
          this.updateConsumableDatas(payload);
          this.dialogOpen = false;
          this.getConsumableDatas(localStorage.getItem("workId"));
        }
        this.details.material_no = 0;
        this.details.material_describtion = "";
        this.details.quantity = 0;
        this.details.selectedCity.name = "";
      }
    },
  },
  created() {
    this.getOrderComponent(localStorage.getItem("OrderId"));
    this.getConsumableDatas(localStorage.getItem("workId"));
    this.getRegularUseData(localStorage.getItem("workId"));
  },
  watch: {
    OrderComponent: function () {
      this.orderData = this.OrderComponent;
    },
    regularData: function () {
      this.regularDatas = JSON.parse(JSON.stringify(this.regularData));

      //   if(this.$store.state.order.consumableTableDatas[i].selected == true){
      //     for(let j in this.regularData ){
      //       if(this.$store.state.order.consumableTableDatas[i]._id == this.regularData[j]._id){
      //         this.regularData[j].selected = true
      //       }
      //     }
      //   }
      // }
    },
    ConsumableDatas: function () {
      this.tabledatas = JSON.parse(JSON.stringify(this.ConsumableDatas));
    },
    updateData: function () {
      if (this.updateData) {
        this.details.material_no = this.updateData.material_number;
        this.details.material_describtion =
          this.updateData.material_description;
        this.details.quantity = this.updateData.quantity;
        this.details.selectedCity = {
          name: this.updateData.materialPrefix,
          code: "ert",
        };
        this.table_id = this.updateData._id;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";

.order-data {
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  width: 69.125rem;
  height: fit-content;
}
.transfer-btn {
  background-color: #ffffff;
  color: #555555;
  padding: 8px 9px;
  font-size: 14px;
  border: 1px solid #555555;
  border-radius: 4px;
}
.gridRegular {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
::v-deep.p-toolbar {
  background-color: #6381e39e;
  width: 67.25rem;
  height: 10.3125rem;
  border-radius: 10px;
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
  font-family: "OpenSans-Regular";
  line-height: 33px;
  letter-spacing: 1px;
  font-weight: 500;
  color: #ffffff;
  font-size: 12px;
  line-height: 14px;
  margin-left: -12.375rem;
}

.order {
  font-family: "OpenSans-Regular";
  color: #000000;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 1px;
  font-weight: 500;
}

.operation {
  font-family: "OpenSans-Regular";
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
.p-button[data-v-08c2eee5] {
  height: 2.5rem;
  width: 7.563rem;
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
  font-family: "OpenSans-Regular";
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
  font-family: "OpenSans-Regular";
  font-weight: 600;
  color: #536172;
  font-size: 13px;
  font-weight: 400;
  border-radius: 4px;
}

.input-data {
  color: #7a7a7a;
  font-family: "OpenSans-Regular";
  font-size: 14px;
  line-height: 28px;
}

.input-field {
  width: 18.563rem;
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
