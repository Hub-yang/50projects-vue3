import { createApp } from 'vue'
import dayjs from 'dayjs'
import VueLazyload from 'vue-lazyload'
import { router } from './router'
import './styles/init.css'
import App from './App.vue'
import './mock'

// 设置title
router.beforeEach((to, from, next) => {
  document.title = <string>to.meta.title
  next()
})
const app = createApp(App)

app.config.globalProperties.dayjs = dayjs
app.use(router).use(VueLazyload).mount('#app')
