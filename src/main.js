import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import './index.css'


createApp(App).use(router, VueMeta).mount('#app')
Vue.config.ignoredElements = [/^ion-/]

