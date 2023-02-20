import { createRouter, createWebHistory } from "vue-router";
import pageRoutes from "./routes";

const routes = [...pageRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
