<template>
  <router-view />
</template>

<script lnag="ts">
import { ref, provide } from 'vue'
import { router } from './router'

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width <= 500 ? false : true)
    // 使用provide设置menuVisible的值
    provide('menuVisible', menuVisible)
    //全局前置守卫
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false
      }
    })
  },
}
</script>
