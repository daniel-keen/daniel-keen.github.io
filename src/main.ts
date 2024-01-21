import './assets/main.css'
import '@picocss/pico'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { createPinia } from 'pinia'

library.add(fas, fab)

const pinia = createPinia()

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)

app.mount('#app')
