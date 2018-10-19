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
  height: 100%;
}
</style>
