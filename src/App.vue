<template>
  <div id="app">
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabbar'

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
#app {
  max-width: 720px;
  margin: 0px auto;
  height: 100%;
  font-family: "Microsoft Yahei","微软雅黑",Arial,Helvetica,sans-serif;
}
</style>
