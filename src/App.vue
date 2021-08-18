<template>
  <router-view />
</template>

<script lnag="ts">
import { ref, provide } from 'vue'

export default {
  name: 'App',
  setup() {
    // 使用provide设置menuVisible的值
    const menuVisible = ref(false)
    provide('menuVisible', menuVisible) // set
  },
}
</script>
