<template>
  <div>
    <Card class="mt-2 ml-2">
      <template #header>
        <div class="col flex">
          <h1 class="header ml-5 mt-3">Departments</h1>
        </div>
        <Divider />
      </template>
      <template #content>
        <div class="col col-6 flex">
          <Chart type="pie" :options="lightOptions" :data="chartData" />
        </div>
        <div class="row row-6 flex chart-data">
          <div class="row flex">
            <h4 class="cdata">
              <span
                class="pi pi-circle-fill first-icon"
                style="font-size: 0.5rem"
              ></span
              ><span class="ml-2">Department 1</span>
            </h4>
            <h4 class="cdataone">
              <span
                class="pi pi-circle-fill second-icon"
                style="font-size: 0.5rem"
              ></span
              ><span class="ml-2">Department 2</span>
            </h4>
            <h4 class="cdatatwo">
              <span
                class="pi pi-circle-fill third-icon"
                style="font-size: 0.5rem"
              ></span
              ><span class="ml-2">Department 3</span>
            </h4>
            <h4 class="cdatathree">
              <span
                class="pi pi-circle-fill fourth-icon"
                style="font-size: 0.5rem"
              ></span
              ><span class="ml-2">Department 4</span>
            </h4>
            <h4 class="cdatafour">
              <span
                class="pi pi-circle-fill fifth-icon"
                style="font-size: 0.5rem"
              ></span
              ><span class="ml-2">Department 5</span>
            </h4>
            <h4 class="cdatafive">
              <span
                class="pi pi-circle-fill sixth-icon"
                style="font-size: 0.5rem"
              ></span
              ><span class="ml-2">Department 6</span>
            </h4>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Chart from "primevue/chart";
import Card from "primevue/card";
import "primeicons/primeicons.css";
import Divider from "primevue/divider";

export default {
  name: "PieChartsComponent",
  components: {
    Chart,
    Card,
    Divider,
  },
  data() {
    return {
      chartData: {
        datasets: [
          {
            data: [140, 70, 70, 60, 60, 90],
            backgroundColor: [
              "#66BB6A",
              "#F9C74F",
              "#2D9CDB",
              "#F3722C",
              "#F8961E",
              "#F94144",
            ],
            hoverBackgroundColor: [
              "#66BB6A",
              "#F9C74F",
              "#2D9CDB",
              "#F3722C",
              "#F8961E",
              "#F94144",
            ],
          },
        ],
      },
      lightOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
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

.header {
  color: #0b1354;
  font-size: 25px;
  font-family: Roboto;
  line-height: 29px;
}

.p-card {
  width: 22.5rem;
  height: 21.875rem;
  border-radius: 16px;
  border: 1px solid #c0c0c0;
  // opacity: 60%;
}

.p-chart {
  width: 100%;
  margin-top: -0.875rem;
  margin-left: 0.25rem;
}

::v-deep.cdata {
  color: #000000;
  font-size: 12px;
  font-family: Inter;
  margin-top: -12.188rem;
  margin-left: 14.375rem;
}

.cdataone {
  color: #000000;
  font-size: 12px;
  font-family: Inter;
  margin-left: -5.375rem;
  margin-top: -10.313rem;
}

.cdatatwo {
  color: #000000;
  font-size: 12px;
  font-family: Inter;
  margin-left: -5.438rem;
  margin-top: -8.438rem;
}

.cdatathree {
  color: #000000;
  font-size: 12px;
  margin-top: 1rem;
  margin-left: -5.438rem;
  margin-top: -6.5rem;
  font-family: Inter;
}

.cdatafour {
  color: #000000;
  font-size: 12px;
  margin-top: -4.563rem;
  margin-left: -5.438rem;
  font-family: Inter;
}

.cdatafive {
  color: #000000;
  font-size: 12px;
  margin-top: -2.625rem;
  margin-left: -5.438rem;
  font-family: Inter;
}

.p-divider-solid.p-divider-horizontal:before {
  margin-top: -0.813rem;
}

.chart-data {
  margin-top: 1.438rem;
  margin-left: -0.313rem;
}

.first-icon {
  color: #f94144;
}

.second-icon {
  color: #f3722c;
}

.third-icon {
  color: #f8961e;
}

.fourth-icon {
  color: #f9c74f;
}

.fifth-icon {
  color: #90be6d;
}

.sixth-icon {
  color: #2d9cdb;
}
</style>
