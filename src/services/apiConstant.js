export const API = {
  // EMPLOYEE  MODULE API CONSTANTS
  EMPLOYEE: {
    CREATE: 'employees',
  },
  ONBOARD: {
    SUBMIT: 'employee-work',
    GETEMPLOYEE: 'employee-work/today/',
    START: 'employee-work/update-status',
    SUBMITSTART: 'order-activity',
  },
  BREAKDOWN: {
    GETDATAS: 'breakdown',
    BREAKSTART: 'breakdown/',
  },
  
CONSUMABLES:{
GETDATAS:'consumable'
},
  ORDER: {
    OVERDUE: 'productionorderset',
    STARTSUBMIT: 'productionorderset',
    INPROGRESS: 'productionorderset/status',
    ACTIVITY: 'order-activity',
  },
  DEPARTMENT: {
    CREATE: 'department',
    DEPARTMENTHEAD_CREATE: 'department/department-head',
    DEPARTMENT_DELETE:'department/department-head/remove',
    WORKCENTER: 'department/work-center',
    EMPLOYEETYPE: 'employees/department',
    SUPRVISOR_DELETE:'employees'
  },
  WORKCENTER: {
    GETALL: 'work-center',
  },
};
