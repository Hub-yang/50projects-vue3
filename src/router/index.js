import { createRouter, createWebHistory } from "vue-router"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/day03",
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
    {
      path: "/day03",
      redirect: "/day03/page01",
      name: "day03",
      meta: {
        title: "Rotating Navigation Animation",
      },
      component: () =>
        import("../views/day03_RotatingNavigationAnimation/Index.vue"),
      children: [
        {
          path: "page01",
          name: "page01",
          component: () =>
            import(
              "../views/day03_RotatingNavigationAnimation/pages/Page01.vue"
            ),
        },
        {
          path: "page02",
          name: "page02",
          component: () =>
            import(
              "../views/day03_RotatingNavigationAnimation/pages/Page02.vue"
            ),
        },
        {
          path: "page03",
          name: "page03",
          component: () =>
            import(
              "../views/day03_RotatingNavigationAnimation/pages/Page03.vue"
            ),
        },
      ],
    },
  ],
})
