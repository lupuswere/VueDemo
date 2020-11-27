import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/stylesheets/base.css'

createApp(App).use(router).mount('#app')
