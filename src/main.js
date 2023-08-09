import "./assets/index.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/routes";


const app = createApp(App)
app.use(router, { base: 'http://localhost:5173/' })
app.mount('#app')
