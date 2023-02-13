import { createApp } from 'vue'
import App from './App.vue'

//부트스트랩
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//vuex
import store from './store.js'

createApp(App).use(store).mount('#app')