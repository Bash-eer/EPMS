import MainPage from '../views/index';
import MainPageWorkk from '../view/index.vue';
// import LoginComponent from "../LoginPage/index.vue";
// import loginAccountComponent from "../LoginPage/AccountCreate.vue";
// import loginForgotComponent from "../LoginPage/ForgotPassword.vue";
// import ResetAccountComponent from "../LoginPage/ResetPassword.vue";
// import DashboardComponentWork from "../view/DashboardWork/index.vue";
// import OnboardingComponentWork from "../view/OnboardingWork/index.vue";
import supervisorBoardComponent from '../components/SupervisorBoard.vue';
// import supervisorOnBoardComponent from "../components/SupervisorOnboard.vue";
import supervisorDepartmentComponent from '../components/DepartmentBoard.vue';
import OrderComponentWork from '../view/OrderWork/index.vue';
import ConsumbaleRequestWork from '../view/ConsumableRequestWork/index.vue';
import maintenanceRequestWorkComponent from '../view/MaintenanceRequestWork/index.vue';
import OnboardingComponent from '../ResuableComponents/OnBoard.vue';
// import OnboardingComponent from "../views/Onboarding/index";
import LandingPageComponent from '../views/LandingPage/index';
import DashboardComponent from '../ResuableComponents/Dashboard.vue';
// import DashboardComponent from "../views/Dashboard/index";
import OrderComponent from '../views/Order/index';
import ConsumableRequestComponent from '../views/ConsumableRequest/index';
import MaintenanceRequestComponent from '../views/MaintenanceRequest/index';
import OnboardsComponent from '../components/Board.vue';
import BoardComponent from '../components/Board.vue';
import BoardingToolComponent from '../components/BoardingTool.vue';
import BoardingViewComponent from '../components/BoardingView.vue';
import CompletionComponent from '../components/Completion.vue';
import ViewComponent from '../components/View.vue';
import OnboardComponent from '../components/Onboard.vue';
import mainDepartmentScreen from '../ResuableComponents/mainDepartmentScreen.vue';
import OrdersOparationComponent from '../components/BoardingTool.vue';

//New login
import LoginPage from '../Login/LoginPage.vue';
// import ForgetPassword from "../Login/ForgetPassword.vue";

export const pageRoutes = [
  {
    path: '/',
    component: LoginPage,
    name: 'LoginPage',
    meta: { routePath: 'login', forVisitors: true },
  },
  {
    path: '/forgot-password',
    component: LoginPage,
    name: LoginPage,
    meta: { routePath: 'forgot' },
  },
  {
    path: '/reset-password',
    component: LoginPage,
    name: LoginPage,
    meta: { routePath: 'reset' },
  },
  {
    path: '/landing',
    component: LandingPageComponent,
    name: 'LandingPage',
    meta: { routePath: 'landing' },
  },
  {
    path: '/workCenter',
    component: MainPageWorkk,
    name: 'MainPageWorkk',
    children: [
      {
        path: '/workCenter/onboarding',
        component: OnboardingComponent,
        name: 'OnboardingComponent',
      },
      {
        path: '/workCenter/dashboard',
        component: DashboardComponent,
        name: 'DashboardComponent',
      },
      {
        path: '/workCenter/orders',
        component: OrderComponent,
        name: 'OrderComponent',
      },
      {
        path: '/OrdersOparation/Component',
        component: OrdersOparationComponent,
        name: 'OrdersOparationComponent',
      },
      {
        path: '/workCenter/consumableRequest',
        component: ConsumableRequestComponent,
        name: 'ConsumableRequestComponent',
      },
      {
        path: '/workCenter/maintenanceRequest',
        component: MaintenanceRequestComponent,
        name: 'MaintenanceRequestComponent',
      },
      {
        path: '/workCenter/OnboardsComponent',
        component: OnboardsComponent,
        name: 'OnboardsComponent',
      },
      {
        path: '/workCenter/BoardComponent',
        component: BoardComponent,
        name: 'BoardComponent',
      },
      {
        path: '/workCenter/OnboardComponent',
        component: OnboardComponent,
        name: 'OnboardComponent',
      },
      {
        path: '/workCenter/OnboardsComponent/BoardingToolComponent',
        component: BoardingToolComponent,
        name: 'BoardingToolComponent',
      },
      {
        path: '/workCenter/BoardingToolComponent/BoardingViewComponent',
        component: BoardingViewComponent,
        name: 'BoardingViewComponent',
      },
      {
        path: '/workCenter/orders/CompletionComponent',
        component: CompletionComponent,
        name: 'CompletionComponent',
      },
      {
        path: '/workCenter/ViewComponent',
        component: ViewComponent,
        name: 'ViewComponent',
      },
    ],
  },
  {
    path: '/supervisor',
    component: MainPage,
    name: 'MainPageComponents',
    children: [
      {
        path: '/supervisor/dashboardWork',
        component: DashboardComponent,
        name: 'DashboardComponentWork',
      },
      {
        path: '/supervisor/onboardingWork',
        component: OnboardingComponent,
        name: 'OnboardingComponentWork',
      },
      {
        path: '/supervisor/OrderWork',
        component: OrderComponentWork,
        name: 'OrderComponentWork',
      },
      {
        path: '/supervisor/consumableRequestWork',
        component: ConsumbaleRequestWork,
        name: 'ConsumbaleRequestWork',
      },
      {
        path: '/supervisor/MaintenanceRequestWork',
        component: maintenanceRequestWorkComponent,
        name: 'maintenanceRequestWorkComponent',
      },
      {
        path: '/supervisor/onboardingWork/supervisorBoardComponent',
        component: supervisorBoardComponent,
        name: 'supervisorBoardComponent',
      },
      {
        path: '/supervisor/onboardingWork/supervisorBoardComponent/supervisorOnboardComponent',
        component: OnboardsComponent,
        name: 'supervisorOnBoardComponent',
      },
      {
        path: '/supervisor/onboardingWork/supervisorBoardComponent/supervisorOnboardComponent/supervisorDepartmentComponent',
        component: supervisorDepartmentComponent,
        name: 'supervisorDepartmentComponent',
      },
      {
        path: '/supervisor/departmentDashboard',
        component: mainDepartmentScreen,
        name: 'departmentDashboard',
      },
    ],
  },
];

export default pageRoutes;
