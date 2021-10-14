<template>
  <h1>Tabs 切換组件</h1>
  <hr />
  <p>使用选项卡，你可以轻松地浏览和切换不同的视图。</p>
  <Demo :component="Tabs1Demo" />
  <Demo :component="Tabs2Demo" />
  <Attr :columns="columns" :data="data"/>

</template>
  
<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from '../TabsCom/Tabs1.demo.vue'
import Tabs2Demo from '../TabsCom/Tabs2.demo.vue'

import Attr from '../../components/Attributes.vue';
import DocTitle from '../DocTitle.vue';
import {columns} from '../../lib/data';
import {ref} from 'vue';
export default {
  components: {
    Demo,
    Attr,
    DocTitle
  },
  setup() {
    const data = ref([
      {
        params: 'selected',
        desc: '默认选项',
        type: 'string',
        select: 'index',
        default: 'index',
      },
      {
        params: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      }
    ]);
    return {
      Tabs1Demo,
      Tabs2Demo,
      columns,
      data
    }
  },
}
</script>