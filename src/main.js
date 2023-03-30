import { createApp } from 'vue'
import App from './App.vue'
import router from './tools/Router'
import store from './tools/Storage'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import '@/mock/Mock'

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
