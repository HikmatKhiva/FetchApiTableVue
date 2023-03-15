import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { createVfm } from 'vue-final-modal'
import Vue3Toasity from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import 'vue-final-modal/style.css'

const vfm = createVfm()
createApp(App)
    .use(Vue3Toasity, {
        autoClose: 3000,
    })
    .use(vfm)
    .use(createPinia())
    .mount('#app')
