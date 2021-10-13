<demo>
  同时绑定多个输入框
</demo>

<template>
  <Input   v-model:value="message"/>
  <br />
  <Input   v-model:value="message"/>
  <br />
  <Input   v-model:value="message"/>

</template>

<script lang='ts'>
import Input from '../../lib/Input.vue'
import {ref} from 'vue'

export default {
  components: {
    Input,
  },
  setup() {
    const message = ref("绑定多个input");
    return {message}
  }
}

</script>