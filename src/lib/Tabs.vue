<template>
  <div>
    <div v-for="(t, index) in titles" :key="index">{{ t }}</div>
    <component v-for="(c, index) in defaults" :is="c" :key="index" />
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'

export default {
  setup(props, content) {
    //slots.default  子节点数组
    const defaults = content.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs子标签需要是Tab')
      }
    })

    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    return {
      defaults,
      titles,
    }
  },
}
</script>