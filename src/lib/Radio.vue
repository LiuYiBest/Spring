<template>
  <div :class="{'spring-radio': true,'spring-radio-disabled': disabled, }">
    <input type="radio"
           :id="label"
           :checked="value === label"
           @change="RadioChange"
           ref="inputRef" />
    <label :for="label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </label>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    label: {
      type: String,
    },
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const inputRef = ref<HTMLInputElement>(null);
    const RadioChange = () => {
      context.emit("update:value", inputRef.value.id);
    };
    return {
      RadioChange,
      inputRef,
    };
  },
};
</script>

<style lang="scss" scoped>

.spring-radio {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  label {
    cursor: pointer;
    display: inline-flex;
    padding-left: 10px;
    font-size: 14px;
  }
  &.spring-radio-disabled {
    cursor: not-allowed;
    opacity: 0.4;
    input {
      cursor: not-allowed;
      pointer-events: none;
    }
    label {
      cursor: not-allowed;
      pointer-events: none;
    }
  }
}
</style>
