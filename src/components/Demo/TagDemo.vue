<template>
  <h1>Tag 标签组件</h1>
  <hr>
  <p>对不同的属性进行标记以及分类的小标签。</p>
  <Demo :component="Tag1Demo"></Demo>
</template>

<script lang="ts">

import Demo from "./Demo.vue";
import Tag1Demo from "../TagCom/Tag1.demo.vue";
export default {
  components: {
    Tag1Demo,
    Demo,
  },
  setup() {
    return {
      Tag1Demo
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
