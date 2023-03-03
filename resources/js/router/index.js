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
      beforeEnter: (to, from) => {
        const isAuthenticated = false;

        if (!isAuthenticated && to.name !== "home") {
          return { name: "home" };
        }
      },
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
      props: (route) => ({
        userId: route.params.userId,
        first_name: "John",
        last_name: "Doe",
      }),
      children: [
        {
          path: "profile",
          component: () => import("../components/pages/ProfileView.vue"),
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
