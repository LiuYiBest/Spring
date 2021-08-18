import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'
import DocDemo from './components/DocDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        //组件文档-嵌套子路由
        {
            path: '/doc', component: Doc, children: [
                { path: '', component: DocDemo },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: Button },
                { path: 'dialog', component: Dialog },
                { path: 'tabs', component: Tabs }
            ]
        }
    ]
})

