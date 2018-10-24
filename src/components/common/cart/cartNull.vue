<template>
  <div class="cartNull">
    <div class="header">
      <mt-header title="">
        <router-link to="/" slot="left">
          <span><img src="https://static.nubia.cn/mobile/images/m_logo.png" style="width: 100%;"></span>
        </router-link>
        <router-link to="/" slot="right">
          <font-awesome-icon icon="equals" />
        </router-link>
      </mt-header>
    </div>

  </div>
</template>

<script>
import '../../../style/sass/cartNull.scss'
export default {
  name: 'cartNull',
  data () {
      return {
        msg:'cartNull'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
