<template>
  <div class="order-data mt-4 ml-4">
    <div class="toolbar mt-4 ml-2">
      <Toolbar>
        <template #start>
          <i class="pi pi-arrow-left mb-8" style="color: #ffff"></i>
          <div class="mb-8 ml-5">
            <!-- <span class="pi pi-building mb-8" style="font-size: 3rem"></span> -->
            <img src="@/assets/Vector.png" />
            <img src="@/assets/image2.png" />
          </div>
          <div class="ml-7 mb-8 text-align-center">
            <h2 class="order">
              <span class="opacity-6">Order No </span><span class="ml-2">:</span
              ><span class="ml-2">1002893</span>
            </h2>
            <h2 class="order">
              <span class="opacity-6">Product</span><span class="ml-3">:</span
              ><span class="ml-2">Swivel base plate</span>
            </h2>
            <img src="@/assets/Rectangle.png" />
          </div>
          <div class="center-data mb-8">
            <h4 class="operation">
              <span class="opacity-6">Operation</span>
              <span class="ml-2">:</span><span class="ml-2">Drilling</span>
            </h4>
            <h4 class="operation">
              <span class="opacity-6">Quantity </span><span class="ml-3">:</span
              ><span class="ml-2">78</span>
            </h4>
          </div>
        </template>

        <template #end>
          <div class="mr-8 mb-7">
            <h3 class="schedule-data">
              <span class="opacity-6">Schedule Start Time</span
              ><span class="ml-2">:</span>
              <span class="ml-2">30 sep 2022</span>
            </h3>
            <h3 class="schedule-data">
              <span class="opacity-6">Schedule End Date </span>
              <span class="ml-3">:</span>
              <span class="ml-2">01 oct 2022</span>
            </h3>
            <h3 class="schedule-data">
              <span class="opacity-6">Lead Time </span
              ><span class="ml-6">:</span><span class="ml-2">03:30:00</span>
            </h3>
          </div>
        </template>
      </Toolbar>
    </div>
    <div class="col flex col-8 mt-3">
      <div class="col flex">
        <div class="input-data">
          Breakdwon Start Date & Time
          <input type="text" class="input-fieldfour" value="00 :00: 00" />
          <div class="flex">
            <button class="start-btn cursor-pointer">start</button>
          </div>
        </div>
        <div class="input-data">
          Breakdown End Date & Time
          <input type="text" class="input-fieldfive" value="00 :17: 56" />
          <div class="flex">
            <button class="end-btn cursor-pointer">end</button>
          </div>
        </div>
        <div class="input-data">
          Total Hours
          <input type="text" class="input-fieldsix" value="4.5 Hours" />
        </div>
      </div>
    </div>
    <div class="flex">
      <button class="back-btn cursor-pointer" @click="back()">Back</button>
    </div>
    <div class="chart mt-6">
      <PieChart />
    </div>
    <div class="linechart">
      <LineChart />
    </div>
  </div>
</template>

<script>
import Toolbar from "primevue/toolbar";
import "primeicons/primeicons.css";
import PieChart from "../components/PieChart.vue";
import LineChart from "../components/LineChart.vue";

export default {
  setup() {},
  name: "BoardingViewComponent",
  components: {
    Toolbar,
    PieChart,
    LineChart,
  },
  methods: {
    back() {
      this.$router.push("/workCenter/OnboardsComponent/BoardingToolComponent");
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
  width: 67.5rem;
  height: 19.75rem;
}

::v-deep.p-toolbar {
  background-color: #6381e39e;
  width: 66.25rem;
  height: 9.375rem;
  border-radius: 10px;
}

::v-deep.pi-building {
  margin-left: 1.563rem;
  color: #bf360c;
}

.schedule-data {
  color: #ffffff;
  font-size: 12px;
  line-height: 33px;
  font-family: "OpenSans-Regular";
  letter-spacing: 1px;
  font-weight: 500;
}

.order {
  color: #000000;
  font-size: 12px;
  line-height: 33px;
  letter-spacing: 1px;
  font-family: "OpenSans-Regular";
  font-weight: 500;
}

.operation {
  color: #000000;
  font-size: 12px;
  line-height: 33px;
  margin-left: 240px;
  font-family: "OpenSans-Regular";
  letter-spacing: 1px;
  font-weight: 500;
}

.input-data {
  color: #7a7a7a;
  font-weight: 600;
  font-family: "OpenSans-Regular";
  font-size: 14px;
  line-height: 30px;
}

.input-field {
  width: 11.313rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
}

.input-fieldfour {
  width: 15.5rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  font-family: "OpenSans-Regular";
  font-weight: 600;
  font-size: 15px;
}

.input-fieldfive {
  width: 14.938rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  font-family: "OpenSans-Regular";
  font-weight: 600;
  font-size: 15px;
}

.input-fieldsix {
  width: 8.438rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  font-family: "OpenSans-Regular";
  font-weight: 600;
  font-size: 15px;
}

.start-btn {
  background-color: #2fc10b;
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 11rem;
  margin-top: -2.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 5px;
  width: 4.25rem;
  height: 2.5rem;
}

.end-btn {
  background-color: #ff4e43;
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 10.875rem;
  margin-top: -2.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 5px;
  width: 3.813rem;
  height: 2.5rem;
}

.linechart {
  margin-left: 34.063rem;
  margin-top: -29.875rem;
}

.btn-com {
  margin-left: 60.938rem;
  margin-top: -3.125rem;
}

.back-btn {
  background-color: #ff8c22;
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 62.188rem;
  margin-top: -3.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 6px;
  width: 69px;
  height: 2.5rem;
}

.center-data {
  margin-top: -1.75rem;
  margin-left: -4.5rem;
}
</style>
