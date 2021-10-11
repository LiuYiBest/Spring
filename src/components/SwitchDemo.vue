<template>
  <div>
    <h1>Switch 开关组件</h1>
    <hr />
    <p>Switch 开关组件. 开关控制能切换单个设置的开/关两个状态。</p>
    <Demo :component="Switch1Demo" />
    <hr />
    <Demo :component="Switch2Demo" />
  </div>
</template>
  
  <script lang="ts">
import Switch1Demo from './SwitchCom/Switch1.demo.vue'
import Switch2Demo from './SwitchCom/Switch2.demo.vue'
import Demo from './Demo.vue'
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo,
    }
  },
}
</script>
  
  <style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>