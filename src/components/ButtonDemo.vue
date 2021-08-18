<template>
  <h1>实例1</h1>
  <div>
    <Button @click="onClick" @focus="onClick" @mousemove="onClick" size="small">
      你好aaa
    </Button>
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