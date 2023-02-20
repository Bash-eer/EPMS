<template>
  <div>
    <div
      class="
        landing-page-title
        fontFamily-Regular
        flex
        justify-content-center
        mt-2
      "
    >
      Manufacturing Execution System
    </div>
    <div class="flex justify-content-center mt-4 cursor-pointer">
      <div class="flex justify-content-center landing-page-options">
        <div
          @click="tabSwitch('isSupervisor')"
          class="pb-3"
          :class="isSupervisor ? 'landing-page-option-active' : ''"
        >
          Supervisor
        </div>
        <div
          @click="tabSwitch('isWorkCenter')"
          class="ml-4 pb-3"
          :class="isWorkCenter ? 'landing-page-option-active' : ''"
        >
          Work Center
        </div>
      </div>
    </div>
    <div class="flex mt-4 justify-content-center">
      <img src="@/assets/landing-image.svg" />
      <div class="user-details">
        <div class="flex justify-content-end mr-5 mt-5">
          <div class="change-options" @click="toggle">Change</div>
        </div>
        <OverlayPanel
          ref="op"
          :showCloseIcon="true"
          id="overlay_panel"
          style="width: 300px"
          :breakpoints="{ '960px': '75vw' }"
        >
          <div v-if="isWorkCenter" class="overlay">
            <InputText
              type="text"
              v-model="searchvalue"
              @input="triggerSearch($event)"
              placeholder="Search workcenter..."
            />
            <div v-for="(a, index) in getAllData" :key="index">
              <div class="list" @click="onProductSelect(a)">
                <span v-if="a.MainWorkCenter">
                  WorkCenter : {{ a.MainWorkCenter }}</span
                >
                <span v-else> EquipmentNumber : {{ a.EquipmentNumber }}</span>
              </div>
            </div>
          </div>
        </OverlayPanel>
        <div class="flex justify-content-center" v-if="!isSupervisor">
          <div class="col-10">
            <div class="col-12 flex">
              <div class="col-5 label-content">Work center</div>
              <div class="col-1 label-content">:</div>
              <div class="col-6 label-content" v-if="filterNewData">
                <span
                  >{{ filterNewData[0].MainWorkCenter }}
                  <span
                    class="sub-data"
                    v-if="filterNewData[0].MainWorkCenterText"
                    >({{ filterNewData[0].MainWorkCenterText }})</span
                  ></span
                >
              </div>
            </div>
            <div class="col-12 flex">
              <div class="col-5 label-content">Machine Serial</div>
              <div class="col-1 label-content">:</div>
              <div class="col-6 label-content" v-if="filterNewData">
                {{ filterNewData[0].SerialNumber }}
              </div>
            </div>
            <div class="col-12 flex">
              <div class="col-5 label-content">Equipment Number</div>
              <div class="col-1 label-content">:</div>
              <div class="col-6 label-content" v-if="filterNewData">
                {{ filterNewData[0].EquipmentNumber }}
              </div>
            </div>
            <div class="col-12 flex">
              <div class="col-5 label-content">Cost center</div>
              <div class="col-1 label-content">:</div>
              <div v-if="filterNewData" class="col-6 label-content">
                {{ filterNewData[0].CostCenter }}
                <span v-if="filterNewData[0].CostCenterText">
                  ({{ filterNewData[0].CostCenterText }})</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-content-center" v-else>
          <div class="col-9">
            <div class="col-12 flex">
              <div class="col-5 label-content">Department</div>
              <div class="col-1 label-content">:</div>
              <div class="col-6 label-content">
                <span
                  >DHNLK3456<span class="sub-data"> (Assembly Shop)</span></span
                >
                <!-- <div class="sub-data">(Assembly Shop)</div> -->
              </div>
            </div>
            <div class="col-12 flex">
              <div class="col-5 label-content">Cost center</div>
              <div class="col-1 label-content">:</div>
              <div class="col-5 label-content">129846</div>
            </div>
          </div>
        </div>
        <div class="flex justify-content-center mt-4">
          <ButtonComponent
            v-if="isSupervisor"
            label="Proceed to Work"
            type="primary"
            @click="goToMainPageWorkk"
          />
          <ButtonComponent
            v-if="isWorkCenter"
            label="Proceed to Work"
            type="primary"
            @click="goToMainPage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OverlayPanel from "primevue/overlaypanel";
