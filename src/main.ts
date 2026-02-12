import dayjs from 'dayjs'
import { createApp, vaporInteropPlugin } from 'vue'
import App from './App.vue'

import { router } from './router'
import './styles/init.css'
import './mock'

router.beforeEach((to, _, next) => {
  globalThis.document.title = `${to.meta.title}`
  next()
})

const app = createApp(App)

dayjs.locale('zh-cn')
app.config.globalProperties.dayjs = dayjs
app.use(router).use(vaporInteropPlugin).mount('#app')
