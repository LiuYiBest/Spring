<template>
  <div class="topNav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-wind"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
      <router-link to="/">主页</router-link>
    </ul>
    <svg v-if="toggleVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-caidan"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'

export default {
  props: {
    toggleVisible: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    //inject添加APP.vue的provide变量      类型是Ref<boolean>
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    //切换列表显示
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return { toggleMenu }
  },
}
</script>


<style lang="scss" >
$blue: #0b3f1e;
.topNav {
  color: $blue;
  display: flex;
  padding: 16px 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 5px rgb(122 122 122 / 40%);
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 40px;
      height: 40px;
    }
  }
  > .menu {
    color: white;
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    a {
      margin: 0 8px;
      display: inline-block;
      padding: 14px;
    }
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 36px;
    height: 36px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>