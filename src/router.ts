import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Intro from './views/Intro.vue'
import Install from './views/Install.vue'
import GetStarted from './views/GetStarted.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'
import Markdown from './components/Markdown.vue'
import { h } from 'vue'


const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        //组件文档-嵌套子路由
        {
            path: '/doc', component: Doc, children: [
                { path: '', component: DocDemo },
                { path: "intro", component: md('intro') },
                { path: "get-started", component: md('get-started') },
                { path: "install", component: md('install') },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo }
            ]
        }
    ]
})

