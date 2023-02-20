<template>
  <div>
    <Card class="mt-2 ml-2">
      <template #header>
        <div class="col flex">
          <h1 class="header ml-5 mt-3">Pending Job List</h1>
        </div>
        <Divider />
      </template>
      <template #content>
        <Chart type="bar" :options="multiAxisOptions" :data="multiAxisData" />
        <div class="row flex chart-data">
          <h4 class="footer ml-2">
            <span
              class="pi pi-circle-fill first-icon"
              style="font-size: 0.8rem"
            ></span
            ><span class="ml-2">Per Week</span> <br>
            <span class="data ml-3">78 Jobs</span>
          </h4>
          <div>
            <h4 class="footerd">
              <span
                class="pi pi-circle-fill second-icon"
                style="font-size: 0.8rem"
              ></span
              ><span class="ml-2">Per Month</span> <br>
              <span class=" data ml-3">193 Jobs</span>
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
  name: "BarchartComponent",
  components: {
    Chart,
    Card,
    Divider,
  },
  data() {
    return {
      multiAxisData: {
                labels: ['January', 'February'],
                datasets: [ {
                    label: 'Product 1',
                    backgroundColor: ['#2D9CDB','#F3722C'],
                    yAxisID: 'y-axis-2',
                    data: [48, 28,]
                }]
            },
      multiAxisOptions: {
                plugins: {
                    legend: {
                      display: false,
                        labels: {
                            color: '#495057'
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: true
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ffff'
                        }
                    },
                    y: {
                        type: 'linear',
                        display: false,
                        position: 'left',
                        ticks: {
                            
                        },
                        grid: {
                            color: '#ffff'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false,
                            color: '#ebedef'
                        },
                        ticks: {
                            min: 0,
                            max: 300,
                            stepSize: 20,
                            color: '#495057'
                        }
                    }
                }
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
  width: 70%;
  margin-top: 3.125rem;
  margin-left: 5.938rem;
}

::v-deep.footer {
  color: #536172;
  font-size: 14px;
  font-family: Public Sans;
  margin-top: 0.625rem;
}

.footerd {
  color: #536172;
  font-size: 14px;
  margin-left: -4.813rem;
  font-family: Public Sans;
  margin-top: 5rem;
}

.chart-data {
  margin-top: -8.125rem;
}

.p-divider-solid.p-divider-horizontal:before {
  margin-top: -0.813rem;
}

.first-icon {
  color: #2d9cdb;
}

.second-icon {
  color: #f3722c;
}

.data {
  font-size: 18px;
  font-family: Public sans;
  color: #536172;
}
</style>
