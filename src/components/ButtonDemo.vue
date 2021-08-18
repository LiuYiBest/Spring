<template>
  <h1>实例1</h1>
  <div>
    <Button> 你好 </Button>
    <Button :theme="button"> 你好 </Button>
    <Button :theme="link"> 你好 </Button>
    <Button :theme="text"> 你好 </Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log('你好')
    }
    return { onClick }
  },
}
</script>