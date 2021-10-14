<demo>
基本使用
</demo>

<template>
  <Radio label="1" v-model:value="labelVal">Vue</Radio>
  <Radio label="2" v-model:value="labelVal">React</Radio>
  <Radio label="3" v-model:value="labelVal">Angular</Radio>
</template>

<script lang="ts">
import Radio from '../../lib/Radio.vue'
import {ref} from 'vue';

export default {
  components:{Radio},
  setup(){
    const labelVal = ref('1')

    return {labelVal}
  }
};
</script>

<style lang="scss" scoped>

</style>