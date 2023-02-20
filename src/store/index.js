import { createStore } from 'vuex';
import employee from './module/employee';
import login from './module/login';
import employeeOnboarding from './module/employeeOnboarding';
import departmentOnboarding from './module/departmentOnboarding';
import workCenter from './module/workCenter';
import department from './module/department/department';
import order from './module/Order';

export default createStore({
  strict: true, // strictly no mutations outside the store
  modules: {
    employee,
    login,
    order,
    employeeOnboarding,
    departmentOnboarding,
    workCenter,
    department,
  },
});
