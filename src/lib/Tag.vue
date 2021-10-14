<template>
  <div
    :class="[
      'spring-ui-tag',
      `spring-ui-tag-${size}`,
      `spring-ui-tag-${type}`,
      `spring-ui-tag-${disable}`,

    ]"
    :style="{ color: color }"
  >
    <slot />
  </div>

</template>

<script lang="ts">


export default {
  props: {
    size: {
      type: String,
      default: "normal",
    },
    color: {
      type: String,
    },
    type: {
      type: String,
      default: "",
    },

    disable: {
      type: Boolean,
      default: false,
    }
  },

};
</script>

<style lang="scss">
$warn: #ffaf5d;
$info: #38879b;

.spring-ui-tag {
  background-color: white;
  display: inline-block;
  height: 38px;
  padding: 0 10px;
  line-height: 36px;
  font-size: 12px;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;

  &-waring {
    background-color:$warn;
    border-color: $warn;
    color: black;
  }
  &-danger {
    color: red;
  }
  &-disabled{
    cursor: not-allowed;
    color: grey;
  }
  &-info {
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: #909399;
  }


}
</style>
