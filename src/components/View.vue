<template>
  <div>
    <div class="order-data mt-4 ml-4">
      <div class="fontFamily-Regular flex justify-content-between">
        <span class="ml-2 mt-2 font-semibold text-xl"
          >Regular Use Material</span
        >
        <Button
          label="Create  "
          icon="pi pi-external-link"
          @click="opendialog"
          class="mr-3 mt-2"
        />
      </div>
      <div class="material">
        <span>Material Number</span
        ><span style="margin-left: 142px">Material Discribtion</span>
      </div>
      <div class="view col col-12 flex">
        <Dialog
          header="Consumable Create"
          :visible="dialogOpen"
          :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
          :style="{ width: '50vw' }"
        >
          <div class="ml-8">
            <div>
              <h5>Material Number</h5>
              <InputText
                type="number"
                v-model="details.material_no"
                :class="{
                  'p-invalid': v$.details.material_no.$invalid && submitted,
                }"
              />
            </div>
            <div>
              <h5>Material Description</h5>
              <Textarea
                id="username"
                type="text"
                v-model="details.material_describtion"
                @blur="v$.details.material_describtion.$model"
                :class="{
                  'p-invalid':
                    v$.details.material_describtion.$invalid && submitted,
                }"
              />
            </div>
            <div>
              <h5>Prefix</h5>
              <InputText
                type="text"
                v-model="details.prefix"
                :class="{
                  'p-invalid': v$.details.prefix.$invalid && submitted,
                }"
              />
              <!-- <Dropdown
                v-model="details.selectedCity"
                :options="cities"
                optionLabel="name"
                placeholder="Select"
                style="width: 37%"
                :class="{
                  'p-invalid': v$.details.selectedCity.$invalid && submitted,
                }"
              /> -->
            </div>
            <div class="field-checkbox mt-6">
              <Checkbox
                inputId="binary"
                v-model="details.checked"
                :binary="true"
              />
              <label for="binary">Regular Use Material</label>
            </div>
          </div>
          <template #footer>
            <Button
              label="Cancel"
              icon="pi pi-times"
              @click="closeBasic"
              class="p-button-text"
            />
            <Button
              label="Submit"
              icon="pi pi-check"
              @click="submitData"
              autofocus
            />
          </template>
        </Dialog>
        <div class="col flex">
          <div class="input-data mt-2">
            <br />

            <div
              class="mt-2 align-field"
              v-for="(data, index) in this.inputFieldDatas"
              :key="index"
            >
              <div class="mt-2" @click="selected(data)">
                <Checkbox v-model="data.selected" :binary="true" />
              </div>
              <input
                type="text"
                class="input-field"
                v-model="data.material_number"
                disabled
              />
              <span class="ml-4"
                ><input
                  type="text"
                  v-model="data.material_description"
                  class="input-field"
                  disabled
              /></span>
              <div @click="dataId(data._id, data)">
                <SpeedDial :model="items" direction="right" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="consume_button mr-2">
        <span class="t-end">
          <button class="transfer-btn cursor-pointer">Transfer</button>
          <span class="ml-2">
            <ButtonComponent
              label="Consume"
              type="primary"
              @click="submitConsumable"
            />
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import InputText from "primevue/inputtext";
import { mapState, mapActions } from "vuex";
import Textarea from "primevue/textarea";
// import Dropdown from "primevue/dropdown";
import SpeedDial from "primevue/speeddial";
import Checkbox from "primevue/checkbox";
export default {
  setup() {},
  name: "ViewComponent",
  components: {
    Button,
    Dialog,
    InputText,
    Textarea,
    SpeedDial,
    Checkbox,
  },
  data() {
    return {
      v$: useVuelidate(),
      details: {
        material_no: 0,
        material_describtion: "",
        checked: false,
        prefix: "",
      },
      items: [
        {
          label: "Add",
          icon: "pi pi-pencil",
          command: () => {
            this.dialogOpen = true;
            this.$store.state.order.updateBoolean = true;

            this.$toast.add({
              severity: "info",
              summary: "Add",
              detail: "Data Added",
            });
          },
        },

        {
          label: "Delete",
          icon: "pi pi-trash",
          command: () => {
            this.deleteConsumableDatas(this.rowId);
            this.getConsumableDatas(localStorage.getItem("workId"));

            this.$toast.add({
              severity: "error",
              summary: "Delete",
              detail: "Data Deleted",
            });
          },
        },
      ],
      regularFields: [
        {
          material_num: null,
          material_des: "",
        },
      ],
      cities: [
        { name: "Ltr", code: "NY" },
        { name: "pc", code: "RM" },
      ],
      inputFieldDatas: [],
      submitted: false,
      dialogOpen: false,
      table_id: null,
      id_checked: [],
      selectedDatas: [],
      rowId: null,
    };
  },
  validations() {
    return {
      details: {
        material_no: { required },
        prefix: { required },
        material_describtion: { required },
        checked: { required },
      },
    };
  },
  created() {
    this.getConsumableDatas(localStorage.getItem("workId"));
  },
  watch: {
    ConsumableDatas: function () {
      this.inputFieldDatas = JSON.parse(JSON.stringify(this.ConsumableDatas));

      for (let i in this.$store.state.order.consumableTableDatas) {
        if (this.$store.state.order.consumableTableDatas[i].selected == true) {
          for (let j in this.inputFieldDatas) {
            if (
              this.$store.state.order.consumableTableDatas[i]._id ==
              this.inputFieldDatas[j]._id
            ) {
              this.inputFieldDatas[j].selected = true;
              if (this.inputFieldDatas[j].selected == true) {
                this.selectedDatas.push(this.inputFieldDatas[j]);
              }
            }
          }
        }
      }
    },
    updateData: function () {
      if (this.updateData) {
        this.details.material_no = this.updateData.material_number;
        this.details.material_describtion =
          this.updateData.material_description;
        this.details.checked = this.updateData.isRegularUse;
        this.details.prefix = this.updateData.materialPrefix;
        this.table_id = this.updateData._id;
      }
    },
  },
  computed: {
    ...mapState({
      OrderComponent: (state) => state.order.OrderComponent,
      ConsumableDatas: (state) => state.order.ConsumableDatas,
      updateData: (state) => state.order.updateData,
      updateBoolean: (state) => state.order.updateBoolean,
    }),
  },
  methods: {
    ...mapActions([
      "getOrderComponent",
      "getConsumableDatas",
      "submitConsumableDatas",
      "updateConsumableDatas",
      "deleteConsumableDatas",
    ]),
    dataId(id, data) {
      this.rowId = id;

      this.$store.state.order.updateData = data;
    },
    openBasic() {
      this.dialogOpen = true;
    },
    selected(data) {
      if (data.selected == true) {
        this.selectedDatas.push(data);
      }
    },

    closeBasic() {
      this.dialogOpen = false;
    },

    opendialog() {
      this.dialogOpen = true;
      this.$store.state.order.updateBoolean = false;
      this.details.material_no = 0;
      this.details.material_describtion = "";
      this.details.checked = false;
      this.details.prefix = "";
    },
    submitConsumable() {
      this.$store.state.order.consumableTableDatas = this.selectedDatas;
      this.$router.push("/workCenter/consumableRequest");
    },
    submitData() {
      if (this.v$.$invalid) {
        this.submitted = true;
      }
      if (!this.v$.$invalid) {
        if (this.updateBoolean == false) {
          let payload = {
            material_number: this.details.material_no,
            material_description: this.details.material_describtion,
            isRegularUse: this.details.checked,
            materialPrefix: this.details.prefix,
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
            isRegularUse: this.details.checked,
            materialPrefix: this.details.prefix,
            workCenterId: localStorage.getItem("workId"),
            _id: this.table_id,
          };
          this.updateConsumableDatas(payload);
          this.dialogOpen = false;
          this.getConsumableDatas(localStorage.getItem("workId"));
        }
        // let payload = {
        //   material_number: this.details.material_no,
        //   material_description: this.details.material_describtion,
        //   isRegularUse: this.details.checked,
        //   materialPrefix: this.details.prefix,
        //   workCenterId: localStorage.getItem("workId"),
        // };
        // this.submitConsumableDatas(payload);
        // this.getConsumableDatas(localStorage.getItem("workId"));
        this.dialogOpen = false;
        this.details.material_no = 0;
        this.details.material_describtion = "";
        (this.details.checked = false), (this.details.prefix = "");
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
  width: 62.5rem;
  height: fit-content;
}

.order {
  font-family: Montserrat;
  color: #000000;
  font-size: 11px;
  line-height: 14px;
}

.operation {
  font-family: Montserrat;
  color: #000000;
  font-size: 11px;
  line-height: 14px;
  margin-left: 14.188rem;
}
.consume_button {
  display: flex;
  justify-content: end;
  margin-top: 75px;
}
.align-field {
  display: flex;
  column-gap: 39px;
  margin: 44px;
}
.t-end {
  margin-left: 227px;
}

.input-data {
  color: #7a7a7a;
  font-style: Montserrat;
  font-size: 14px;
  line-height: 28px;
}

.input-field {
  width: 11.563rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  color: black;
  font-size: 15px;
  font-weight: 600;
}

.transfer-btn {
  background-color: #ffffff;
  color: #555555;
  padding: 8px 9px;
  font-size: 14px;
  border: 1px solid #555555;
  border-radius: 4px;
  width: 5.563rem;
  height: 2.5rem;
}
::v-deep .p-speeddial-button.p-button.p-button-icon-only {
  width: 2rem;
  height: 2rem;
  bottom: -9px !important;
  right: 6px !important;
}
::v-deep .p-speeddial-action {
  width: 2rem;
  height: 2rem;
  background: #495057;
  color: #fff;
  top: 7px;
}
.material {
  /* margin: -16px; */
  margin-bottom: -35px;
  margin-left: 113px;
  margin-top: 27px;
}
.p-button {
  height: 2.5rem;
}
</style>
