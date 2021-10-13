<template>
  <div>
    <h1>Input输入框组件</h1>
    <hr>
    <p>通过鼠标或键盘输入字符内容。</p>
    <p>根据不同的需求，一共有四种不同状态的输入框</p>
  <section>
    <ul>
      <li>normal</li>
      <li>disabled</li>
      <li>readonly</li>
      <li>error</li>
    </ul>
  </section>
  <Demo :component="Input1Demo" />
  </div>
</template>

<script lang='ts'>
import Input1Demo from '../InputCom/Input1.demo.vue';
import Demo from './Demo.vue'

export default {
  components:{
    Input1Demo,
    Demo
  },
  setup(){
    return {Input1Demo}
  }
}
</script>

<style lang='scss' scoped>
  ul{
    list-style: circle;
    padding: 0 20px;
  }
</style>