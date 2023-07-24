import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js"
import store from './store/store' 
import './leafletFix.js';

createApp(App)
.use(router)
.use(store)
.mount('#app')