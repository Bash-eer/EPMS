<template>
  <div>
    <div class="toolbar col col-10 flex ml-2 mt-3">
      <div class="col flex left-content mt-3 ml-6">
        <img src="@/assets/tbimg1.png" class="img" />
        <span class="digit ml-2">48</span>
        <span class="details mt-5">Employee</span>
      </div>
      <div class="col flex center-content mt-3">
        <img src="@/assets/tbimg2.png" class="img" />
        <span class="digit ml-2">32</span>
        <div class="details mt-5">Hourly Wages<br />Contract Employee</div>
      </div>
      <div class="col flex right-content mt-3 ml-8">
        <img src="@/assets/tbimg3.png" class="img" />
        <span class="digit ml-2">102</span>
        <div class="detailstwo mt-5">Piece Rate<br />Contract Employee</div>
      </div>
    </div>
    <div class="mt-3 ml-3">
      <span class="dropdown-data">Plants <span>:</span></span>
      <span class="ml-2">
        <Dropdown
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="All Plants"
      /></span>
      <span class="dropdown-two">Filter <span>:</span></span>
      <span class="ml-2">
        <Dropdown
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="Today"
      /></span>
    </div>

    <div class="col col-10 flex">
      <div class="row row-5 flex ml-2">
        <Card class="mt-2 ml-2">
          <template #header>
            <div class="row flex ml-5 mt-2">
              <h1 class="header">Company Employee</h1>
              <h1 class="header-two">Employee</h1>
              <h1 class="second-option header-third mt-8">View More</h1>
            </div>
            <Divider />
          </template>
          <template #content>
            <Chart type="bar" :options="basicOptions" :data="basicData" />
          </template>
        </Card>
      </div>
      <div class="row row-5 flex ml-2">
        <Card class="mt-2 ml-2">
          <template #header>
            <div class="row flex ml-5 mt-2">
              <h1 class="header">Contract Employees</h1>
              <h1 class="header-two">Hourly Wages</h1>
              <h1 class="second-option contract-header margin mt-8">
                View More
              </h1>
            </div>
            <Divider />
          </template>
          <template #content>
            <Chart type="bar" :options="secondOptions" :data="secondData" />
          </template>
        </Card>
      </div>
      <div class="row row-5 flex ml-2">
        <Card class="mt-2 ml-2">
          <template #header>
            <div class="row flex ml-5 mt-2">
              <h1 class="header">Contract Employees</h1>
              <h1 class="header-two">Per PCS Rate</h1>
              <h1 class="second-option contract-header mt-8">View More</h1>
            </div>
            <Divider />
          </template>
          <template #content>
            <Chart
              type="line"
              :options="multiAxisOptions"
              :data="multiAxisData"
            />
          </template>
        </Card>
      </div>
    </div>
    <div class="ml-2">
      <LineCharts />
    </div>
    <div class="barcharts">
      <BarCharts />
    </div>
    <div class="footer mt-3">
      <Footer />
    </div>
    <div class="barchart">
      <Barchart />
    </div>
    <div class="piecharts">
      <PieCharts />
    </div>
  </div>
</template>

<script>
import Chart from "primevue/chart";
import Card from "primevue/card";
import "primeicons/primeicons.css";
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";
import Footer from "../../components/Footer.vue";
import Barchart from "../../components/Barchart.vue";
import PieCharts from "../../components/PieCharts.vue";
import LineCharts from "../../components/LineCharts.vue";
import BarCharts from "../../components/BarCharts.vue";

