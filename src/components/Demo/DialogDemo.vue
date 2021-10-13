  
<template>
  <h1>Dialog 对话窗组件</h1>
  <hr />
  <p>根据用户操作展示对应的提示弹窗</p>
  <Demo :component="Dialog1Demo" />
  <hr />
  <Demo :component="Dialog2Demo" />
</template>
  
  <script lang="ts">
import Demo from './Demo.vue'
import Dialog1Demo from '../DialogCom/Dialog1.demo.vue'
import Dialog2Demo from '../DialogCom/Dialog2.demo.vue'
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
    }
  },
}
</script>