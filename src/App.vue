<template>
  <router-view />
</template>

<script lnag="ts">
import { ref, provide } from 'vue'

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width <= 500 ? false : true)
    // 使用provide设置menuVisible的值
    provide('menuVisible', menuVisible) // set
  },
}
</script>
