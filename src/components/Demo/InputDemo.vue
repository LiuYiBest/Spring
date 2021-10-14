<template>
  <div>
    <h1>Input 输入框组件</h1>
    <hr>
    <p>通过鼠标或键盘输入字符内容。</p>
    <p>根据不同的需求，一共有五种不同状态的输入框</p>
  <section>
    <ul>
      <li>默认输入：placeholder</li>
      <li>文本输入：text</li>
      <li>禁止输入：disabled</li>
      <li>只读选项：readonly</li>
      <li>输入错误：error</li>
    </ul>
  </section>
    <Demo :component="Input1Demo" />
    <Demo :component="Input2Demo" />
  </div>
</template>

<script lang='ts'>
import Input1Demo from '../InputCom/Input1.demo.vue';
import Input2Demo from '../InputCom/Input2.demo.vue';
import Demo from './Demo.vue'

export default {
  components:{
    Input1Demo,
    Input2Demo,
    Demo
  },
  setup(){
    return {Input1Demo,Input2Demo}
  }
}
</script>

<style lang='scss' scoped>
  ul{
    list-style: circle;
    padding: 0 20px;
  }
</style>