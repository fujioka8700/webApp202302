import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/pages/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../components/pages/About.vue"),
    },
  ],
});

export default router;
