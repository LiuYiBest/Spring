import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        //组件文档-嵌套子路由
        {
            path: '/doc', component: Doc, children: [{
                path: 'switch', component: SwitchDemo
            }]
        }
    ]
})

