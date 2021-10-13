<template>
  <h1>Tabs 组件</h1>
  <hr />
  <p>使用选项卡，你可以轻松地浏览和切换不同的视图。</p>
  <Demo :component="Tabs1Demo" />
  <Demo :component="Tabs2Demo" />
</template>
  
<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from '../TabsCom/Tabs1.demo.vue'
import Tabs2Demo from '../TabsCom/Tabs2.demo.vue'
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Tabs1Demo,
      Tabs2Demo
    }
  },
}
</script>