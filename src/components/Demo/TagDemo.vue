<template>
  <h1>Tag 示例</h1>
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
  .eminent-ui-tag + .eminent-ui-tag {
    margin-left: 16px;
  }
}
</style>
