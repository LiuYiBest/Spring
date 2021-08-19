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
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-vue"></use>
      </svg>
      <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-ts"></use>
      </svg>
      <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
       <use xlink:href="#icon-light"></use>
      </svg>
      <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
    
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
  border-bottom-left-radius: 10% 70px;
  border-bottom-right-radius: 10%  70px;
  // clip-path: ellipse(50% 50% at 50% 50%);
}
.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
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

