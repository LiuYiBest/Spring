<template>
  <h1>Tabs 组件</h1>
  <hr />
  <p>使用选项卡，你可以轻松地浏览和切换不同的视图。</p>
  <Demo :component="Tabs1Demo" />
</template>
  
<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './TabsCom/Tabs1.demo.vue'
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Tabs1Demo,
    }
  },
}
</script>