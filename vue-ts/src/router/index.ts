import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home"),
  },
  {
    path: "/todoList",
    name: "TdoList",
    component: () => import("@/views/todoList"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
