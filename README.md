#  Spring-Ui
一款基于Vue3开发的UI组件库。

本组件库还未进行严格的单位测试和实际项目校验，因此不建议在生产环境中使用。

## 特性

* 🔥 基于Vue3，使用Composition API开发
* 🐂 使用TypeScript编写
* 👍 官网样式采用风格化


## 安装
```
yarn add spring-ui
```

## 引入
```
import {Button, Tabs, Switch, Dialog, Input, Tag, Radio} from "spring-ui"
```

## 使用
```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button} from "spring-ui"
export default {
  components: {Button}
}
</script>
```

## 已有组件
- [x] Switch 开关
- [x] Button 按钮
- [x] Dialog 对话框
- [x] Tabs 选项卡
- [x] Input 输入框
- [x] Tags 标签
- [x] Radio 单选
- [ ] 更多 ...

## 测试版本
- 0.0.3 beta


## 相关链接
- [Vuejs官方](https://cn.vuejs.org/index.html)
- [Vite官方](https://github.com/vitejs/vite)
- [Rollup.js](https://www.rollupjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
