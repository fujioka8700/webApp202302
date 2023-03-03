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
    {
      path: "/users",
      name: "users",
      component: () => import("../components/pages/Users.vue"),
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import("../components/pages/User.vue"),
    },
  ],
});

export default router;
