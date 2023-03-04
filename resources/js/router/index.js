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
      path: "/user/:userId",
      name: "user",
      props: (route) => ({
        userId: route.params.userId,
        first_name: "John",
        last_name: "Doe",
      }),
      component: () => import("../components/pages/User.vue"),
      children: [
        {
          path: "profile",
          component: () => import("../components/pages/Profile.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)",
      name: "NotFound",
      component: () => import("../components/pages/NotFound.vue"),
    },
  ],
});

export default router;
