<demo>
  基本使用
</demo>
<template>
  <div class="tags-wrap">
    <Tag>默认标签</Tag>
    <Tag color="red">颜色标签</Tag>
    <Tag type="waring">警告标签</Tag>
    <Tag disable="disabled" >禁止标签</Tag>
  </div>
</template>

<script lang="ts">
import Tag from "../../lib/Tag.vue";
export default {
  components: { Tag },
};
</script>

<style lang="scss" scoped>
.tags-wrap {
  > .spring-ui-tag {
    margin: 0 16px;
  }
}
</style>
