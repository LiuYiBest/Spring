<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>春风UI</h1>
      <h2>SpringUI组件库，一款清新风格的UI组件库</h2>
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
        <h3>基于 TypeScript</h3>
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
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav,
  },
}
</script>

<style lang="scss" scoped>
$blue: #414b5b;

.topnavAndBanner {
  background-image: url('https://typoraimagedemo.oss-cn-shenzhen.aliyuncs.com/Qianduan/image-20210929213815511.jpg');

  border-bottom-left-radius: 10% 70px;
  border-bottom-right-radius: 10% 70px;
  // clip-path: ellipse(50% 50% at 50% 50%);
  z-index: 100;
}
.features {
  margin: 64px auto;
  width: 400px;
  // z-index: 2;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
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
  color: #0b3f1e;
  > h1 {
    color: #000;
  }
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $blue;
      display: inline-block;
      padding: 4px 24px;
      color: white;
      border-radius: 4px;
      &:hover {
        background-color: #397427;
        transition-duration: 500ms;
      }
    }
  }
}
</style>

