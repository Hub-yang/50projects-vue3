import { createRouter, createWebHistory } from "vue-router"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "day01",
      meta: {
        title: "Expanding Cards",
      },
      component: () => import("../views/Day01_ExpandingCards/Index.vue"),
    },
  ],
})
