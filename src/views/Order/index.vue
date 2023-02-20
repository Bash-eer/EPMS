<template>
  <TabView ref="tabview1" class="w-full">
    <TabPanel header="OverDue order">
      <div class="date mt-4">
        <span>
          {{ dateFormater(this.Date) }}
        </span>
        <div class="flex table mt-2" dataKey="id">
          <Overdue :value="this.TableData" />
        </div>
        <div class="mt-6"></div>
      </div>
      <div class="piechart">
        <PieChart />
      </div>
      <div class="linechart">
        <LineChart />
      </div>
    </TabPanel>
    <TabPanel header="Today's Order">
      <div class="date mt-4">
        <span>
          <!-- {{ new Date() }} -->
          {{ dateFormater(this.DateToday) }}
        </span>
        <div class="flex table mt-2" dataKey="id">
          <Overdue :value="this.TableTodaysData" />
        </div>
        <div class="mt-6">
          <!-- {{ new Date() }} -->
        </div>
      </div>
      <!-- <div class=""> -->
      <div class="piechart">
        <PieChart />
      </div>
      <div class="linechart">
        <LineChart />
      </div>
    </TabPanel>
    <TabPanel header="Upcoming Orders">
      <div class="date mt-4">
        <span>
          {{ dateFormater(this.DateUpcoming) }}
        </span>
        <div class="flex table mt-2" dataKey="id">
          <Overdue :value="this.TableUpcomingData" />
        </div>
        <div class="mt-6"></div>
      </div>
      <div class="piechart">
        <PieChart />
      </div>
      <div class="linechart">
        <LineChart />
      </div>
    </TabPanel>
  </TabView>

  <!-- </div> -->
</template>

<script>
// import TabMenu from "primevue/tabmenu";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import moment from "moment";
import PieChart from "../../components/PieChart.vue";
import LineChart from "../../components/LineChart.vue";
import "primeicons/primeicons.css";
import { mapActions, mapState } from "vuex";
import Overdue from "../../ResuableComponents/Overdue.vue";

