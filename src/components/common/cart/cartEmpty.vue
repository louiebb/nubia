<template>
  <div class="cartEmpty">
    <div class="header">
      <mt-header title="">
        <router-link to="/" slot="left">
          <span><img src="https://static.nubia.cn/mobile/images/m_logo.png" style="width: 100%;"></span>
        </router-link>
        <div slot="right" class="right">
           <span class="icon icon-user"></span>
           <span class="icon icon-cart"></span>
        </div>
      </mt-header>
    </div>
    <div class="container">
      <div class="content">
        <div class="tips_msg">
            <div class="img_tips"></div>
            <h3>购物车还是空的</h3>
            <p>现在就去选购吧</p>
        </div>
        <div class="tips_btn">
          <a href="/" class="button letSee">去逛逛</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../style/sass/cartEmpty.scss'
export default {
  name: 'cartEmpty',
  data () {
      return {
        msg:'cartEmpty'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
