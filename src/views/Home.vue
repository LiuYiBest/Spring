<template>
  <div class="topNavAndBanner">
    <TopNav />
    <div class="banner">
      <h1>Spring UI</h1>
      <h2>春风UI组件库，一款有趣风格的UI组件库</h2>
      <p class="actions">
        <a href="https://github.com/LiuYiBest">Github</a>
        <router-link to="/doc">
          开始使用
        </router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue3</h3>
        <p>使用了最新的Vue3 Composition API开发</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 编写（非严格检查）</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都根据开发需求所制定</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/Topnav.vue'
export default {
  components: {
    TopNav,
  },
}
</script>

<style lang="scss" scoped>
$blue: #414b5b;
h1{
  font-size: 40px;
}
.topNavAndBanner {
  background: url('https://typoraimagedemo.oss-cn-shenzhen.aliyuncs.com/Qianduan/image-202110141955141831.png') no-repeat;
  //opacity: 1;
  background-size:100% 100%;
  border-bottom-left-radius: 10% 70px;
  border-bottom-right-radius: 10% 70px;
  z-index: 100;
}

.features {
  margin: 64px auto;
  width: 400px;
   z-index: 2;
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
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    color: #000;
  }
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #c7f1ee;
      display: inline-block;
      padding: 4px 24px;
      color: #1e272e;
      border-radius: 4px;
      &:hover {
        background-color: #e5fadb;
        transition-duration: 250ms;
      }
    }
  }
}
</style>

