<demo>
  内容替换
</demo>

<template>
  <Radio label="Vue" v-model:value="labelVal" />
  <Radio label="React" v-model:value="labelVal" />
  <Radio label="Angular" v-model:value="labelVal" />
  <div class="frame">frame:{{labelVal}}</div>
</template>

<script lang="ts">
import Radio from '../../lib/Radio.vue';
import {ref} from 'vue';

export default {
  name: 'RadioDemo2',
  components:{Radio},
  setup(){
    const labelVal = ref('Vue')
    return {labelVal}
  }
};
</script>

<style lang="scss" scoped>
.frame{
  padding: 10px 0;
}
</style>