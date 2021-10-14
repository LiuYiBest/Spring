  
<template>
  <h1>Dialog 弹窗组件</h1>
  <hr />
  <p>能根据用户操作展示对应的提示弹窗。</p>
  <Demo :component="Dialog1Demo" />
  <hr />
  <Demo :component="Dialog2Demo" />
  <hr />
  <Demo :component="Dialog3Demo" />
  <Attr :columns="columns" :data="data"/>
</template>
  
  <script lang="ts">
import Demo from './Demo.vue'
import Dialog1Demo from '../DialogCom/Dialog1.demo.vue'
import Dialog2Demo from '../DialogCom/Dialog2.demo.vue'
import Dialog3Demo from '../DialogCom/Dialog3.demo.vue'

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
        params: 'visible',
        desc: '是否展示',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      },
      {
        params: 'onClickOverlay',
        desc: '是否遮罩层关闭',
        type: 'boolean',
        select: 'false / true',
        default: 'true',
      },
      {
        params: 'ok',
        desc: '事件确认函数',
        type: 'function',
        select: '—\n',
        default: '—\n',
      },
      {
        params: 'cancel',
        desc: '事件取消函数',
        type: 'function',
        select: '—\n',
        default: '—\n',
      },
      {
        params: 'title',
        desc: '标题中的文本',
        type: 'string',
        select: 'title',
        default: 'title',
      },
      {
        params: 'content',
        desc: '内容中的文本',
        type: 'string',
        select: 'content',
        default: 'content',
      },
    ]);
    return {
      Dialog1Demo,
      Dialog2Demo,
      Dialog3Demo,
      columns,
      data
    }
  },
}
</script>