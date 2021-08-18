<template>
  <div :size="size">
    <button v-bind="$attrs">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {},
  setup(props, context) {
    const { size, ...rest } = context.attrs
    return { size, rest }
  },
}
</script>