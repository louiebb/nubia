<template>
  <div :class="data.class">
    <mt-header :fixed="true" :title="data.title">
      <router-link to="/" slot="left">
        <font-awesome-icon :icon="data.icon.left" />
      </router-link>
      <router-link to="/" slot="right">
        <font-awesome-icon :icon="data.icon.right" />
      </router-link>
    </mt-header>
  </div>
</template>

<script>
import '../../style/sass/header.scss'
export default {
  name: 'nubheader',
  props:['data'],
  data () {
      return {

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
