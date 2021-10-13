<template>
  <div>
    <h1>Button 按钮组件</h1>
    <hr />
    <p>Button 组件可以响应用户的点击操作。</p>
    <Demo :component="Button1Demo" />
    <hr />
    <Demo :component="Button2Demo" />
    <hr />
    <Demo :component="Button3Demo" />
    <hr />
    <Demo :component="Button4Demo" />
    <hr />
    <Demo :component="Button5Demo" />
  </div>
</template>
  
  <script lang="ts">
import Demo from './Demo.vue'
import Button1Demo from '../ButtonCom/Button1.demo.vue'
import Button2Demo from '../ButtonCom/Button2.demo.vue'
import Button3Demo from '../ButtonCom/Button3.demo.vue'
import Button4Demo from '../ButtonCom/Button4.demo.vue'
import Button5Demo from '../ButtonCom/Button5.demo.vue'
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    }
  },
}
</script>