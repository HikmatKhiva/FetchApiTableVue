import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Vue Toast
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'
// Vue motion
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ToastPlugin)
app.use(MotionPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
