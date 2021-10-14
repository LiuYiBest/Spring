
<template>
  <div>
    <h1>Radio 单选组件</h1>
    <Demo :component="Radio1Demo"/>
    <Demo :component="Radio2Demo"/>
    <Demo :component="Radio3Demo"/>

    <Attr :columns="columns" :data="data"/>
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Radio1Demo from '../RadioCom/Radio1.demo.vue';
import Radio2Demo from '../RadioCom/Radio2.demo.vue';
import Radio3Demo from '../RadioCom/Radio3.demo.vue';


import Attr from '../../components/Attributes.vue';
import DocTitle from '../DocTitle.vue';
import {columns} from '../../lib/data';
import {ref} from 'vue';


export default {
  components: {
    Demo,
    Attr,
    DocTitle},
  setup() {
    const data = ref([
      {
        params: 'label',
        desc: '相当于原生radio标签的value',
        type: 'string / number / boolean',
        select: '自定义',
        default: '自定义',
      },
      {
        params: 'v-model:value',
        desc: '双向绑定',
        type: '随着label属性类型改变',
        select: '自定义',
        default: 'label属性中的任意一个值',
      },
    ]);
    return {Radio1Demo, Radio2Demo, Radio3Demo,data, columns};
  }
};
</script>

<style lang="scss" scoped>

</style>