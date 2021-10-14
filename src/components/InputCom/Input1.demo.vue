<demo>
  5种不同类型的input输入框
</demo>

<template>
  <Input  placeholder="placeholder" />
  <Input  value="Please input"/>
  <Input  value="Disabled input" disabled />
  <Input  value="Readonly"  readonly />
  <Input  value="Error input" error='输入有误，请重新输入'/>

</template>

<script lang='ts'>
import Input from '../../lib/Input.vue'
export default {
  components: {
    Input,
  },
  setup() {
  }
}

</script>