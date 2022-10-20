import { createRouter, createWebHistory } from "vue-router"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/day16",
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
    {
      path: "/day04",
      name: "day04",
      meta: {
        title: "Hidden Search Widget",
      },
      component: () => import("../views/Day04_HiddenSearchWidget/Index.vue"),
    },
    {
      path: "/day05",
      name: "day05",
      meta: {
        title: "Blurry Loading",
      },
      component: () => import("../views/Day05_BlurryLoading/Index.vue"),
    },
    {
      path: "/day06",
      name: "day06",
      meta: {
        title: "Scroll Animation",
      },
      component: () => import("../views/day06_ScrollAnimation/Index.vue"),
    },
    {
      path: "/day07",
      name: "day07",
      meta: {
        title: "Split Landing Page",
      },
      component: () => import("../views/Day07_SplitLandingPage/Index.vue"),
    },
    {
      path: "/day08",
      name: "day08",
      meta: {
        title: "Form Input Wave",
      },
      component: () => import("../views/Day08_FormInputWave/Index.vue"),
    },
    {
      path: "/day09",
      name: "day09",
      meta: {
        title: "Sound Board",
      },
      component: () => import("../views/Day09_SoundBoard/Index.vue"),
    },
    {
      path: "/day10",
      name: "day10",
      meta: {
        title: "Dad Jokes",
      },
      component: () => import("../views/Day10_DadJokes/Index.vue"),
    },
    {
      path: "/day11",
      name: "day11",
      meta: {
        title: "Event KeyCodes",
      },
      component: () => import("../views/Day11_EventKeyCodes/Index.vue"),
    },
    {
      path: "/day12",
      name: "day12",
      meta: {
        title: "Faq Collapse",
      },
      component: () => import("../views/Day12_FaqCollapse/Index.vue"),
    },
    {
      path: "/day13",
      name: "day13",
      meta: {
        title: "Random Choice Picker",
      },
      component: () => import("../views/Day13_RandomChoicePicker/Index.vue"),
    },
    {
      path: "/day14",
      name: "day14",
      meta: {
        title: "Animated Navigation",
      },
      component: () => import("../views/Day14_AnimatedNavigation/Index.vue"),
    },
    {
      path: "/day15",
      name: "day15",
      meta: {
        title: "Incrementing Counter",
      },
      component: () => import("../views/Day15_IncrementingCounter/Index.vue"),
    },
    {
      path: "/day16",
      name: "day16",
      meta: {
        title: "Drink Water",
      },
      component: () => import("../views/Day16_DrinkWater/Index.vue"),
    },
  ],
})
