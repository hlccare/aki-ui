import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Temp from './components/Temp.vue'
import Temp2 from './components/Temp2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/', component: Temp },
        { path: '/xxx', component: Temp2 }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')

