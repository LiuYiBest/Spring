import { createApp, h } from 'vue'
import App from './App.vue'
import './index.scss'
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'


const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        //访问根路径渲染
        { path: '/', component: Home },
        { path: '/doc', component: Doc }
    ]
})


const app = createApp(App)
app.use(router)
app.mount('#app')

