import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    redirect: '/day01',
  },
  {
    path: '/day01',
    name: 'day01',
    meta: {
      title: 'Expanding Cards',
    },
    component: () => import('~/views/Day01_ExpandingCards/index.vue'),
  },
  {
    path: '/day02',
    name: 'day02',
    meta: {
      title: 'Progress Steps',
    },
    component: () => import('~/views/Day02_ProgressSteps/index.vue'),
  },
  {
    path: '/day03',
    redirect: '/day03/page01',
    name: 'day03',
    meta: {
      title: 'Rotating Navigation Animation',
    },
    component: () => import('~/views/day03_RotatingNavigationAnimation/index.vue'),
    children: [
      {
        path: 'page01',
        name: 'page01',
        component: () => import('~/views/day03_RotatingNavigationAnimation/pages/Page01.vue'),
      },
      {
        path: 'page02',
        name: 'page02',
        component: () => import('~/views/day03_RotatingNavigationAnimation/pages/Page02.vue'),
      },
      {
        path: 'page03',
        name: 'page03',
        component: () => import('~/views/day03_RotatingNavigationAnimation/pages/Page03.vue'),
      },
    ],
  },
  {
    path: '/day04',
    name: 'day04',
    meta: {
      title: 'Hidden Search Widget',
    },
    component: () => import('~/views/Day04_HiddenSearchWidget/index.vue'),
  },
  {
    path: '/day05',
    name: 'day05',
    meta: {
      title: 'Blurry Loading',
    },
    component: () => import('~/views/Day05_BlurryLoading/index.vue'),
  },
  {
    path: '/day06',
    name: 'day06',
    meta: {
      title: 'Scroll Animation',
    },
    component: () => import('~/views/day06_ScrollAnimation/index.vue'),
  },
  {
    path: '/day07',
    name: 'day07',
    meta: {
      title: 'Split Landing Page',
    },
    component: () => import('~/views/Day07_SplitLandingPage/index.vue'),
  },
  {
    path: '/day08',
    name: 'day08',
    meta: {
      title: 'Form Input Wave',
    },
    component: () => import('~/views/Day08_FormInputWave/index.vue'),
  },
  {
    path: '/day09',
    name: 'day09',
    meta: {
      title: 'Sound Board',
    },
    component: () => import('~/views/Day09_SoundBoard/index.vue'),
  },
  {
    path: '/day10',
    name: 'day10',
    meta: {
      title: 'Dad Jokes',
    },
    component: () => import('~/views/Day10_DadJokes/index.vue'),
  },
  {
    path: '/day11',
    name: 'day11',
    meta: {
      title: 'Event KeyCodes',
    },
    component: () => import('~/views/Day11_EventKeyCodes/index.vue'),
  },
  {
    path: '/day12',
    name: 'day12',
    meta: {
      title: 'Faq Collapse',
    },
    component: () => import('~/views/Day12_FaqCollapse/index.vue'),
  },
  {
    path: '/day13',
    name: 'day13',
    meta: {
      title: 'Random Choice Picker',
    },
    component: () => import('~/views/Day13_RandomChoicePicker/index.vue'),
  },
  {
    path: '/day14',
    name: 'day14',
    meta: {
      title: 'Animated Navigation',
    },
    component: () => import('~/views/Day14_AnimatedNavigation/index.vue'),
  },
  {
    path: '/day15',
    name: 'day15',
    meta: {
      title: 'Incrementing Counter',
    },
    component: () => import('~/views/Day15_IncrementingCounter/index.vue'),
  },
  {
    path: '/day16',
    name: 'day16',
    meta: {
      title: 'Drink Water',
    },
    component: () => import('~/views/Day16_DrinkWater/index.vue'),
  },
  {
    path: '/day18',
    name: 'day18',
    meta: {
      title: 'Background Slider',
    },
    component: () => import('~/views/Day18_BackgroundSlider/index.vue'),
  },
  {
    path: '/day19',
    name: 'day19',
    meta: {
      title: 'Theme Clock',
    },
    component: () => import('~/views/Day19_ThemeClock/index.vue'),
  },
  {
    path: '/day20',
    name: 'day20',
    meta: {
      title: 'Button Ripple Effect',
    },
    component: () => import('~/views/Day20_ButtonRippleEffect/index.vue'),
  },
  {
    path: '/day21',
    name: 'day21',
    meta: {
      title: 'Drag N Drop',
    },
    component: () => import('~/views/Day21_DragNDrop/index.vue'),
  },
  {
    path: '/day22',
    name: 'day22',
    meta: {
      title: 'Drawing App',
    },
    component: () => import('~/views/Day22_DrawingApp/index.vue'),
  },
  {
    path: '/day23',
    name: 'day23',
    meta: {
      title: 'Kinetic Loader',
    },
    component: () => import('~/views/Day23_KineticLoader/index.vue'),
  },
  {
    path: '/day24',
    name: 'day24',
    meta: {
      title: 'Content Placeholder',
    },
    component: () => import('~/views/Day24_ContentPlaceholder/index.vue'),
  },
  {
    path: '/day25',
    name: 'day25',
    meta: {
      title: 'Sticky Navigation',
    },
    component: () => import('~/views/Day25_StickyNavigation/index.vue'),
  },
  // Double Vertical Slider
  {
    path: '/day26',
    name: 'day26',
    meta: {
      title: 'Double Vertical Slider',
    },
    component: () => import('~/views/Day26_DoubleVerticalSlider/index.vue'),
  },
  {
    path: '/day27',
    name: 'day27',
    meta: {
      title: 'Toast Notification',
    },
    component: () => import('~/views/Day27_ToastNotification/index.vue'),
  },
  {
    path: '/day28',
    name: 'day28',
    meta: {
      title: 'Github Profiles',
    },
    component: () => import('~/views/Day28_GithubProfiles/index.vue'),
  },
  {
    path: '/day29',
    name: 'day29',
    meta: {
      title: 'Double Click Heart',
    },
    component: () => import('~/views/Day29_DoubleClickHeart/index.vue'),
  },
  {
    path: '/day30',
    name: 'day30',
    meta: {
      title: 'Auto Text Effect',
    },
    component: () => import('~/views/Day30_AutoTextEffect/index.vue'),
  },
  {
    path: '/day31',
    name: 'day31',
    meta: {
      title: 'Password Generator',
    },
    component: () => import('~/views/Day31_PasswordGenerator/index.vue'),
  },
  {
    path: '/day32',
    name: 'day32',
    meta: {
      title: 'Good Cheap Fast',
    },
    component: () => import('~/views/Day32_GoodCheapFast/index.vue'),
  },
  {
    path: '/day33',
    name: 'day33',
    meta: {
      title: 'Notes App',
    },
    component: () => import('~/views/Day33_NotesApp/index.vue'),
  },
  {
    path: '/day34',
    name: 'day34',
    meta: {
      title: 'Animated Countdown',
    },
    component: () => import('~/views/Day34_AnimatedCountdown/index.vue'),
  },
  {
    path: '/day35',
    name: 'day35',
    meta: {
      title: 'Image Carousel',
    },
    component: () => import('~/views/Day35_ImageCarousel/index.vue'),
  },
  {
    path: '/day36',
    name: 'day36',
    meta: {
      title: 'Hover Board',
    },
    component: () => import('~/views/Day36_HoverBoard/index.vue'),
  },
  {
    path: '/day38',
    name: 'day38',
    meta: {
      title: 'Mobile Tab Navigation',
    },
    component: () => import('~/views/Day38_MobileTabNavigation/index.vue'),
  },
  {
    path: '/day40',
    name: 'day40',
    meta: {
      title: '3d Background Boxes',
    },
    component: () => import('~/views/Day40_3dBackgroundBoxes/index.vue'),
  },
  {
    path: '/day41',
    name: 'day41',
    meta: {
      title: 'Verify Account Ui',
    },
    component: () => import('~/views/Day41_VerifyAccountUi/index.vue'),
  },
  {
    path: '/day42',
    name: 'day42',
    meta: {
      title: 'Live User Filter',
    },
    component: () => import('~/views/Day42_LiveUserFilter/index.vue'),
  },
  {
    path: '/day43',
    name: 'day43',
    meta: {
      title: 'Feedback Ui Design',
    },
    component: () => import('~/views/Day43_FeedbackUiDesign/index.vue'),
  },
  {
    path: '/day44',
    name: 'day44',
    meta: {
      title: 'Custom Range Slider',
    },
    component: () => import('~/views/Day44_CustomRangeSlider/index.vue'),
  },
  {
    path: '/day45',
    name: 'day45',
    meta: {
      title: 'Netflix Mobile Navigation',
    },
    component: () =>
      import('~/views/Day45_NetflixMobileNavigation/index.vue'),
  },
  {
    path: '/day46',
    name: 'day46',
    meta: {
      title: 'Quiz App',
    },
    component: () => import('~/views/Day46_QuizApp/index.vue'),
  },
  {
    path: '/day47',
    name: 'day47',
    meta: {
      title: 'Testimonial Box Switcher',
    },
    component: () =>
      import('~/views/Day47_TestimonialBoxSwitcher/index.vue'),
  },
  {
    path: '/day49',
    name: 'day49',
    meta: {
      title: 'ToToList',
    },
    component: () => import('~/views/Day49_ToDoList/index.vue'),
  },
  {
    path: '/day50',
    name: 'day50',
    meta: {
      title: 'Insect Catch Game',
    },
    component: () => import('~/views/Day50_InsectCatchGame/index.vue'),
  },
  {
    path: '/day51',
    name: 'day51',
    meta: {
      title: 'Gluttonous Snake',
    },
    component: () => import('~/views/Day51_GluttonousSnake/index.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
