import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/pages/HomeView.vue"),
    },
    {
      path: "/users/:userId",
      name: "user",
      props: true,
      component: () => import("../components/pages/UsersView.vue"),
    },
  ],
});

export default router;
