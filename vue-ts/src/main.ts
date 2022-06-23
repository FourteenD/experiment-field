import { createApp } from 'vue'
import router from './router'
import App from './App.jsx'
import "@/common/styl/base.styl"


const app = createApp(App)
app.use(router)
app.mount('#app')
