import { postApi } from '@/services/commonService';
import { API } from '@/services/apiConstant';

export default {
  state: {
    createEmployee: [],
  },
  mutations: {
    resetState(state) {
      state.createEmployee = [];
    },
  },
  actions: {
    createNewEmployee(_, payload) {
      return new Promise((resolve, reject) => {
        return postApi(API.EMPLOYEE.CREATE, payload)
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
