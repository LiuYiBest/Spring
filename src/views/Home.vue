<template>
<div>
   <div class="top">
 <Topnav />
    <div class="banner">
      <h1>春风UI</h1>
      <h2>四季组件库，一个很有趣的UI组件库</h2>
      <p class="actions">
        <a href="https://github.com/LiuYiBest">Github</a>
        <router-link to="/doc">快速开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-vue"></use>
  </svg>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-ts"></use>
  </svg>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-light"></use>
</svg>
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
$blue:rgb(47,170,168);
.top{
  background: rgb(186,218,209);
  background: linear-gradient(9deg, rgba(186,218,209,1) 0%, rgba(58,155,217,1) 100%);

}
.features{
  >svg{
    width: 64px;
    height: 64px;
  }
}
.banner {
  // padding: 100px 0;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #0B3F1E;
  
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $blue;
      display: inline-block;
      padding: 4px 24px;
      color: white;
      border-radius: 4px;
      &:hover{
        background-color: #1b97cd;
        transition-duration: 500ms;
      }
    }
    
  }
 
  
}
</style>

