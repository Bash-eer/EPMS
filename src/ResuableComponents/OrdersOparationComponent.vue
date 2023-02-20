<template>
  <div class="col flex">
    <div class="input-data">
      Operation
      <input type="text" class="input-field" v-model="operation" />
    </div>
    <div class="input-data">
      Planned Quantity
      <input type="text" class="input-fieldone" v-model="Quantity" />
    </div>
    <div class="input-data">
      Confirmed Quantity
      <input type="number" class="input-fieldone" v-model="Confirmed" />
    </div>
    <div class="input-data">
      Completed Quantity
      <input type="text" class="input-fieldtwo" v-model="Completed" />
      <div class="flex">
        <button class="balance-btn-minus cursor-pointer" @click="completedQuantity()">
          <i class="pi pi-minus"></i>
        </button>
      </div>
      <div class="flex">
        <button class="balance-btn cursor-pointer" @click="completedQuantity()">
          <i class="pi pi-plus"></i>
        </button>
      </div>
    </div>
    <div class="input-data">
      Balance
      <input type="text" class="input-fieldthree" v-model="balance" />
    </div>
    <div class="col ml-2">
      <div class="change-options" @click="addBreakDown()">+ Add Breakdown</div>
      <br />
      <div class="change-options" @click="addConsumeRequest()">
        + Add Consumable Request
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["addBreakDown", "addConsumeRequest", "order"],
  data() {
    return {
      Quantity: "",
      operation: "",
      Confirmed: "",
      Completed: 0,
      completeQuantity: 0,
      balance: 100,
    };
  },
  watch: {
    order: function () {
      this.operation = this.order.Operation;
      this.Quantity = this.order.PlannedQuantity;
      this.Confirmed = this.order.ConfirmedQuantity;
      this.Completed = this.order.CompletedQuantity;
      this.balance = this.order.BalanceQuantity;
    },
  },
  created() {
    this.operation = this.order.Operation;
    this.Quantity = this.order.PlannedQuantity;
    this.Confirmed = this.order.ConfirmedQuantity;
    this.Completed = this.order.CompletedQuantity;
    this.balance = this.order.BalanceQuantity;
  },
  methods: {
    completedQuantity() {
      this.balance--;
      this.Completed++;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/global.scss";

::v-deep.p-toolbar {
  background-color: #6381e39e;
  width: 66.25rem;
  height: 10.375rem;
  border-radius: 10px;
}

::v-deep.pi-building {
  margin-left: 25px;
  color: #bf360c;
}

.input-data {
  color: #7a7a7a;
  font-weight: 600;
  font-family: "OpenSans-Regular";
  font-size: 14px;
  line-height: 30px;
  margin-left: 7px;
}

.input-field {
  width: 11.3125rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-style: Montserrat;
  border-radius: 3px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}

.input-fieldone {
  width: 9.4375;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-style: Montserrat;
  border-radius: 3px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}

.input-fieldtwo {
  width: 9.25rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-style: Montserrat;
  border-radius: 3px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}

.input-fieldthree {
  width: 7.1875rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-style: Montserrat;
  border-radius: 3px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}

.balance-btn {
  background-color: #ff8c22;
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 105px;
  margin-top: -2.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 7px;
  width: 2.5rem;
  height: 2.5rem;
}
.balance-btn-minus {
  background-color: #ff8c22;
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 66px;
  margin-top: -2.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 7px;
  width: 2.5rem;
  height: 2.5rem;
}
.pi {
    font-size: 14px !important;
}
.change-options {
  color: #eb7100 !important;
  border-bottom: 2px solid #eb7100;
  width: max-content;
  font-weight: 600;
  font-size: 14px;
  font-family: "OpenSans-Light";
  cursor: pointer;
}
</style>