export default {
  name: "HeaderComponent",
  components: {
    Chart,
    Card,
    Divider,
    Dropdown,
    Footer,
    Barchart,
    PieCharts,
    LineCharts,
    BarCharts,
  },
  data() {
    return {
      basicData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Worked",
            backgroundColor: "#90BE6D",
            data: [65, 59, 80, 81, 56, 55],
            borderRadius: 10,
          },
          {
            label: "Not Worked",
            backgroundColor: "#F94144",
            data: [28, 48, 40, 19, 86, 27],
            borderRadius: 10,
          },
          {
            label: "Idle",
            backgroundColor: "#F9C74F",
            data: [28, 48, 40, 19, 86, 27],
            borderRadius: 10,
          },
        ],
      },

      basicOptions: {
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#495057",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
          y: {
            ticks: {
              color: "#495057",
              min: -100,
              max: 100,
              stepSize: 5,
              reverse: false,
              beginAtZero: true,
            },
            grid: {
              color: "#ebedef",
            },
          },
        },
      },
      secondData: {
        labels: ["80", "40", "20", "0", "20", "40", "80"],
        datasets: [
          {
            label: "Worked",
            backgroundColor: "#90BE6D",
            data: [65, 59, 80, 81, 56, 55, 70],
          },
          {
            label: "Not Worked",
            backgroundColor: "#F94144",
            data: [28, 48, 40, 19, 86, 27, 50],
          },
          {
            label: "Idle",
            backgroundColor: "#F9C74F",
            data: [28, 48, 40, 19, 86, 27, 30],
          },
        ],
      },

      secondOptions: {
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#495057",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#495057",
              beginAtZero: true,
            },
            grid: {
              color: "#ebedef",
            },
          },
          y: {
            ticks: {
              color: "#495057",
              max: "jun",
              //  beginAtZero: true
            },
            grid: {
              color: "#ebedef",
            },
          },
        },
      },
      multiAxisData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Worked",
            data: [90, 80, 95, 70, 80, 97],
            fill: false,
            backgroundColor: "#F9C74F",
            borderColor: "#F9C74F",
            tension: 0.2,
          },
          {
            label: "Not Worked",
            data: [5, 10, 5, 25, 10, 1],
            fill: false,
            backgroundColor: "#90BE6D",
            borderColor: "#90BE6D",
            tension: 0.2,
          },
          {
            label: "Idle",
            data: [15, 12, 10, 15, 19, 20],
            fill: false,
            backgroundColor: "#F94144",
            borderColor: "#F94144",
            tension: 0.2,
          },
        ],
      },
      multiAxisOptions: {
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#495057",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
          y: {
            ticks: {
              color: "#495057",
              min: -100,
              max: 100,
              stepSize: 40,
            },
            grid: {
              color: "#ebedef",
            },
          },
        },
      },
    };
  },
};
//   data: {
//     names: [ "Worked", "Not Worked", "Idle" ],
//     values: [
//         [ -15, 50, 10, -15, 5 ],
//         [ 20, -50, 30, -20, 20 ],
//         [ 5, -20, 25, -10, 15 ],
//     ]
// }
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";

::v-deep.toolbar {
  background-color: #3b1d00;
  // width: 80.1875rem;
  width: 70.75rem;
  height: 7.3125rem;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
}

.header {
  color: #828282;
  font-size: 16px;
  font-family: "OpenSans-Regular";
  line-height: 19px;
}

.p-card {
  width: 22.5rem;
  height: 23.875rem;
  border-radius: 16px;
  border: 1px solid #c0c0c0;
  // opacity: 60%;
}

.p-chart {
  width: 100%;
  // margin-left: 40px;
}

::v-deep.cdata {
  color: #171721;
  font-size: 14px;
  font-family: Public Sans;
  margin-top: -30px;
}

.cdataone {
  color: #171721;
  font-size: 14px;
  font-family: Public Sans;
  margin-left: -106px;
}

.cdatatwo {
  color: #171721;
  font-size: 14px;
  font-family: Public Sans;
  margin-left: -183px;
}

.cdatathree {
  color: #171721;
  font-size: 14px;
  margin-top: 130px;
  margin-left: -129px;
  font-family: Public Sans;
}

.p-divider-solid.p-divider-horizontal:before {
  margin-top: -5px;
}

.first-icon {
  color: #90be6d;
}

.second-icon {
  color: #f4be5e;
}

.third-icon {
  color: #f94144;
}

.fourth-icon {
  color: #2d9cdb;
}

.img {
  width: 50px;
  height: 50px;
}

.digit {
  font-size: 24px;
  color: #ffffff;
  line-height: 29px;
  font-family: "OpenSans-Regular";
}

.details {
  font-size: 12px;
  line-height: 14px;
  font-family: "OpenSans-Regular";
  color: #ffffff;
  margin-left: -20px;
}

.detailstwo {
  font-size: 12px;
  line-height: 14px;
  font-family: Lato;
  color: #ffffff;
  margin-left: -31px;
}

.center-content {
  margin-left: 4.375rem;
}

.dropdown-data {
  font-family: "OpenSans-Regular";
  font-size: 16px;
  color: #8794a3;
}

.dropdown-two {
  font-family: "OpenSans-Regular";
  font-size: 16px;
  color: #8794a3;
  margin-left: 40.875rem;
}

.p-dropdown {
  width: 173px;
  height: 47px;
  border: 2px solid #f0f0f0;
  border-radius: 12px;
}

.header-two {
  font-size: 40px;
  font-family: "OpenSans-Regular";
  line-height: 47px;
  color: #0b1354;
  margin-left: -150px;
}

.header-third {
  font-size: 16px;
  font-family: "OpenSans-Regular";
  line-height: 19px;
  color: #067dd2;
  margin-left: -182px;
}
.margin {
  margin-left: -257px !important;
}

.barchart {
  margin-left: 24.25rem;
  margin-top: -22.8125rem;
}

.piecharts {
  margin-left: 48.0625rem;
  margin-top: -22.375rem;
}

.barcharts {
  margin-left: 47.5rem;
  margin-top: -25.5rem;
}

.contract-header {
  margin-left: -20px;
  font-size: 16px;
  font-family: "OpenSans-Regular";
  line-height: 19px;
  color: #067dd2;
  margin-left: -242px;
}

::v-deep.p-dropdown .p-dropdown-label.p-placeholder {
  color: #414141;
}
</style>
