<template>
  <button   class="spring-switch"
          @click="toggle" :class="classes"  :disabled="disabled">
    <span></span>
  </button>
</template>

<script lang="ts">
import {computed}  from 'vue'
export default {
  props: {
    value: { type: Boolean, default: false,},
    disabled: {type:Boolean,default:false},
    size: {
      type: String,
      default: "normal",
    },
  },

  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    const classes = computed(() => {
      const {
        value,
        size,
        disabled
      } = props;
      return {
        ["spring-switch-checked"]: value,
        [`spring-switch-size-${size}`]: size,
        [`spring-switch-disabled`]: disabled,
      };
    });

    return { toggle ,classes };
  }
};
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.spring-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  //transition: background 250ms;

  &.spring-switch-disabled {
    cursor: not-allowed;
    background: #bfbfbf;
    >span {
      background: #ffffff;
    }
  }

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
  &.spring-switch-checked {
    background: #1890ff;
  }

  &.spring-switch-checked>span {
      //background: #17cc7a ;
      left: calc(100% - #{$h2} - 3px);
  }

  &:focus { outline: none; }
  &:active {
    > span { width: $h2 + 2px; }
  }
  &.spring-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
  &.spring-switch-size-big {
    width: $h * 3.5;
  }

  &.spring-switch-size-small {
    width: $h * 1.5;
    height: $h * 0.75;

    >span {
      width: $h2 * 0.7;
      height: $h2 * 0.7;
    }

    &.spring-switch-checked>span {
      left: calc(100% - #{$h2 * 0.7} - 2px);
    }

    &:active {
      >span {
        width: $h2;
      }
    }
  }
}
</style>