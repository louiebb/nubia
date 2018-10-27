<template>
  <div id="app">
    <!-- 是否保持离开时的状态 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
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
  font-family: 'Microsoft Yahei', '微软雅黑', Arial, Helvetica, sans-serif;
}
</style>
