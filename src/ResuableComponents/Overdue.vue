<template>
  <div class="flex tabledata mt-5">
    <DataTable
      :value="value"
      @rowSelect="onRowSelect"
      @rowUnselect="onRowUnselect"
      class="p-datatable-lg"
      responsiveLayout="scroll"
      :v-model:selection="rowSelect"
      selectionMode="single"
      :dataKey="dataKey"
      :resizableColumns="true" columnResizeMode="fit"
    >
      <template class="flex">
        <Column field="Sno" header="S.No">
          <template #body="{ index }">
            {{ index + 1 }}
          </template>
        </Column>
        <Column field="OrderNumber" header="Order No"></Column>
        <Column field="MaterialText" header="Product"></Column>
        <Column field="Operation" header="Operation"></Column>
        <Column field="Quantity" header="Quantity">
          <template #body>
            
            <Badge class="ml-3"><i class="pi pi-check" style="font-size: 0.5rem"></i></Badge>
            <br /> </template>
        </Column>
        <Column field="Schedule_Date_Time" header="Schedule Date & Time">
          <template #body="{ data }">
            {{ dateFormater(data.startDate) }}
          </template>
        </Column>
        <Column field="Actual_Start_Time" header="Actual Start Time">
          <template #body="{ data }">
            {{ dateFormater(data.endDate) }}
          </template></Column
        >
        <Column field="ETD_Completion_Time" header="ETD CompletionTime"
          ><template #body="{ data }">
            {{ dateFormater(data.startDate) }}
          </template></Column
        >
        <Column  field="" header=" " >
          <template #body="{ data, index }">
            <div
              class="col col-2 flex"
              v-if="showButton || data.status == 'Start'  "
            >
              <button
                type="button"
                class="p-button-textone cursor-pointer"
                @click="openBasic(data.OrderNumber)"
              >
                Hold
              </button>
              <button
                type="button"
                class="p-button-textwo cursor-pointer"
                @click="inProgress(data.OrderNumber)"
              >
                In Progress
              </button>
            </div>
            <div v-if="!showButton">
              <div @click="submitStart(index)" v-if="data.status == 'In progress' || data.status == 'Hold' || data.status == undefined">
                <Button
                  type="button"
                  class="p-button-text cursor-pointer"
                  label="start"
                  @click="showButton = !showButton"
                />
              </div>
            </div>
            <Dialog
              header="Actions Required"
              v-model:visible="displayBasic"
              :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
              :style="{ width: '30vw' }"
            >
              <p>Please close or Pause open order</p>
              <template #footer>
                <Button
                  label="Cancel"
                  @click="closeBasic()"
                  class="cancel-btn"
                />
                <ButtonComponent
                  label="Save"
                  type="primary"
                  @click="setOptionActive()"
                  autofocus
                />
              </template>
            </Dialog>
            <!-- <Button type="button" class="p-text-buttonthree">Completed</Button> -->
          </template>
        </Column>
        <Column field="Actions" header="Actions">
          <template #body>
            <div @click="setOption()">:</div>
            <div :class="showDropdown ? 'newDropdown' : 'hideDropdown'">
              <div class="color-black">
                Lead Time<span>:</span>
                <div class="color-data mt-2">03 : 30 : 00</div>
              </div>
              <div class="color-black mt-4">
                scheduled Completion Time <span>:</span>
                <div class="color-data mt-2">01 oct, 01 : 29 : 19</div>
              </div>
            </div>
          </template>
        </Column>
      </template>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import "primeicons/primeicons.css";
import Badge from "primevue/badge";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import moment from "moment";
import { mapActions } from "vuex";
export default {
  props: ["value", "dataKey"],
  setup() {},
  name: "OrderComponent",
  components: {
    DataTable,
    Column,
    Badge,
    Dialog,
    Button,
  },
  data() {
    return {
      displayBasic: false,
      showButton: false,
      showDropdown: false,
      rowSelect: null,
    };
  },
  methods: {
    ...mapActions(["submitOnOrder", "updateInprogress","getAllOverDueData","getAllTodaysData","getAllupcomingData"]),
    openBasic(id) {
      this.showButton = false;
      this.displayBasic = true;
      let status = {
        id: id,
        status: "Hold",
      };
      this.updateInprogress(status)
       this.getAllOverDueData(localStorage.getItem("workId"));
      this.getAllTodaysData(localStorage.getItem("workId"));
    this.getAllupcomingData(localStorage.getItem("workId"));
    },
    closeBasic() {
      this.displayBasic = false;
    },
    inProgress(id) {
      this.showButton = false;
      let status = {
        id: id,
        status: "In progress",
      };
      this.updateInprogress(status);
       this.getAllOverDueData(localStorage.getItem("workId"));
     this.getAllTodaysData(localStorage.getItem("workId"));
     this.getAllupcomingData(localStorage.getItem("workId"));
    },
    setOptionActive() {
      this.$router.push("/workCenter/BoardComponent");
      this.$router.push("/workCenter/OnboardsComponent/BoardingToolComponent");
    },
    async submitStart(index) {
      await this.submitOnOrder(this.value[index]);
      await this.getAllOverDueData(localStorage.getItem("workId"));
    await this.getAllTodaysData(localStorage.getItem("workId"));
    await this.getAllupcomingData(localStorage.getItem("workId"));
    },
    onRowSelect(event) {
      console.log(event,"valuevalue")
      localStorage.setItem("OrderId", event.data.OrderNumber);
if(event.data.status == "Start"){
  this.$router.push("/OrdersOparation/Component");
}
     
    },
    setOption() {
      this.showDropdown = !this.showDropdown;
    },
    dateFormater(data) {
      var formattedDate = moment(data).format("Do MMM YYYY");
      return formattedDate;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";

::v-deep.table {
  width: 66.25rem;
  height: 12.875rem;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
}

::v-deep.tabledata {
  width: 66.25rem;
  height: 12.875rem;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
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
  font-size: 10px;
  background-color: #fddac6;
  border-radius: 3px;
  border: 1px solid #c0c0c0;
}

::v-deep.p-button-textwo {
  color: green;
  line-height: 15px;
  font-size: 10px;
  background-color: #ffdb5d;
  border-radius: 3px;
  border: 1px solid #c0c0c0;
  margin-left: 10px;
}
::v-deep .p-datatable-resizable > .p-datatable-wrapper {
    overflow-x: auto;
    width: 96%;
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
