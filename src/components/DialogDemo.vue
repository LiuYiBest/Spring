<template>
  <div>实例</div>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :onClickOverlay="false" :ok="f1" :cancel="f2">
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'

export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {}
    return { x, toggle, f1, f2 }
  },
}
</script>