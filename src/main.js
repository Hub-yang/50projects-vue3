import { createApp } from "vue"
import { router } from "./router"
import "./styles/init.css"
import App from "./App.vue"
import "./mock"

// 设置title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

createApp(App).use(router).mount("#app")
