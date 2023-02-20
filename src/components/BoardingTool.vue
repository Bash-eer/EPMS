<template>
  <div>
    <div class="order-data mt-4 ml-4">
      <div class="toolbar mt-4 ml-2">
        <HeaderDescription :showIcon="true" :order="this.orderData" />
      </div>
      <div v-if="!showBreakDownpage">
        <div class="col col-12 flex mt-2">
          <OrderOperation
            :addBreakDown="addBreakDowns"
            :addConsumeRequest="addConsumeRequest"
            :order="this.orderData"
          />
        </div>
        <OrderActivity
          v-for="(dataActivity, index) in activityWatch"
          :key="index"
          :activityData="dataActivity"
        />
        <div class="col ml-2">
          <!-- <div class="change-options" @click="addActivity()">
            + Add Activity
          </div> -->
          <div class="btn-com" v-if="!showButton">
            <ButtonComponent label="back" type="primary" @click="goBack()" />
          </div>
          <div class="btn-com" v-else>
            <ButtonComponent
              label="Submit"
              type="primary"
              @click="setOptionActive()"
            />
          </div>
        </div>
      </div>
      <div v-else>
        <OrdersBreakDown :clickBack="setOptionActive" />
      </div>
    </div>
    <div class="chart ml-4 mt-4">
      <PieChart />
    </div>
    <div class="linechart">
      <LineChart />
    </div>
  </div>
</template>

<script>
import "primeicons/primeicons.css";
import PieChart from "../components/PieChart.vue";
import LineChart from "../components/LineChart.vue";
import HeaderDescription from "../ResuableComponents/HeaderDescription.vue";
import OrderOperation from "../ResuableComponents/OrdersOparationComponent.vue";
import OrderActivity from "../ResuableComponents/OrdersActivity.vue";
import OrdersBreakDown from "../ResuableComponents/OrdersBreakDown.vue";
import { mapState, mapActions } from "vuex";
export default {
  setup() {},
  name: "BoardingToolComponent",
  components: {
    PieChart,
    LineChart,
    HeaderDescription,
    OrderOperation,
    OrderActivity,
    OrdersBreakDown,
  },

  data() {
    return {
      showButton: false,
      displayBasic: false,
      addBreakDown: false,
      position: "center",
      showBreakDownpage: false,
      orderData: [],
      activityWatch: [],
      breakDowndata: [],
      items: [
        { label: "Overdue Orders" },
        { label: "Todays Orders" },
        { label: "Upcoming Orders" },
      ],
      length: 1,
      activity: [
        {
          name: `Activity 1`,
          startTimer: false,
          endTimer: false,
          actualEnd: "00:17: 56",
          usedHour: "0 Hours",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      OrderComponent: (state) => state.order.OrderComponent,
      activityStopWatch: (state) => state.order.activityStopWatch,
      // BreakDownDatas: (state) => state.order.BreakDownDatas,
    }),
  },
  watch: {
    OrderComponent: function () {
      this.orderData = this.OrderComponent;
    },
    activityStopWatch: function () {
      this.activityWatch = JSON.parse(JSON.stringify(this.activityStopWatch));
    },
    // "BreakDownDatas":function(){
    // this.breakDowndata = JSON.parse(JSON.stringify(this.BreakDownDatas))

    // }
  },
  created() {
    this.getOrderComponent(localStorage.getItem("OrderId"));
    this.getActivityStopWatch(localStorage.getItem("OrderId"));
    this.getBreakDownDatas(localStorage.getItem("OrderId"));
  },
  methods: {
    ...mapActions([
      "getOrderComponent",
      "getActivityStopWatch",
      "getBreakDownDatas",
    ]),
    addActivity() {
      this.length += 1;
      this.activity.push({
        name: `Activity ${this.length}`,
        startTimer: false,
        endTimer: false,
        actualEnd: "00:17: 56",
        usedHour: "0 Hours",
      });
    },
    openBasic() {
      this.displayBasic = true;
    },
    closeBasic() {
      this.displayBasic = false;
    },
    setOptionActive() {
      // this.$router.push(
      //   "/workCenter/BoardingToolComponent/BoardingViewComponent"
      // );
      this.showBreakDownpage = !this.showBreakDownpage;
      this.clickEnd();
    },
    goBack() {
      this.$router.push("/workCenter/orders");
    },
    addBreakDowns() {
      this.showBreakDownpage = !this.showBreakDownpage;
      this.activity.splice(1, this.activity.length);
      this.activity[0].startTimer = false;
      // this.clickEnd()
    },
    addConsumeRequest() {
      this.$router.push("/workCenter/consumableRequest");
    },
    completedQuantity() {
      this.balance--;
      this.completeQuantity++;
    },
    clickStart(index) {
      this.showButton = !this.showButton;
      this.activity[index].startTimer = true;
      this.activity[index].usedHour = "4.5 Hours";
    },
    clickEnd(index) {
      this.showButton = !this.showButton;
      this.activity[index].startTimer = false;
      this.activity[index].usedHour = "0 Hours";
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
  width: 71.5rem;
  // height: 42.5rem;
  padding: 19px;
}

::v-deep.p-toolbar {
  background-color: #6381e39e;
  width: 66.25rem;
  height: 9.375rem;
  border-radius: 10px;
}

::v-deep.pi-building {
  margin-left: 25px;
  color: #bf360c;
}

.schedule-data {
  color: #ffffff;
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

.input-fieldfour {
  width: 11.5625rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-style: Montserrat;
  border-radius: 3px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}

.input-fieldfive {
  width: 15.1875rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-style: Montserrat;
  border-radius: 3px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}

.input-fieldsix {
  width: 8.4375rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  font-style: Montserrat;
  border-radius: 3px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}

.input-fieldseven {
  width: 8.4375rem;
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
  margin-left: 6.4rem;
  margin-top: -2.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 7px;
  width: 2.5rem;
  height: 2.5rem;
}

.start-btn {
  background-color: #2fc10b;
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 10.688rem;
  margin-top: -2.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 5px;
  width: 4.25rem;
  font-family: "OpenSans-Light";
  font-weight: 600;
  height: 2.5rem;
}

.end-btn {
  background-color: #ff4e43;
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 10.688rem;
  margin-top: -2.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 4px;
  width: 4.25rem;
  height: 2.5rem;
}

.linechart {
  margin-left: 35.625rem;
  margin-top: -29.875rem;
}

.btn-com {
  margin-left: 60.625rem;
  margin-top: -1.125rem;
}

.second-data {
  margin-top: -6.75rem;
  margin-left: -5.3rem;
}
.change-options {
  color: #eb7100 !important;
  border-bottom: 2px solid #eb7100;
  width: max-content;
  font-weight: 600;
  font-size: 16px;
  margin-left: 8px;
  font-family: "OpenSans-Light";
  cursor: pointer;
}
</style>
