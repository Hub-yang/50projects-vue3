import { createRouter, createWebHistory } from "vue-router"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/day02",
    },
    {
      path: "/day01",
      name: "day01",
      meta: {
        title: "Expanding Cards",
      },
      component: () => import("../views/Day01_ExpandingCards/Index.vue"),
    },
    {
      path: "/day02",
      name: "day02",
      meta: {
        title: "Progress Steps",
      },
      component: () => import("../views/Day02_ProgressSteps/Index.vue"),
    },
  ],
})
