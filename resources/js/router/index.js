import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/modules/Hello.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../components/pages/AboutView.vue"),
    },
  ],
});

export default router;
