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
      meta: { requiresAuth: true },
      component: () => import("../components/pages/About.vue"),
    },
    {
      path: "/home",
      redirect: { name: "home" },
    },
    {
      path: "/users",
      alias: "/useres",
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

router.beforeEach((to, from) => {
  const isAuthenticated = false;

  if (to.meta.requiresAuth && !isAuthenticated && to.name !== "home") {
    return { name: "home" };
  }
});

export default router;
