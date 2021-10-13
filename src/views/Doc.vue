<template>
  <div class="layout">
    <TopNav class="nav" :toggleVisible="true" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/Topnav.vue'
import { inject, Ref } from 'vue'

export default {
  components: { TopNav },
  setup() {
    //判断
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    //return之后才能用
    return { menuVisible }
  },
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    background-image: url('https://typoraimagedemo.oss-cn-shenzhen.aliyuncs.com/Qianduan/WDnav.png');
    flex-shrink: 0;

  }
  > .content {
    flex-grow: 1;
    padding-top: 90px;
    padding-left: 200px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 30px;

  }
}
//侧边栏列表
aside {
  $aside-index: 10;
  background-image: url('https://typoraimagedemo.oss-cn-shenzhen.aliyuncs.com/Qianduan/YSWD.png');
  width: 200px;
  padding: 28px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 100px;
  height: 100%;
  z-index: $aside-index;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 28px;
      }
      .router-link-active {
        background: #fff;
        transition: background 250ms;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>