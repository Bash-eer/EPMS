<template>
  <div class="col flex col-12">
    <Card class="mt-2 ml-2">
      <template #header>
        <div class="flex">
          <h1 class="header ml-5 mt-4">Overall Job Finished</h1>
        </div>
        <Divider />
      </template>
      <template #content>
        <div class="col flex">
          <Chart type="pie" :options="lightOptions" :data="chartData" />
          <div class="row row-6 flex col-data">
            <h4 class="cdata ml-4">
              <span
                class="pi pi-circle-fill first-icon"
                style="font-size: 0.8rem"
              ></span
              ><span class="ml-2">Utilized Hours</span> <br />
              <span class="data ml-4">29.5%</span>
            </h4>
            <br />
            <h4 class="cdataone mt-4">
              <span
                class="pi pi-circle-fill second-icon"
                style="font-size: 0.8rem"
              ></span
              ><span class="ml-2">Remaining Available hours</span> <br />
              <span class="data ml-4">48.9%</span>
            </h4>
            <h4 class="cdatatwo mt-8">
              <span
                class="pi pi-circle-fill third-icon"
                style="font-size: 0.8rem"
              ></span
              ><span class="ml-2">Breakdown Hours</span> <br />
              <span class="data ml-4">19.5%</span>
            </h4>
            <h4 class="cdatathree">
              <span
                class="pi pi-circle-fill fourth-icon"
                style="font-size: 0.8rem"
              ></span
              ><span class="ml-2">Idle Hours</span> <br />
              <span class="data ml-4">02.1%</span>
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
  name: "FooterComponent",
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
            data: [120, 250, 60, 100],
            backgroundColor: ["#F9C74F", "#66BB6A", "#2D9CDB", "#F94144"],
            hoverBackgroundColor: ["#F9C74F", "#66BB6A", "#2D9CDB", "#F94144"],
          },
        ],
      },
      lightOptions: {
        plugins: {
          anchor: "end",
          align: "top",
          font: {
            weight: "bold",
          },
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
  font-family: "OpenSans-Regular";
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
  width: 50%;
  margin-top: -0.875rem;
  margin-left: -0.625rem;
}

::v-deep.cdata {
  color: #171721;
  font-size: 14px;
  font-family: Public Sans;
  margin-top: -1.875rem;
}

.cdataone {
  color: #171721;
  font-size: 14px;
  font-family: Public Sans;
  margin-left: -6.625rem;
}

.cdatatwo {
  color: #171721;
  font-size: 14px;
  font-family: Public Sans;
  margin-left: -11.438rem;
}

.cdatathree {
  color: #171721;
  font-size: 14px;
  margin-top: 8.125rem;
  margin-left: -8.063rem;
  font-family: Public Sans;
}

.p-divider-solid.p-divider-horizontal:before {
  margin-top: -0.313rem;
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

.data {
  font-size: 14px;
  font-family: "OpenSans-Regular";
  color: #171721;
}

.col-data {
  margin-left: -1.438rem;
  margin-top: 0.313rem;
}
</style>
