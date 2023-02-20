<template>
  <div class="col col-8 flex scatter-chart ml-2 mt-3">
    <span class="chart-title">Performance per day</span>
    <div class="icon">
      <span class="pi pi-ellipsis-h ml-8"></span>
    </div>
    <span class="chart-header mt-3">Progress by Hours</span>
    <div class="chart-design mt-6">
      <Chart
        type="line"
        :data="multiAxisSecondData"
        :options="multiAxisSecondOptions"
      />
    </div>
  </div>
</template>

<script>
import Chart from "primevue/chart";
import "primeicons/primeicons.css";

export default {
  name: "LineChartsComponent",
  components: {
    Chart,
  },
  data() {
    return {
      multiAxisSecondData: {
        labels: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
        ],
        datasets: [
          {
            label: "Employee",
            fill: false,
            backgroundColor: "#90BE6D",
            borderColor: "#90BE6D",
            yAxisID: "y",
            tension: 0.2,
            data: [
              85, 75, 65, 55, 65, 75, 85, 95, 105, 95, 85, 75, 65, 55, 65, 75,
              85, 75, 65, 50,
            ],
          },
          {
            label: "Hourly Wages Contract Employee",
            fill: false,
            backgroundColor: "#F9C74F",
            borderColor: "#F9C74F",
            yAxisID: "y1",
            tension: 0.2,
            data: [
              15, 25, 35, 45, 55, 65, 75, 65, 55, 45, 35, 25, 15, 5, 15, 25, 35,
              45, 55, 65,
            ],
          },
          {
            label: "Piece Rate Contract Employee",
            fill: false,
            backgroundColor: "#2D9CDB",
            borderColor: "#2D9CDB",
            yAxisID: "y1",
            tension: 0.2,
            data: [
              65, 60, 55, 50, 55, 60, 65, 60, 55, 50, 45, 40, 35, 30, 35, 40,
              45, 50, 55, 60,
            ],
          },
        ],
      },
      multiAxisSecondOptions: {
        stacked: false,
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
            type: "linear",
            display: false,
            position: "left",
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
          y1: {
            type: "linear",
            display: true,
            position: "right",
            ticks: {
              color: "#495057",
              // min: -100,
              max: 100,
              beginAtZero: true,
              stepSize: 50,
            },
            grid: {
              drawOnChartArea: false,
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

.scatter-chart {
  width: 46.8125rem;
  height: 25.125rem;
  border-radius: 10px;
  border: 1px solid #f5f4f4;
  background-color: #f5f4f4;
}

.p-chart {
  width: 38.625rem;
  margin-left: -16.75rem;
}

.chart-title {
  font-size: 13px;
  color: #536172;
  font-family: "OpenSans-Regular";
  line-height: 14px;
  margin-right: -11px;
}

.chart-header {
  font-size: 25px;
  color: #0b1354;
  font-family: "OpenSans-Regular";
  line-height: 30px;
  font-weight: 600;
  margin-left: -46.0625rem;
}

.chart-design {
  margin-left: 8.938rem;
}

.icon {
  color: #536172;
  margin-left: 32.75rem;
}
</style>
