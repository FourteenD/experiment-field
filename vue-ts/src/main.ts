import "normalize.css";

import { createApp } from 'vue'
import router from './router'
import App from './App.jsx'

const app = createApp(App)
app.use(router)
app.mount('#app')
