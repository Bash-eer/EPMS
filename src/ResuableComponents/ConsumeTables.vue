<template>
  <DataTable
    :value="tableData"
    editMode="row"
    dataKey="id"
    v-model:editingRows="editingRows"
    @row-edit-save="onRowEditSave"
    responsiveLayout="scroll"
  >
    <Column field="Sno" header="S.No">
      <template #body="{ index }">
        {{ index + 1 }}
      </template>
    </Column>

    <Column field="material_number" header="Material No" style="width: 20%">
    </Column>

    <Column field="material_description" header="Material Description">
    </Column>

    <Column field="quantity" header="Quantity">
      <template #editor="{ data, field }">
        <InputText v-model="data[field]" autofocus />{{ data.materialPrefix }}
      </template>
      <template #body="{ data }">
        {{ data.quantity }} {{ data.materialPrefix }}
      </template>
    </Column>
    <Column
      :rowEditor="true"
      style="width: 10%; min-width: 8rem"
      bodyStyle="text-align:center"
    ></Column>
  </DataTable>
</template>

<script>
import "primeicons/primeicons.css";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
// import SpeedDial from 'primevue/speeddial';
import { mapState, mapActions } from "vuex";
export default {
  props: ["products", "data", "dialogOpen"],
  components: {
    DataTable,
    Column,
    InputText,
    // SpeedDial
  },
  data() {
    return {
      editingRows: [],
      tableData: [],
      rowId: null,
      cardOpen: null,
    };
  },
  watch: {
    //   data: {
    //   immediate: true,
    //   deep: true,
    //   handler(newValue) {
    //     this.tableData=newValue
    //   },
    // },
    consumableTableDatas: function () {
      this.tableData = this.consumableTableDatas;
    },
  },
  created() {
    this.tableData = this.consumableTableDatas;
  },
  computed: {
    ...mapState({
      updateBoolean: (state) => state.order.updateBoolean,
      consumableTableDatas: (state) => state.order.consumableTableDatas,
    }),
  },
  methods: {
    ...mapActions(["deleteConsumableDatas", "getConsumableDatas"]),
    dataId(id, data) {
      this.rowId = id;

      this.$store.state.order.updateData = data;
    },
    onRowEditSave(event) {
      let { newData, index } = event;
      this.consumableTableDatas[index] = newData;
    },
  },
};
</script>
<style scoped>
::v-deep .p-speeddial-button.p-button.p-button-icon-only {
  width: 2rem;
  height: 2rem;
  bottom: 16px !important;
  right: 84px !important;
}
::v-deep .p-speeddial-action {
  width: 2rem;
  height: 2rem;
  background: #495057;
  color: #fff;
  bottom: 15px;
  right: 74px;
}
</style>