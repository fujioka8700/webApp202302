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
      path: "/about",
      name: "about",
      component: () => import("../components/pages/AboutView.vue"),
    },
    {
      path: "/users",
      name: "users",
      component: () => import("../components/pages/UsersView.vue"),
    },
    {
      path: "/users/:userId",
      name: "user",
      component: () => import("../components/pages/UserView.vue"),
      props: true,
    },
  ],
});

export default router;
