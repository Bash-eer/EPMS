<template>
  <div class="row row-5 flex ml-2">
    <Card class="mt-2 ml-2">
      <template #header>
        <div class="row flex mt-2">
          <h1 class="header-two">Employees Leave Data</h1>
          <h1 class="second-option header-third mt-6">View More</h1>
        </div>
        <Divider />
      </template>
      <template #content>
        <Chart
          type="bar"
          :options="basicSecondOptions"
          :data="basicSecondData"
        />
      </template>
    </Card>
  </div>
</template>

<script>
import Chart from "primevue/chart";
import Card from "primevue/card";
import Divider from "primevue/divider";

export default {
  name: "BarChartsComponent",
  components: {
    Chart,
    Card,
    Divider,
  },
  data() {
    return {
      basicSecondData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Product 1",
            backgroundColor: "#F94144",
            data: [35, 50, 80, 50, 20, 30],
            borderRadius: 10,
          },
        ],
      },

      basicSecondOptions: {
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
              //  min: -100,
              max: 120,
              stepSize: 20,
              reverse: false,
              beginAtZero: true,
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
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";

.p-card {
  width: 22.5rem;
  height: 23.875rem;
  border-radius: 16px;
  border: 1px solid #c0c0c0;
  // opacity: 60%;
}

.p-chart {
  width: 20.1875rem;
  margin-left: -0.625rem;
}

.header-third {
  font-size: 16px;
  font-family: "OpenSans-Regular";
  line-height: 19px;
  color: #067dd2;
  margin-left: -16.188rem;
}

.header-two {
  font-size: 25px;
  font-family: "OpenSans-Regular";
  line-height: 47px;
  color: #0b1354;
  margin-left: 1.875rem;
  margin-top: -0.313rem;
}
</style>
