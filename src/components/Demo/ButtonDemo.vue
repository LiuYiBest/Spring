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
    <Attr :columns="columns" :data="data"/>

  </div>
</template>
  
  <script lang="ts">
import Demo from './Demo.vue'
import Button1Demo from '../ButtonCom/Button1.demo.vue'
import Button2Demo from '../ButtonCom/Button2.demo.vue'
import Button3Demo from '../ButtonCom/Button3.demo.vue'
import Button4Demo from '../ButtonCom/Button4.demo.vue'
import Button5Demo from '../ButtonCom/Button5.demo.vue'

import Attr from '../../components/Attributes.vue';
import DocTitle from '../DocTitle.vue';
import {columns} from '../../lib/data';
import {ref} from 'vue';


export default {
  name: 'ButtonDemo',

  components: {
    Demo,
    Attr,
    DocTitle
  },
  setup() {
    const data = ref([
      {
        params: 'theme',
        desc: '按钮颜色',
        type: 'string',
        select: 'primary / warning / success / danger / info / link',
        default: 'default',
      },
      {
        params: 'size',
        desc: '尺寸大小',
        type: 'string',
        select: 'small / normal / large',
        default: 'normal',
      },
      {
        params: 'loading',
        desc: '是否加载',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      }
    ]);
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
      columns,
      data
    }
  },
}
</script>

<style lang="scss" scoped>

</style>