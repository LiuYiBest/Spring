
<template>
  <div>

    <h1>Radio 单选组件</h1>
    <hr>
    <p>单选框用于从选择组合中仅选取一项</p>
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
        params: 'value',
        desc: '文本说明',
        type: 'string',
        select: 'default',
        default: 'null',
      },
      {
        params: 'label',
        desc: '所选内容',
        type: 'string',
        select: 'labelVal',
        default: '—\n',
      },
      {
        params: 'disable',
        desc: '禁止选择',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      },
      {
        params: 'v-model',
        desc: '默认绑定',
        type: 'string',
        select: 'labelVal',
        default: '—\n',
      }
    ]);
    return {Radio1Demo, Radio2Demo, Radio3Demo,data, columns};
  }
};
</script>

<style lang="scss" scoped>

</style>