import { mapActions, mapState, mapMutations } from "vuex";
import InputText from "primevue/inputtext";
export default {
  setup() {},
  name: "HeaderComponent",
  components: {
    OverlayPanel,
    InputText,
  },
  data() {
    return {
      isSupervisor: true,
      isWorkCenter: false,
      filterWork: null,
      getAllData: null,
      searchvalue: "",
      filterNewData: null,
    };
  },
  computed: {
    ...mapState({
      workCenterData: (state) => state.workCenter.workcenterData,
      filterWorkcenter: (state) => state.workCenter.filterWorkcenter,
    }),
  },
  async mounted() {
    await this.getAllWorkCenter();
  },
  watch: {
    "$store.state.workCenter.filterWorkcenter": function () {
      this.filterWork = { ...this.filterWorkcenter };
    },
    "$store.state.workCenter.workcenterData": function () {
      this.getAllData = [...this.workCenterData];
    },
  },
  methods: {
    ...mapMutations(["setAllWorkcenter", "setSelectingWorkCenter"]),
    ...mapActions(["getAllWorkCenter", "workCenterFilter"]),

    goToMainPage() {
      this.$router.push({
        name: "BoardComponent",
        params: { name: "workCenter" },
      });
      localStorage.setItem("workId", this.filterNewData[0].MainWorkCenter);
    },

    goToMainPageWorkk() {
      this.$router.push("/supervisor/onboardingWork");
    },

    tabSwitch(tab) {
      if (tab == "isWorkCenter") {
        this.isWorkCenter = true;
        this.isSupervisor = false;
      } else if (tab == "isSupervisor") {
        this.isSupervisor = true;
        this.isWorkCenter = false;
      }
    },

    toggle(event) {
      this.$refs.op.toggle(event);
    },

    onProductSelect: async function (a) {
      this.$refs.op.hide();

      this.filterNewData = this.getAllData.filter(
        (item) => item.EquipmentNumber === a.EquipmentNumber
      );
      await this.setSelectingWorkCenter(this.filterNewData);
      this.clearSearchData();
      // await this.workCenterFilter(a.MainWorkCenter).then(()=>this.clearSearchData());
    },

    triggerSearch() {
      // const data ={
      //   searchValue : event.data
      // }
      this.commonSearchData(this.searchvalue);
    },

    commonSearchData(searchValue) {
      if (searchValue) {
        const globalSearchKey = searchValue;

        let searchOnArray = this.getAllData.filter((item) =>
          item.MainWorkCenter.toLowerCase().includes(
            globalSearchKey.toLowerCase()
          )
        );
        this.getAllData = searchOnArray;
      } else {
        return (this.getAllData = [...this.workCenterData]);
      }
    },
    clearSearchData() {
      this.searchvalue = "";
      this.getAllData = [...this.workCenterData];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";
.landing-page-title {
  font-weight: 600;
  font-size: 30px;
  color: #1a1a18;
}
.overlay {
  max-height: 15rem;
  overflow-y: scroll;
}
.landing-page-options {
  color: #bec5cb;
  font-size: 14px;
  font-weight: 600;
  font-family: "OpenSans-Regular" !important;
  border-bottom: 1px solid #b5bdc4;
  width: max-content;
}
.landing-page-option-active {
  color: #0b1354;
  border-bottom: 4px solid #ff8c22;
}
.user-details {
  width: 645px;
  height: 467px;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  font-family: OpenSans-Light !important;
  color: #0b1354;
  font-weight: 600;
}
.sub-data {
  font-size: 12.9032px;
  color: #536172;
  font-weight: 600;
}
.change-options {
  color: $color-orange !important;
  cursor: pointer;
  // border-bottom: 3px solid $color-orange;
  // width: max-content;
}
.list {
  cursor: pointer;
  margin-top: 10px;
}

.label-content {
  font-size: 16px;
  font-family: "OpenSans-Regular";
  line-height: 19px;
  font-weight: 600;
  color: #0b1354;
}
</style>
