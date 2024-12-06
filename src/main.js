import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './index.css'
import { store } from './stores/store'


const app = createApp(App)
app.use(store).use(router).mount('#app')
