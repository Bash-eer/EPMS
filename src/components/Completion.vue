<template>
  <div class="page-header ml-2">
    <TabMenu :model="items" />
    <div class="date mt-5">
      <!-- {{ new Date() }} -->
      30 - sep -2022
    </div>
    <div class="flex table mt-5">
      <DataTable :value="products" responsiveLayout="scroll">
        <template class="flex">
          <Column field="Sno" header="S.No"></Column>
          <Column field="Order_No" header="Order No"></Column>
          <Column field="Product" header="Product"></Column>
          <Column field="Operation" header="Operation"></Column>
          <Column field="Quantity" header="Quantity"></Column>
          <Column>
            <template #body>
              <Badge
                ><i class="pi pi-check" style="font-size: 0.5rem"></i
              ></Badge>
            </template>
          </Column>
          <Column
            field="Schedule_Date_Time"
            header="Schedule Date & Time"
          ></Column>
          <Column field="Actual_Start_Time" header="Actual Start Time"></Column>
          <Column
            field="ETD_Completion_Time"
            header="ETDCompletionTime"
          ></Column>
          <Column>
            <template #body>
              <!-- <div class="col col-2 flex">
                <Button type="button" class="p-button-textone">In progress</Button>
                <Button type="button" class="p-button-textwo">Hold</Button>
                </div> -->
              <Button type="button" class="p-button-text">Completed</Button>
            </template>
          </Column>
          <Column field="Actions" header="Actions"></Column>
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script>
import TabMenu from "primevue/tabmenu";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import "primeicons/primeicons.css";
import Badge from "primevue/badge";
// import moment from 'moment';

export default {
  setup() {},
  name: "CompletionComponent",
  components: {
    TabMenu,
    DataTable,
    Column,
    Badge,
  },
  data() {
    return {
      // sales: null,
      items: [
        { label: "Overdue Orders" },
        { label: "Todays Orders" },
        { label: "Upcoming Orders" },
      ],
      // methods: {
      //   dateFormater(date) {
      //     if (date == null) {
      //       return "-";
      //     } else {
      //       var formattedDate = moment(date).format("Do MMM, YYYY");
      //       return formattedDate;
      //     }
      // },
      // },

      products: [
        {
          Sno: "1",
          Order_No: "100025",
          Product: "swivel",
          Operation: "Drilling",
          Quantity: "78",
          Schedule_Date_Time: "30-sep-2022",
          Actual_Start_Time: "30-sep-2022",
          ETD_Completion_Time: "01-oct-2022",
          Actions: ":",
        },
        {
          Sno: "2",
          Order_No: "10002356",
          Product: "Base Plate",
          Operation: "Drilling",
          Quantity: "12",
          Schedule_Date_Time: "30-sep-2022",
          Actual_Start_Time: "30-sep-2022",
          ETD_Completion_Time: "01-oct-2022",
          Actions: ":",
        },
        {
          Sno: "3",
          Order_No: "10002356",
          Product: "Base Plate",
          Operation: "Drilling",
          Quantity: "12",
          Schedule_Date_Time: "30-sep-2022",
          Actual_Start_Time: "30-sep-2022",
          ETD_Completion_Time: "01-oct-2022",
          Actions: ":",
        },
        {
          Sno: "4",
          Order_No: "10002356",
          Product: "Base Plate",
          Operation: "Drilling",
          Quantity: "12",
          Schedule_Date_Time: "30-sep-2022",
          Actual_Start_Time: "30-sep-2022",
          ETD_Completion_Time: "01-oct-2022",
          Actions: ":",
        },
        {
          Sno: "5",
          Order_No: "10002356",
          Product: "Base Plate",
          Operation: "Drilling",
          Quantity: "12",
          Schedule_Date_Time: "30-sep-2022",
          Actual_Start_Time: "30-sep-2022",
          ETD_Completion_Time: "01-oct-2022",
          Actions: ":",
        },
        {
          Sno: "6",
          Order_No: "10002356",
          Product: "Base Plate",
          Operation: "Drilling",
          Quantity: "12",
          Schedule_Date_Time: "30-sep-2022",
          Actual_Start_Time: "30-sep-2022",
          ETD_Completion_Time: "01-oct-2022",
          Actions: ":",
        },
        {
          Sno: "7",
          Order_No: "10002356",
          Product: "Base Plate",
          Operation: "Drilling",
          Quantity: "12",
          Schedule_Date_Time: "30-sep-2022",
          Actual_Start_Time: "30-sep-2022",
          ETD_Completion_Time: "01-oct-2022",
          Actions: ":",
        },
      ],
    };
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

::v-deep.table {
  width: 67.625rem;
  height: 31.25rem;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
}

.date {
  font-size: 18px;
  color: #171721;
}

::v-deep.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
  border-color: #ff8c22;
  color: #0b1354;
}

::v-deep.p-datatable {
  margin-left: 0.438rem;
}

::v-deep.p-datatable .p-datatable-thead > tr > th {
  text-align: center;
  padding: 1rem 1rem;
  border: 2px solid #fbfbfb;
  border-width: 0 0 1px 0;
  border-radius: 10px;
  font-weight: 600;
  color: #536172;
  transition: box-shadow 0.2s;
  font-size: 13px;
}

::v-deep.p-datatable .p-datatable-tbody > tr > td {
  text-align: center;
  border: 2px solid #fbfbfb;
  border-width: 1px 0 1px 0;
  background: #f5f4f4;
  padding: 0.5rem 0.5rem;
  font-size: 13px;
  font-weight: 400;
  border-radius: 3px;
}

::v-deep.p-button-text {
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
  font-size: 0.5rem;
  margin-left: -3.75rem;
  border-radius: 15px;
}
</style>
