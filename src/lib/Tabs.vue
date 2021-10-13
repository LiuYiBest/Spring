<template>
  <div class="spring-tabs">
    <div class="spring-tabs-nav" ref="container">
      <div class="spring-tabs-nav-item"
           v-for="(title,index) in titles"
           :ref="el => { if (title===selected) selectedItem = el }"
           @click="select(title)"
           :class="{selected: title=== selected}"
           :key="index">{{title}}</div>
      <div class="spring-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="spring-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {
  computed,
  ref,
  watchEffect,
  onMounted
} from 'vue'
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref < HTMLDivElement > (null)
    const indicator = ref < HTMLDivElement > (null)
    const container = ref < HTMLDivElement > (null)
    //onMounted只在第一次渲染执行
    onMounted(() => {
      //立即执行传入的一个函数，==同时响应式追踪其依赖==，并在其依赖变更时重新运行该函数
      watchEffect(() => {
        const {
          width
        } = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const {
          left: left1
        } = container.value.getBoundingClientRect()
        const {
          left: left2
        } = selectedItem.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'
      }, {
        flush: 'post'
      })
    })
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      // @ts-ignore
      if (tag.type.name !== Tab.name) {
        throw new Error('Tabs Child label must be Tab')
      }
    })
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected)
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return {
      current,
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.spring-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>