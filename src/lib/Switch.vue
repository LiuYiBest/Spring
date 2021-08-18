<template>
  <button
    class="spring-switch"
    @click="toggle"
    :class="{ 'spring-checked': value }"
  >
    <span></span>
  </button>
  <div>{{ value }}</div>
</template>


<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }

    return { toggle }
  },
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.spring-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 250ms;
  }
  &:focus {
    outline: none;
  }
  &.spring-checked {
    background: #409eff;
    > span {
      left: calc(24px);
    }
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.spring-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>