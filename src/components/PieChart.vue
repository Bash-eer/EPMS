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
        <Chart
          type="pie"
          :options="lightOptions"
          :data="chartData"
          :plugins="plugins"
        />
      </template>
      <template #footer>
        <div class="col flex">
          <h4 class="footer ml-3 mt-2">
            <span
              class="pi pi-circle-fill first-icon"
              style="font-size: 0.8rem"
            ></span
            ><span class="ml-2 fontFamily-Regular">Utilized Hours</span> <br />
            <span class="data ml-5 fontFamily-Regular">29.5%</span>
          </h4>
          <h4 class="footerd mt-7">
            <span
              class="pi pi-circle-fill second-icon"
              style="font-size: 0.8rem"
            ></span
            ><span class="ml-2 fontFamily-Regular">Idle Hours</span> <br />
            <span class="data ml-5 fontFamily-Regular">48.9%</span>
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
  name: "PieChartComponent",
  components: {
    Chart,
    TabMenu,
    Card,
    Divider,
  },

  data() {
    return {
      items: [{ label: "Day" }, { label: "Week" }, { label: "Month" }],
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
          legend: {
            labels: {
              color: "#495057",
            },
          },
          datalabels: {
            color: "blue",
            labels: {
              title: {
                font: {
                  weight: "bold",
                  size: 48,
                },
              },
              value: {
                color: "green",
                font: {
                  weight: "bold",
                  size: 48,
                },
              },
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
  width: 40%;
  height: 40%;
  margin-left: 8.75rem;
}

::v-deep.footer {
  color: #171721;
  font-size: 14px;
  font-family: Public Sans;
}

.footerd {
  color: #171721;
  font-size: 14px;
  margin-left: -6.688rem;
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

.data {
  font-size: 14px;
  // font-family: Public sans;
  color: #171721;
  font-weight: 900;
  font-family: "OpenSans-Regular";
}
</style>
