  
<demo>
  基本使用
    </demo>
    <template>
  <Tabs v-model:selected="selected">
    <Tab title="Vue"
      >Vue (读音 /vjuː/，类似于 view)
      是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue
      被设计为可以自底向上逐层应用。Vue
      的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue
      也完全能够为复杂的单页应用提供驱动。</Tab
    >
    <Tab title="React">React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库。使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作“组件”。</Tab>
    <Tab title="Typescript">TypeScript可以编译出纯净、 简洁的JavaScript代码，并且可以运行在任何浏览器上、Node.js环境中和任何支持ECMAScript 3（或更高版本）的JavaScript引擎中。</Tab>
    <Tab title="很长很长的Tab导航栏">很长很长的Tab导航栏</Tab>
  </Tabs>
</template>
    
    <script lang="ts">
import Tabs from '../../lib/Tabs.vue'
import Tab from '../../lib/Tab.vue'
import { ref } from 'vue'
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const selected = ref('React')
    return {
      selected,
    }
  },
}
</script>