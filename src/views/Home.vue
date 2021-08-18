<template>
  <div>
    <div class="topnav">
      <div class="logo">log</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>

    <div class="banner">
      <h1>春风UI</h1>
      <h2>四季组件库，一个很有趣的UI组件库</h2>
      <p class="action">
        <a href="">Github</a>
        <a href="">快速开始</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
