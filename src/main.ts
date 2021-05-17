import './lib/aki.scss'
import './index.scss'
import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import 'github-markdown-css'
import mitt,{Emitter} from 'mitt';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $bus: Emitter;
    }
}

const app = createApp(App)
app.use(router)
app.mount('#app')

app.config.globalProperties.$bus = mitt

