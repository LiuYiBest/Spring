<template>
  <Topnav />
  <div>
    <div class="banner">
      <h1>春风UI</h1>
      <h2>四季组件库，一个很有趣的UI组件库</h2>
      <p class="actions">
        <a href="https://github.com/LiuYiBest">Github</a>
        <router-link to="/doc">快速开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>

