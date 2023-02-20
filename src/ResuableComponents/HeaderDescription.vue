<template>
  <Toolbar>
    <template #start>
      <i
        class="pi pi-arrow-left text-align-center mb-8"
        style="color: #ffff"
      ></i>
      <div class="mb-8 ml-5">
        <img src="@/assets/Vector.png" />
        <img src="@/assets/image2.png" />
      </div>
      <div class="ml-7 mb-8">
        <h2 class="order">
          <span class="opacity-6">Order No </span><span class="ml-2">:</span
          ><span class="ml-2">{{ this.order.OrderNumber }}</span>
        </h2>
        <h2 class="order">
          <span class="opacity-6">Product</span>
          <span class="ml-3">:</span
          ><span class="ml-2">{{ this.order.MaterialText }}</span>
        </h2>
        <img v-if="showIcon" src="@/assets/Rectangle.png" @click="openBasic" />
        <img v-else />
        <Dialog
          header="Header"
          v-model:visible="displayBasic"
          :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
          :style="{ width: '60vw' }"
        >
          <p><img src="@/assets/machine.png" /></p>
        </Dialog>
      </div>
      <div class="second-data">
        <h4 class="operation">
          <span class="opacity-6">Operation</span>
          <span class="ml-2">:</span
          ><span class="ml-2">{{ this.order.Operation }}</span>
        </h4>
        <h4 class="operation">
          <span class="opacity-6">Quantity </span>
          <span class="ml-3">:</span
          ><span class="ml-2">{{ this.order.BalanceQuantity }}</span>
        </h4>
      </div>

      <div class="mb-7 third-data">
        <h3 class="schedule-data">
          <span class="opacity-6">Schedule Start Time</span>
          <span class="ml-2">:</span
          ><span class="ml-2">{{ format_date(this.order.startDate) }}</span>
        </h3>
        <h3 class="schedule-data">
          <span class="opacity-6">Schedule End Date </span>
          <span class="ml-3">:</span
          ><span class="ml-2">{{ format_date(this.order.endDate) }}</span>
        </h3>
        <h3 class="schedule-data">
          <span class="opacity-6">Lead Time </span>
          <span class="ml-6">:</span><span class="ml-2">:</span>03:30:00
        </h3>
      </div>
    </template>
  </Toolbar>
</template>

<script>
import Toolbar from "primevue/toolbar";
import "primeicons/primeicons.css";
import Dialog from "primevue/dialog";
import moment from "moment";
export default {
  props: ["showIcon", "order"],
  setup() {},
  components: {
    Toolbar,
    Dialog,
  },

  data() {
    return {
      showButton: false,
      displayBasic: false,
      addBreakDown: false,
      position: "center",
      balance: 100,
      completeQuantity: 0,
      items: [
        { label: "Overdue Orders" },
        { label: "Todays Orders" },
        { label: "Upcoming Orders" },
      ],
    };
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("Do MMM, YYYY");
      }
    },
    openBasic() {
      this.displayBasic = true;
    },
    closeBasic() {
      this.displayBasic = false;
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
  width: 70.5rem;
  height: 42.5rem;
}

.schedule-data {
  color: #000000;
  font-size: 12px;
  font-family: "OpenSans-Regular";
  line-height: 33px;
  letter-spacing: 1px;
  font-weight: 500;
}

.order {
  color: #000000;
  font-size: 12px;
  font-family: "OpenSans-Regular";
  line-height: 33px;
  letter-spacing: 1px;
  font-weight: 500;
}

.operation {
  color: #000000;
  font-size: 12px;
  font-family: "OpenSans-Regular";
  line-height: 33px;
  margin-left: 240px;
  letter-spacing: 1px;
  font-weight: 500;
}

.second-data {
  margin-top: -6.75rem;
  margin-left: -11.3rem;
}
.third-data {
  margin-left: 47px;
}
.first-data {
  margin-left: 32px;
}
</style>