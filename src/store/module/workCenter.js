import { getApi, putApi } from '@/services/commonService';
import { postApi } from '@/services/commonService';
import { API } from '@/services/apiConstant';
// import { defineComponent } from "vue";
// import { useStopwatch } from 'vue-timer-hook';

export default {
  state: {
    workcenterData: null,
    filterWorkcenter: null,
    selectedWorkCenterData: null,
    workCenterId: null,
    filteredData: null,
    employeeDatas: null,
  },
  mutations: {
    resetState(state) {
      (state.workcenterData = null),
        (state.filterWorkcenter = null),
        (state.selectedWorkCenterData = null);
    },
    setFilteredData(state, value) {
      state.filteredData = value;
    },
    getEmployeName(state, value) {
      // const autoStart = false;
      // const stopwatch = useStopwatch(autoStart);
      // const workCenterTimer = useStopwatch(autoStart);
      const data =
        value && value.length
          ? value.map((ele) => {
              return {
                ...ele,
                startTimer: false,
                endTimer: false,
              };
            })
          : [];

      state.employeeDatas = data;
    },
    setSelectingWorkCenter(state, value) {
      state.workCenterId = value[0].MainWorkCenter;
      state.selectedWorkCenterData = value;
    },
    setAllWorkcenter(state, value) {
      state.workcenterData = value;
    },
    setFilterWorkCenter(state, value) {
      state.filterWorkcenter = value;
    },
  },
  actions: {
    submitOnboard(_, payload) {
      return new Promise((resolve, reject) => {
        return postApi(API.ONBOARD.SUBMIT, payload)
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    async getAllWorkCenter({ commit }) {
      try {
        const result = await getApi(API.WORKCENTER.GETALL);
        const data = result.data;
        commit('setAllWorkcenter', data);
      } catch (err) {
        console.log('err:', err);
      }
    },

    async workCenterFilter({ commit }, workcenter) {
      try {
        const result = await getApi(
          API.WORKCENTER.GETALL + `?workCenterId=${workcenter}`
        );
        const finalData = result.data;
        commit('setFilterWorkCenter', finalData);
      } catch (err) {
        console.log(err);
      }
    },
    async getParticularWorkcenter({ commit }, workCenter) {
      try {
        // const result = await workCenter
        const result = await getApi(
          API.EMPLOYEE.CREATE + `?workCenter=${workCenter}`
        );
        commit('setFilteredData', result.data);
      } catch (err) {
        console.log('ERROR:', err);
      }
    },
    async getEmployeeData({ commit }, ID) {
      try {
        // const result = await workCenter
        const result = await getApi(API.ONBOARD.GETEMPLOYEE + ID);
        commit('getEmployeName', result.data);
      } catch (err) {
        console.log('ERROR:', err);
      }
    },
    async updateEmployeeStart(_, payload) {
      try {
        const res = await putApi(API.ONBOARD.START, payload);
        console.log(res);
      } catch (err) {
        console.log('err', err);
      }
    },
  },
};
