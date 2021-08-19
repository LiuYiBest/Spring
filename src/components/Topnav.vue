<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon" >
       <use xlink:href="#icon-sun"></use>
      </svg>
    </div>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
      <router-link to="/">主页</router-link>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'

export default {
  setup() {
    //inject添加APP.vue的provide变量
    const menuVisible = inject<Ref<boolean>>('menuVisible') // get

    //切换列表显示
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return { toggleMenu }
  },
}
</script>


<style lang="scss" >

$blue:#0b3f1e;
.topnav {
  color: $blue;
  display: flex;
  padding: 16px 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  // border-bottom: 1px solid #666;
  box-shadow: 0 5px 5px rgb(111 111 111 / 30%);
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg{
      width: 40px;
      height: 40px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    a {
      margin: 0 8px;
      display: inline-block;
      padding:  14px;
    }
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    background: red;
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