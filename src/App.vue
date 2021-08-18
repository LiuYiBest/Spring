<template>
  <div>我app的div
    <router-link to="/">F111</router-link>|||
    <router-link to="/xxx">F222</router-link>
  </div>
  <!-- <router-link to="f"></router-link> -->
  <hr/>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  
}
</script>