export default {
  setup() {},
  name: "OrderComponent",
  components: {
    // TabMenu,
    TabView,
    TabPanel,
    PieChart,
    LineChart,

    Overdue,
  },
  data() {
    return {
      displayBasic: false,
      position: "center",
      // sales: null,
      items: [
        { label: "Overdue Orders" },
        { label: "Todays Orders" },
        { label: "Upcoming Orders" },
      ],
      TableData: [],
      TableTodaysData: [],
      TableUpcomingData: [],
      DateToday: null,
      DateUpcoming: null,
      showButton: false,
      showDropdown: false,
      renderkey: 10,
      Date: null,
    };
  },
  computed: {
    ...mapState({
      overDueDatas: (state) => state.order.overDueDatas,
      todaysdata: (state) => state.order.todaysdata,
      upcomingData: (state) => state.order.upcomingData,
      workCenterId: (state) => state.workCenter.workCenterId,
    }),
  },
  methods: {
    ...mapActions([
      "getAllOverDueData",
      "getAllTodaysData",
      "getAllupcomingData",
    ]),
    openBasic() {
      this.displayBasic = true;
    },
    dateFormater(data) {
      var formattedDate = moment(data).format("Do MMM YYYY");
      return formattedDate;
    },
    closeBasic() {
      this.displayBasic = false;
    },
    setOptionActive() {
      this.$router.push("/workCenter/BoardComponent");
      this.$router.push("/workCenter/OnboardsComponent/BoardingToolComponent");
    },
    setOption() {
      this.showDropdown = !this.showDropdown;
    },
  },
  watch: {
    overDueDatas: function () {
      this.TableData = this.overDueDatas;
      this.overDueDatas.map((list) => {
        this.Date = list.startDate;
      });
    },
    todaysdata: function () {
      this.TableTodaysData = this.todaysdata;
      this.todaysdata.map((list) => {
        this.DateUpcoming = list.startDate;
      });
    },
    upcomingData: function () {
      this.TableUpcomingData = this.upcomingData;
      this.upcomingData.map((list) => {
        this.DateUpcoming = list.startDate;
      });
    },
  },
  async created() {
    await this.getAllOverDueData(localStorage.getItem("workId"));
    await this.getAllTodaysData(localStorage.getItem("workId"));
    await this.getAllupcomingData(localStorage.getItem("workId"));
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";

.page-header {
  color: #b5bdc4;
  font-size: 12px;
  font-weight: 600;
}

.date {
  font-size: 18px;
  font-style: Bold;
  color: #171721;
  font-family: "OpenSans-Regular";
}

::v-deep.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
  border-color: #ff8c22;
  color: #0b1354;
}

::v-deep.p-datatable {
  // margin-left: 9px;
  width: 1100px;
}

::v-deep.p-datatable .p-datatable-thead > th {
  text-align: center;
  padding: 0rem 1rem;
  border: 2px solid #fbfbfb;
  border-width: 0 0 1px 0;
  border-radius: 10px;
  font-weight: 600;
  font-family: Lato;
  color: #536172;
  transition: box-shadow 0.2s;
  font-size: 13px;
}
// ::v-deep.p-tabview .p-component {
//   width: 100% !important;
// }
::v-deep.p-datatable .p-datatable-thead > tr {
  text-align: center;
  padding: 0rem 1rem;
  border: 2px solid #fbfbfb;
  border-width: 0 0 1px 0;
  border-radius: 10px;
  font-weight: 600;
  font-family: Lato;
  color: #536172;
  transition: box-shadow 0.2s;
  font-size: 13px;
}

::v-deep.p-datatable .p-datatable-tbody > td {
  text-align: center;
  border: 2px solid #fbfbfb;
  border-width: 2px 0 2px 0;
  background: #f5f4f4;
  font-family: Lato;
  font-size: 13px;
  font-weight: 400;
  color: #536172;
  border-radius: 3px;
  padding: 0.8rem 0.8rem;
}

::v-deep.p-datatable .p-datatable-tbody > tr:hover {
  background-color: rgb(150, 214, 150);
}

::v-deep.p-datatable .p-datatable-tbody > tr {
  text-align: center;
  padding: 0.8rem 0.8rem;
  border: 2px solid #fbfbfb;
  background: #f5f4f4;
  border-width: 2px 0 2px 0;
  border-radius: 3px;
  font-weight: 600;
  font-family: Lato;
  color: #536172;
  font-size: 13px;
}

.linechart {
  margin-left: 32.95rem;
  margin-top: -29.875rem;
}

.piechart {
  margin-top: 2.813rem;
  margin-left: -6px;
}

::v-deep.p-button-text {
  color: #11361b;
  line-height: 15px;
  font-size: 13px;
  background-color: #c6fdd6;
  padding: 8px 12px 8px 12px;
  border-radius: 6px;
  border: 1px solid #c0c0c0;
}

::v-deep.p-button-textone {
  color: red;
  // line-height: 15px;
  font-size: 10px;
  background-color: #fddac6;
  border-radius: 3px;
  // height: 0.625rem;
  // width: 1.25rem;
  border: 1px solid #c0c0c0;
}

::v-deep.p-button-textwo {
  color: green;
  line-height: 15px;
  font-size: 10px;
  background-color: #ffdb5d;
  // padding: 8px 22px;
  border-radius: 3px;
  // height: 0.625rem;
  // width: 1.25rem;
  border: 1px solid #c0c0c0;
  margin-left: -106px;
}

::v-deep.p-button-textthree {
  color: #ffffff;
  line-height: 15px;
  font-size: 13px;
  background-color: #039700;
  padding: 8px 12px 8px 12px;
  border-radius: 6px;
  border: 1px solid #c0c0c0;
}

.p-badge {
  background-color: green;
  font-size: 0.3rem;
  margin-left: -3.75rem;
  border-radius: 15px;
}

.p-dialog .p-dialog-header {
  border-radius: 10px;
  font-size: 14px;
  font-family: Montserrat;
  color: #212121;
}

.p-dialog-content {
  font-size: 14px;
  font-family: Montserrat;
  color: #7a7a7a;
}

.cancel-btn {
  width: 82px;
  height: 37px;
  border: 1px solid #555555;
  background: #ffffff;
  color: #7a7a7a;
  font-size: 14px;
  font-family: Montserrat;
}

.number {
  margin-left: -3.625rem;
  font-size: 8px;
}

.newDropdown {
  display: block;
  position: absolute;
  width: 13.5rem;
  height: 9.625rem;
  background-color: white;
  box-shadow: 3px 0px 5px 0px;
  padding: 18px;
  top: 77px;
  border-radius: 7px;
  margin-left: -13.313rem;
}

.hideDropdown {
  display: none;
}

.color-data {
  color: #171721;
  font-size: 16px;
}
</style>
