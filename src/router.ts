import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Intro from './views/Intro.vue'
import Install from './views/Install.vue'
import GetStarted from './views/GetStarted.vue'
import SwitchDemo from './components/Demo/SwitchDemo.vue'
import ButtonDemo from './components/Demo/ButtonDemo.vue'
import DialogDemo from './components/Demo/DialogDemo.vue'
import TabsDemo from './components/Demo/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'
import Markdown from './components/Markdown.vue'
import { h } from 'vue'
// @ts-ignore
import intro from './markdown/intro.md'
// @ts-ignore
import getStarted from './markdown/get-started.md'
// @ts-ignore
import install from './markdown/install.md'
import InputDemo from './components/Demo/InputDemo.vue'
import TagDemo from './components/Demo/TagDemo.vue'

const md = string => h(Markdown, { content: string, key: string })

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        //组件文档-嵌套路由
        {
            path: '/doc', component: Doc, children: [
                { path: '', redirect: '/doc/intro' },
                { path: "intro", component: md(intro) },
                { path: "install", component: md(install) },
                { path: "get-started", component: md(getStarted) },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
                { path: 'input', component: InputDemo },
                { path: 'tag', component: TagDemo },
            ]
        }
    ]
})

