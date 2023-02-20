<template>
  <div>
    <Card class="mt-2 ml-2">
      <template #header>
        <div class="col flex">
          <h1 class="header ml-3 mt-2">Work Center Utilization (58.8%)</h1>
          <TabMenu :model="items" />
        </div>
        <Divider />
      </template>
      <template #content>
        <Chart type="line" :options="basicOptions" :data="basicData" />
      </template>
      <template #footer>
        <div class="col flex">
          <h4 class="footer ml-3 mt-2">
            <span
              class="pi pi-circle-fill first-icon"
              style="font-size: 0.8rem"
            ></span
            ><span class="ml-2 fontFamily-Regular">Utilized Hours</span> <br />
            <span class="data ml-5 fontFamily-Regular">85.5%</span>
          </h4>
          <h4 class="footerd mt-7">
            <span
              class="pi pi-circle-fill second-icon"
              style="font-size: 0.8rem"
            ></span
            ><span class="ml-2 fontFamily-Regular">Idle Hours</span> <br />
            <span class="data ml-5 fontFamily-Regular">45.9%</span>
          </h4>
          <h4 class="footerda mt-2 mr-5">
            <span
              class="pi pi-circle-fill third-icon"
              style="font-size: 0.8rem"
            ></span
            ><span class="ml-2 fontFamily-Regular"
              >Remaining Available hours</span
            >
            <br />
            <span class="data ml-5 fontFamily-Regular">19.5%</span>
          </h4>
          <h4 class="footerdata">
            <span
              class="pi pi-circle-fill fourth-icon"
              style="font-size: 0.8rem"
            ></span
            ><span class="ml-2 fontFamily-Regular">Breakdown Hours</span> <br />
            <span class="data ml-5 fontFamily-Regular">02.1%</span>
          </h4>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Chart from "primevue/chart";
import TabMenu from "primevue/tabmenu";
import Card from "primevue/card";
import "primeicons/primeicons.css";
import Divider from "primevue/divider";

export default {
  name: "LineChartComponent",
  components: {
    Chart,
    TabMenu,
    Card,
    Divider,
  },
  data() {
    return {
      items: [{ label: "Day" }, { label: "Week" }, { label: "Month" }],
      basicData: {
        labels: ["01", "02", "03", "04", "05", "06", "07"],
        datasets: [
          {
            data: [90, 80, 95, 70, 80, 97],
            fill: false,
            borderColor: "#90BE6D",
            tension: 0.2,
          },
          {
            data: [5, 10, 5, 25, 10, 1],
            fill: false,
            borderColor: "#F94144",
            tension: 0.2,
          },
          {
            data: [0, 0, 0, 0, 0, 0],
            fill: false,
            borderColor: "#2D9CDB",
            tension: 0.2,
          },
        ],
      },
      basicOptions: {
        plugins: {
          legend: {
            position: "false",
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#495057",
              beginAtZero: "2",
            },
            grid: {
              color: "#ebedef",
            },
          },
          y: {
            ticks: {
              color: "#495057",
              beginAtZero: false,
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

.header {
  color: #171721;
  font-size: 16px;
}

::v-deep.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
  border-color: #ff8c22;
  color: #0b1354;
}

::v-deep.p-tabmenu .p-tabmenu-nav {
  margin-top: -0.375rem;
  margin-left: 1.75rem;
}

.p-card {
  width: 32.625rem;
  height: 29.375rem;
  border-radius: 16px;
  border: 1px solid #c0c0c0;
  opacity: 90%;
}

.p-chart {
  width: 80%;
  height: 80%;
  margin-left: 2.938rem;
}

::v-deep.footer {
  color: #171721;
  font-size: 14px;
  font-family: Public Sans;
}

.footerd {
  color: #171721;
  font-size: 14px;
  margin-left: -6.625rem;
  font-family: Public Sans;
}

.footerda {
  color: #171721;
  font-size: 14px;
  margin-left: 10.188rem;
  font-family: Public Sans;
}

.footerdata {
  color: #171721;
  font-size: 14px;
  margin-top: 3.875rem;
  margin-left: -13.375rem;
  font-family: Public Sans;
}

.p-divider-solid.p-divider-horizontal:before {
  border-top-style: solid;
  margin-top: -1.563rem;
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
</style>
