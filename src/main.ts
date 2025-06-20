import dayjs from 'dayjs'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './styles/init.css'

import './mock'

// 设置title
router.beforeEach((to, _from, next) => {
  document.title = to.meta.title as string
  next()
})
const app = createApp(App)

app.config.globalProperties.dayjs = dayjs
app.use(router).mount('#app')
