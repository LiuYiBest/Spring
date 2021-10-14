<template>
  <h1>Tag 标签组件</h1>
  <hr>
  <p>对不同的属性进行标记以及分类的小标签。</p>
  <Demo :component="Tag1Demo"></Demo>
  <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">

import Demo from "./Demo.vue";
import Tag1Demo from "../TagCom/Tag1.demo.vue";

import Attr from '../../components/Attributes.vue';
import DocTitle from '../DocTitle.vue';
import {columns} from '../../lib/data';
import {ref} from 'vue';

export default {
  components: {
    Tag1Demo,
    Demo,
    Attr,
    DocTitle
  },
  setup() {
    const data = ref([
      {
        params: 'type',
        desc: '标签类型',
        type: 'string',
        select: 'color / type' ,
        default: 'default',
      },

      {
        params: 'disable',
        desc: '禁止标签',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      }
    ]);
    return {
      Tag1Demo,
      columns,
      data
    };
  },
};
</script>

<style lang="scss">
.tag-demo {
  .spring-ui-tag + .spring-ui-tag {
    margin-left: 16px;
  }
}
</style>
